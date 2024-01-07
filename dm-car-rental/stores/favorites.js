import {defineStore} from 'pinia';

export const useFavoritesStore = defineStore('favorites',{

    state:()=>{
        return {
            favoritesList: []
        }
    },
    actions: {
        
        addFavorite : function() {
            // add to favorit List,
            // Save to local storage.
        },
        fetchFavorites: function(){
            // get from local storage and sync to favoritesList.
        }
    }
});
