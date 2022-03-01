<template>
  <div>
    <p class="text-center mt-7 text-3xl text-green-800">CATÉGORIES</p>
  </div>
  <div
    class="grid md:grid-cols-4 gap-3 m-8 items-start justify-center"
    v-if="!isLoading"
  >
    <Card
      @click="filterByCategory(meal.strCategory)"
      v-for="meal in meals"
      :category="meal.strCategory"
      :image="meal.strCategoryThumb"
      :description="meal.strCategoryDescription"
    />
  </div>
  <div class="m-auto text-center mt-6" v-else>
    <p class="text-4xl">Chargement en cours...</p>
    <img class="m-auto mt-20" :src="logo" width="100" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "HomeView",
  components: {
    Card,
  },
  data() {
    return {
      isLoading: true,
      meals: [],
      logo: require("../assets/1486.gif"),
    };
  },
  methods: {
    async fetchMealData() {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = res.json();
      return data;
    },
    async filterByCategory(category) {
      this.$router.push({ name: "category", params: { meals: category } });
    },
  },
  async created() {
    const mealsData = await this.fetchMealData();
    console.log(mealsData);
    this.meals = mealsData.categories;
    this.isLoading = false;
  },
};
</script>
