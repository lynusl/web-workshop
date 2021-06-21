<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Settings
      </v-card-title>
      <div class="pa-8">
        Welcome visitor from {{ country }}
        <country-select
          :country.sync="country"
        />
        <v-switch
        :label="`Dark Theme ${darkTheme}`"
        v-model="darkTheme"
        @change="handleThemeSwitch"
        />
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import api from "@/api/main";
import { Movie } from "@/types/movie";
import {DataTableHeader} from "vuetify";
import { getAllMovies } from "@/api/ghibli-api";
import CountrySelect from "@/components/CountrySelect.vue";

export default Vue.extend({
  name: "Settings",
  components: {CountrySelect},
  data: function () {
    return {
      country: "Singapore",
      darkTheme: false
    };
  },
  methods:{
    handleThemeSwitch() {
      this.$vuetify.theme.dark = this.darkTheme;
      console.log(this.darkTheme);
    }
  },
});
</script>
