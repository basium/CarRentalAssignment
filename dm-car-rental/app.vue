<template>
  <section class="flex max-h-limit flex-auto flex-col font-dm bg-white-2">
    <section header class="flex flex-auto flex-row h-32" style="background-color:green">Heading</section>
    <section content class="flex flex-auto flex-row">
      <NuxtPage />
    </section>
    <section footer class=" flex flex-auto flex-row h-96" style="background-color:blue">Footer</section>
  </section>
</template>
<script>
  export default {
    mounted: function () {
      const store= useFavoritesStore();
      store.fetchFavorites(); //load up the favorites list when the app loads
      //Doing this client side only since I am using window.localStorage in the store for this assingment.
    }
  }
</script>
