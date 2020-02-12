<template lang="pug">
.Page

  //- https://milligram.io/#getting-started

  Spinner(
    v-if="!restaurants.length"
  )
  div(v-else)
    label Поиск
      input(
        type="search"
        v-model="keyword",
        placeholder="Искать по [Название ресторана]"
      )

    table
      tr
        th(
          v-for="th in th"
        ) {{th}}
      //- tbody
      tr(
        v-for="item in filteredData"
        :key="item.id"
      ) 
        td(
          v-for="It in item"
        ) {{It}}


  
</template>

<script>
import restaurantsQuery from "~/apollo/queries/restaurant/restaurants";
import Spinner from "~/components/Spinner.vue";
export default {
  components: {
    Spinner
  },
  data() {
    return {
      keyword: "",
      restaurants: []
    };
  },
  apollo: {
    restaurants: {
      prefetch: true,
      query: restaurantsQuery,
      fetchPolicy: "no-cache"
    }
  },
  computed: {
    th() {
      return this.restaurants.length && Object.keys(this.restaurants[0]);
    },
    filteredData() {
      return this.restaurants.filter(item => {
        return item.name.toLowerCase().includes(this.keyword.toLowerCase());
      });
    }
  }
};
</script>

<style lang="stylus">
.Page
  margin 1em
</style>
