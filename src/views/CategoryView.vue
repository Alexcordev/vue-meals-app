<template>
  <div>
    <h1 class="text-5xl mt-6 mb-8 text-green-800 font-bold text-center">
      {{ category }}
    </h1>
  </div>
  <div
    class="grid md:grid-cols-4 gap-3 m-8 items-start justify-center"
    v-if="!isLoading"
  >
    <Meal
      @click="getMealID(meal.idMeal)"
      v-for="meal in meals"
      :image="meal.strMealThumb"
      :meal="meal.strMeal"
    />
  </div>
  <div class="m-auto text-center mt-6" v-else>
    <p class="text-4xl">Chargement en cours...</p>
    <img class="m-auto mt-20" :src="logo" width="100" />
  </div>
</template>
<script>
import Meal from "@/components/Meal.vue";

export default {
  name: "CategoryView",
  components: {
    Meal,
  },
  data() {
    return {
      meals: [],
      category: "",
      isLoading: true,
      logo: require("../assets/1486.gif"),
    };
  },
  async created() {
    const categ = this.$route.params.meals;
    const data = await this.fetchMealsByCateg(categ);
    this.meals = data.meals;
    this.category = categ;
    this.isLoading = false;
  },
  methods: {
    async fetchMealsByCateg(categ) {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categ}`
      );
      const data = res.json();
      console.log(data);
      return data;
    },
    getMealID(id) {
      this.$router.push({ name: "details", params: { id: id } });
    },
  },
};
</script>
