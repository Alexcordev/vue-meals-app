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
</template>
<script>
export default {
  name: "SearchBar",
  data() {
    return {
      inputVal: "",
    };
  },
  methods: {
    get_value() {
      if (this.$refs.search.value != "") {
        this.inputVal = this.$refs.search.value;
        console.log(this.inputVal);
      }
    },
  },
};
</script>
