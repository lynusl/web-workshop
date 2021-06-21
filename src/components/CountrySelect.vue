<template>
  <v-autocomplete
    @change="handleUpdate"
  :items="countries"
  label="Country"
  v-model="selectedCountry">
  </v-autocomplete>
</template>

<script lang="ts">
import Vue from "vue";
import api from "@/api/main";
import { Movie } from "@/types/movie";
import {DataTableHeader} from "vuetify";
import { getAllMovies } from "@/api/ghibli-api";

export default Vue.extend({
  name: "Settings",
  props: {
    country: {
      type: String,
    }
  },
  data: function () {
    return {
      countries: [
        "UK",
        "France",
        "USA",
        "Japan",
        "China",
        "Singapore"
      ],
      selectedCountry: this.$props.country

    };
  },
  methods:{
    handleUpdate(){
      this.$emit("update:country",this.selectedCountry);
    }
  }
});
</script>
