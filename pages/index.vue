<template lang="pug">
.Page

  //- https://milligram.io/#getting-started

  center(
    v-if="!restaurants.length"
  ) Spinner
  div(v-else)
    label Поиск ресторана
      input(
        type="search"
        v-model="keyword",
        placeholder="Искать по [Название ресторана]"
      )
    center(v-show="!filteredData.length")
      .button.button-clear(@click="keyword=''") не найдено, сбросить поиск

    table
      tr
        th(
          v-for="th in ['Название', 'юр.лицо']"
        ) {{th}}
      //- tbody
      tr(
        v-for="item in filteredData"
        :key="item.id"
        @click="$router.push({ path: `/restaurant/${Number(item.id)}` })"
        
      ) 
        td(
          v-for="(It,key) in cropId(item)"
        )
          .name(
            v-if="key === 'name'"
            v-html="mark(It)"
          )
          span(
            v-else
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
    // th() {
    //   return this.restaurants.length && Object.keys(this.restaurants[0]);
    // },
    filteredData() {
      return this.restaurants.filter(item => {
        return item.name.toLowerCase().includes(this.keyword.toLowerCase());
      });
    }
  },
  methods: {
    cropId(obj) {
      const { id, ...rest } = obj;
      return rest;
    },
    mark(word) {
      const regex = new RegExp("(" + this.keyword + ")", "gi");
      return word.replace(regex, "<mark>$1</mark>");
    }
  }
};
</script>

<style lang="stylus">
tr:not(:first-child)
  cursor pointer

  &:hover
    background aliceblue
</style>
