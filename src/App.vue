<template>
  <nav class="text-center mt-3 p-4 text-white font-bold bg-green-500">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/all-categories"
      >Recherche Par Cat&eacute;gorie</router-link
    >
    |
    <router-link to="">&Agrave; propos</router-link>
  </nav>
  <router-view />
</template>
