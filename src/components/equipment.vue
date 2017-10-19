<template>
  <v-app light>
  	<div class="equipment">
    <v-container>
      
      <v-container>
        <v-layout row wrap>
          <v-flex xs4>
            <v-text-field
              append-icon="search"
              label="Search"
              single-line
              hide-details
              v-model="search"
              class="mr-3">
            </v-text-field>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs3>
            <v-select
              label="Select"
              single-line
              auto
              v-bind:items="uniqueSites"
              v-model="select1"
              hide-details>
            </v-select>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs3>
            <v-select
              single-line
              auto
              v-bind:default-value.prop="select2"
              label="Select"
              v-model="select2"
              v-bind:items="uniqueSubnets"
              hide-details>
            </v-select>
          </v-flex>
        </v-layout>
      </v-container>
      
      <v-card>
        <v-data-table
          v-bind:headers="headers"
          v-bind:search="search"
          :items="items"
          hide-actions
          class="elevation-1 stripe"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.host_name }}</td>
              <td class="text-xs-right">{{ props.item.site[0].name }}</td>
              <td class="text-xs-right">{{ props.item.room_id }}</td>
              <td class="text-xs-right">{{ props.item.model }}</td>
              <td class="text-xs-right">{{ props.item.serial_number }}</td>
              <td class="text-xs-right">{{ props.item.mac_address }}</td>
              <td class="text-xs-right">{{ props.item.ip_address }}</td>
              <td class="text-xs-right">{{ props.item.mab }}</td>
              <td class="text-xs-right">{{ props.item.switch_man_ip }}</td>
              <td class="text-xs-right">{{ props.item.port_number }}</td>
              <td class="text-xs-right">{{ props.item.type[0].name }}</td>
              <td v-if="(props.item.notes[0] != undefined)" class="text-xs-right">{{ props.item.notes[0].text.substring(0, 8) + "..." }}</td>
              <td class="text-xs-right">{{ props.item.iron }}</td>
            </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
  </v-app>
</template>

<script>

  import { EventBus } from '../main.js'

  export default {
  	name: 'equipment',
    props: ['subnetClicked'],
    beforeMount: function() {
      var self = this;
      axios.get("http://ipam-backend.herokuapp.com/api/equipment")
        .then(response => self.unfiltered = response.data);
      
    },

    

    watch : {

      subnetClicked: function () {
      EventBus.$on('subnet-clicked', function(subnetClicked) {
        console.log(subnetClicked);
        console.log(typeof (subnetClicked));
        this.select2 = subnetClicked;
        console.log(this.select2);
      }.bind(this));
      },


      select1 : function() {
        console.log(this.select2);
        this.items = [];
        for(var i=0;i<this.unfiltered.length;i++) {
          if(this.unfiltered[i].site[0].name === this.select1) {
            this.items.push(this.unfiltered[i]);   
          } else if (this.select1 === 'All') {
            this.items.push(this.unfiltered[i]); 
          }
        }
      },

      select2 : function() {
        this.items = [];
        for(var i=0;i<this.unfiltered.length;i++) {
          if(this.unfiltered[i].subnet_id === this.select2) {
            this.items.push(this.unfiltered[i])   
          } else if (this.select2 === 'All') {
            this.items.push(this.unfiltered[i]); 
          }
        }
      },


      unfiltered : function() {
        for(var i=0;i<this.unfiltered.length;i++) {
          
          if(!this.uniqueSites.includes(this.unfiltered[i].site[0].name)) {
            this.uniqueSites.push(this.unfiltered[i].site[0].name);
          }

          if(!this.uniqueSubnets.includes(this.unfiltered[i].subnet_id)) {
            this.uniqueSubnets.push(this.unfiltered[i].subnet_id);
          }
        }
        this.uniqueSites.push('All');
        this.uniqueSites.sort();
        this.uniqueSubnets.sort();
        this.uniqueSubnets.unshift('All');
      }

    },

    data () {
      return {
        holdClick : 0,
        search: '',
        headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        { text: 'Hostname', value: 'host_name' },
        { text: 'Site', value: 'site[0].name' },
        { text: 'Room', value: 'room_id' },
        { text: 'Model', value: 'model' },
        { text: 'Serial Number', value: 'serial_number' },
        { text: 'MAC Address', value: 'mac_address' },
        { text: 'Reserved IP', value: 'ip_address' },
        { text: 'MAB', value: 'mab' },
        { text: 'Switch', value: 'switch_man_ip' },
        { text: 'Port', value: 'port_number' },
        { text: 'Equipment Type', value: 'type[0].name' },
        { text: 'Notes', value: 'notes.text' }
        ],
        unfiltered : [],
        items : [],
        select1 : '',
        select2 : 0,
        uniqueSites : [],
        uniqueSubnets : []
      }
    }
  }
</script>