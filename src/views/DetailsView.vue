<template>
  <div>
    <h1 class="text-5xl mt-6 mb-8 text-green-800 font-bold text-center">
      {{ this.meal }}
    </h1>
  </div>
  <div class="flex justify-center items-center w-3/4 mt-6 m-auto">
    <Details
      :image="this.image"
      :instructions="this.instructions"
      :ingredients="this.ingredients"
      :video="this.videoLink"
    />
  </div>
</template>
<script>
import Details from "@/components/Details.vue";

export default {
  name: "DetailsView",
  components: {
    Details,
  },
  data() {
    return {
      meal: "",
      ingredients: [],
      videoLink: "",
      image: "",
      instructions: "",
      ingThumb: "",
      imageIng: [],
    };
  },
  async created() {
    const id = this.$route.params.id;
    const data = await this.fetchMealById(id);
    this.meal = data.meals[0].strMeal;
    for (let i = 1; i <= 20; i++) {
      if (data.meals[0][`strIngredient${i}`]) {
        this.ingredients.push(
          `${data.meals[0][`strIngredient${i}`]} - ${
            data.meals[0][`strMeasure${i}`]
          }`
        );
      } else {
        break;
      }
      this.videoLink = data.meals[0].strYoutube.replace("watch?v=", "embed/");
      this.image = data.meals[0].strMealThumb;
      this.instructions = data.meals[0].strInstructions;
    }
    console.log(this.ingredients);
    console.log(this.image);
  },
  methods: {
    async fetchMealById(id) {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = res.json();
      return data;
    },
    async fetchIngredient(ing) {
      const res = await fetch(
        `https://www.themealdb.com/images/ingredients/${ing}`
      );
      const data = res.text();
      console.log(data);
      return data;
    },
  },
};
</script>
