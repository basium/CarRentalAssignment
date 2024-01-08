<template>
    <ProductListComponent
    :columnCount="4"
    :products="favorites"/>
</template>
<script>
    import {useFavoritesStore} from '../../stores/favoriteStore';
    /* Doing this on client side since I am using localStorage to store favorites to save time. Ideally storage would be done on the server. */
    export default {
        computed: {
            favorites : function() {
               const favoriteStore = useFavoritesStore();
                return favoriteStore.getFavorites;
            }
        }
  
    }
</script>