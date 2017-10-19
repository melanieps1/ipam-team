<template>
  
  <div class="subnets">
    <v-container grid-list-md>
      <v-card>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>
              <v-text-field
                append-icon="search"
                label="Search"
                single-line
                hide-details
                v-model="search"
                class="mr-3"
              ></v-text-field>
              <v-menu offset-y>
                <v-btn color="primary" dark slot="activator"><v-icon>place</v-icon>All Sites</v-btn>
                <v-list>
                  <v-list-tile v-for="menuItem in menuItems" :key="menuItem.title" @click="">
                    <v-list-tile-title>{{ menuItem.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <v-btn color="secondary" dark>Add New Subnet</v-btn>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-data-table
          v-bind:headers="headers"
          v-bind:search="search"
          :items="items"
          hide-actions
          class="elevation-1 stripe"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
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

</template>

<script>

  export default {
    name: 'subnets',
    mounted() {
      var self = this;

      axios.get("http://ipam-backend.herokuapp.com/api/subnets")
        .then(response => self.items = response.data);

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
        items: [],
        menuItems: [
          { title: 'Apax' },
          { title: 'Awesome Inc.' },
          { title: 'Dude Campus' },
          { title: 'Good Fellas' }
        ]
      }
    }
  }
</script>