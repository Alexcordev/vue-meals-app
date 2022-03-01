<template>
  <div class="flex flex-col w-full mt-6 mb-8 m-auto">
    <img
      class="flex rounded-full border-4 border-green-700 object-contain items-center m-auto"
      :src="image"
      width="250"
    />
    <div class="flex justify-start w-full mt-8 m-auto">
      <p class="text-4xl text-green-700 mb-7">Préparation</p>
    </div>
    <p class="text-justify text-lg">{{ instructions }}</p>
    <p class="flex justify-start text-4xl text-green-700 mb-7 mt-6">
      Ingrédients
    </p>
    <section class="flex flex-row justify-between items-center gap-x-32 mt-6">
      <div class="w-full">
        <ul class="flex flex-col justify-start items-start">
          <li class="text-xl" v-for="ing in ingredients">
            {{ ing }}
          </li>
        </ul>
      </div>
      <div v-if="video">
        <iframe
          width="640"
          height="480"
          :src="video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="flex m-auto justify-center items-center w-full h-full" v-else>
        <div
          class="flex m-auto justify-center items-center border-2 border-green-400 w-3/4 h-52 shadow-md"
        >
          <h1 class="text-2xl text-green-400">VIDÉO NON DISPONIBLE...</h1>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Details",
  props: ["image", "instructions", "ingredients", "video"],
  methods: {
    async fetchIngImage(image) {
      const res = await fetch(
        `https://www.themealdb.com/images/ingredients/${image}`
      );
      const data = res.json();
      return data;
    },
  },
};
</script>
