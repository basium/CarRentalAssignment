import {defineStore} from 'pinia';
const STORAGE_KEY = "favorites";
export const useFavoritesStore = defineStore('favorites',{

    state:()=>{
        return {
            favoritesList: []
        }
    },
    actions: {
        addFavorite: function (product) {
            const pExists = this.favoritesList.find(function (p) { return p.id === product.id});
            if(!pExists)
            {
                this.favoritesList.push(product);
                /* Storing a copy on localStorage for when you visit again. This is simulating a server. */
                window.localStorage.setItem(STORAGE_KEY,JSON.stringify(this.favoritesList))
            }
        },
        removeFavorite: function (product) {
            const pExists = this.favoritesList.find(function (p) { return p.id === product.id});
            if( pExists){
                let index = this.favoritesList.indexOf(pExists);
                this.favoritesList.splice(index,1);
                window.localStorage.setItem(STORAGE_KEY,JSON.stringify(this.favoritesList))
            }
        },
        fetchFavorites: function(){
           let raw = JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");
           this.favoritesList = Array.isArray(raw)?raw:[];
           return this.favoritesList;
        }
    },
    getters : {
        getFavorites : function (state) {
            return state.favoritesList;
        },
        isFavorite : function (state) {
            return function (product) {
                let exists = state.favoritesList.find(function (p) {
                   return p.id === product.id;
                })
                return !!exists;
            }
        }
    }

});
