<template>
  <v-app light>
    <div class="subnets">
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
              props="filter"
              v-bind:items="uniqueSites"
              v-model="select1"
              hide-details>
            </v-select>
          </v-flex>
          <v-spacer></v-spacer>
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
              <td v-on:click="reportSubnet(props.item.id)"><router-link to="/equipment">{{ props.item.name }}</router-link></td>
              <td class="text-xs-right">{{ props.item.site[0].name }}</td>
              <td class="text-xs-right">{{ props.item.subnet_address }}</td>
              <td class="text-xs-right">{{ props.item.mask_bits }}</td>
              <td class="text-xs-right">{{ props.item.vLan }}</td>
              <td class="text-xs-right">{{ props.item.lease_time }}</td>
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
    name: 'subnets',
    beforeMount: function() {
      var self = this;
      axios.get("http://ipam-backend.herokuapp.com/api/subnets")
        .then(response => self.unfiltered = response.data);
      
    },

    watch : {

      select1 : function() {
        this.items = [];
        for(var i=0;i<this.unfiltered.length;i++) {
          if(this.unfiltered[i].site[0].name === this.select1) {
            this.items.push(this.unfiltered[i]);   
          } else if (this.select1 === 'All') {
            this.items.push(this.unfiltered[i]); 
          }
        }
      },

      unfiltered : function() {
        for(var i=0;i<this.unfiltered.length;i++) {
          
          if(!this.uniqueSites.includes(this.unfiltered[i].site[0].name)) {
            this.uniqueSites.push(this.unfiltered[i].site[0].name);
          }

        }
        this.uniqueSites.push('All');
        this.uniqueSites.sort();
      }

    },

    data () {
      return {
        search: '',
        headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        { text: 'Site Name', value: 'site_id' },
        { text: 'Sub Address', value: 'subnet_address' },
        { text: 'Mask Bits', value: 'mask_bits' },
        { text: 'vLan', value: 'vLan' },
        { text: 'Lease Time', value: 'lease_time' },
        { text: 'Notes', value: 'notes' },
        { text: 'View Equipment', value: '' }
        ],
        unfiltered : [],
        items : [],
        select1 : '',
        uniqueSites : []
      }
    },

    methods : {

    reportSubnet : function( subnetClicked ) {
        
        EventBus.$emit('subnet-clicked', subnetClicked);
        console.log(subnetClicked);
        console.log(typeof (subnetClicked));

      }
    }
  }
</script>