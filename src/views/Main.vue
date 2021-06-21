<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <div v-if="name === ''">
          Your profile
        </div>
        <div v-else>
          Welcome to Vue, {{ name }}
        </div>
        <v-spacer/>
      </v-card-title>
      <div class="pa-8">
        <v-text-field
          v-model="name"
          label="Name"
        >
        </v-text-field>
        <v-data-table
          :items="movies"
          :headers="headers">
          <template v-slot:item.release_date="{ item }">
            <v-chip>{{ item.release_date }}</v-chip>
          </template>
        </v-data-table>
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

export default Vue.extend({
  name: "Main",
  data: function () {
    return {
      name: "",
      mainOut: "",
      movies: [] as Movie[],
      headers: [{
        text: "Title",
        value: "title"
      }, {
        text: "Director",
        value: "director"
      }, {
        text: "Description",
        value: "description"
      }, {
        text: "Release Date",
        value: "release_date"
      }, {
        text: "Running Time",
        value: "running_time"
      }] as DataTableHeader[]
    };
  },
  methods:{

  },
  async mounted() {
    this.movies = await getAllMovies();
  },
});
</script>
