<template>
  <div
    class="flex flex-col gap-y-5 gap-x-10 border-solid border-2 border-green-600 rounded-md justify-center items-center p-10 w-full shadow-lg h-full"
  >
    <h1 class="text-5xl mb-4 text-green-800 font-bold">{{ category }}</h1>
    <img v-bind:src="image" width="300" />
    <p class="text-center mt-3">{{ description.substring(0, 80) + "..." }}</p>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["category", "description", "image"],
};
</script>
