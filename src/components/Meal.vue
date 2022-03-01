<template>
  <div
    class="flex flex-col gap-y-5 gap-x-10 border-solid border-2 border-green-600 rounded-md justify-center items-center p-10 w-full shadow-lg h-full"
  >
    <img class="rounded-full" v-bind:src="image" width="150" />
    <h1 class="text-;g mb-4 text-green-800 font-bold">{{ meal }}</h1>
  </div>
</template>
<script>
export default {
  name: "Meal",
  props: ["meal", "image"],
};
</script>
