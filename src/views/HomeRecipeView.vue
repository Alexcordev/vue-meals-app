<template>
  <div class="flex items-center justify-center w-full">
    <input
      ref="search"
      class="w-3/4 p-4 border-green-600 border-2 m-8"
      placeholder="Rechercher par nom de recette"
      type="text"
      name="search"
      id="search"
    />
    <button
      class="border-2 border-green-800 rounded-full p-4 bg-green-500 text-white"
      @click="this.get_value()"
    >
      GO
    </button>
  </div>
  <div
    class="flex flex-col justify-center items-center mt-4"
    v-if="this.inputVal != ''"
  >
    <span class="text-green-800 text-2xl">
      R&eacute;sultat de recherche pour {{ this.inputVal }}
    </span>
    <div
      class="flex flex-row flex-wrap justify-center items-center mt-8 gap-x-10 gap-y-10"
    >
      <div
        class="relative cursor-pointer flex flex-col justify-center items-center border border-2 border-green-600 shadow-lg p-4 w-52 h-52 meal"
        v-if="meals.meals"
        v-for="meal in this.meals.meals"
      >
        <img :src="meal['strMealThumb']" alt="img" />
        <div class="meal-infos">
          <p class="text-white text-1xl font-bold text-center">
            {{ meal["strMeal"] }}
          </p>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center m-auto" v-else>
        <p class="text-center text-green-600 text-2xl">AUCUN RÉSULTAT</p>
      </div>
    </div>
  </div>
</template>
<script>
//import SearchBar from "@/components/SearchBar.vue";
export default {
  name: "HomeRecipeView",
  components: {},
  data() {
    return {
      inputVal: "",
      meals: [],
    };
  },
  methods: {
    async get_value() {
      if (this.$refs.search.value != "") {
        this.inputVal = this.$refs.search.value;
        this.meals = await this.fetchMeal(this.inputVal);
        console.log(this.meals);
        this.$refs.search.value = "";
      }
    },
    async fetchMeal(val) {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
      );
      const data = res.json();
      return data;
    },
  },
};
</script>
<style scoped>
.meal-infos {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in;
  opacity: 0;
}
.meal:hover .meal-infos {
  opacity: 1;
}
</style>
