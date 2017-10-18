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
              props = "filter"
              v-bind:headers = "select1headers"
              v-bind:items = "selectSite.name"
              hide-details>
            </v-select>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs3>
            <v-select
              label="Select"
              single-line
              auto
              v-bind:items = "selectSubnet"
              hide-details>
            </v-select>
          </v-flex>
          <v-flex xs2>
            <v-btn color="secondary" dark>
              Add Equipment
            </v-btn>
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

  export default {
  	name: 'subnets',
    beforeMount() {
      var self = this;
      axios.get("http://ipam-backend.herokuapp.com/api/equipment")
        .then(response => self.items = response.data);

      axios.get("http://ipam-backend.herokuapp.com/api/sites")
        .then(response => self.selectSite = response.data);
      
      for(var i=0;i<self.selectSite.length;i++) {
          self.select1names.append(self.selectSite[i].name);
        }

    },

    mounted () {
      console.log(this.items);
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
        select1headers: [
          { text: 'Site', value: 'name' }
        ],
        items: [],
        selectSite: [],
        select1names: [],
        selectSubnet: [],
      }
    }
  }
</script>