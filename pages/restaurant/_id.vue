<template lang="pug">
.Page
  N-link(to="/", class="button") Вернуться к поиску
  
  pre {{restaurants}}
</template>

<script>
import restaurantQuery from "~/apollo/queries/restaurant/restaurant";
export default {
  data() {
    return {
      restaurants: []
    };
  },
  apollo: {
    restaurants: {
      query: restaurantQuery,
      prefetch: ({ $route }) => ({ id: $route.params.id }),
      variables() {
        return { id: this.$route.params.id };
      },
      fetchPolicy: "no-cache"
    }
  }
};
</script>