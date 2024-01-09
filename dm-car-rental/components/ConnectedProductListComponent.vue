<template>
    <section class="flex justify-center">
        <section product-card-grid class="grid" :style="columnTemplates" style="column-gap:calc(4vw + 10px); row-gap:2em" v-if="!hasError">  
                <ProductCardComponet v-if="products.length>0" v-for="(product,index) in products"
                    :id="product.id"
                    :heading="product.heading"
                    :subHeading="product.subHeading"
                    :attribute1 = product.attribute1
                    :attribute2 = product.attribute2
                    :attribute3 = product.attribute3
                    :gas = product.gas
                    :transmission = product.transmission
                    :people = product.people
                    :price = product.price
                    :imageURL= product.imageURL
                    :isFavorite="favorites.indexOf(product.id)>-1"
                    @favoriteChanged ="event_favoriteChanged"
                /> 
        </section>
    </section>
    <div v-if="hasError">{{ errorMessage || `An unknown error has occured with this widget.` }}</div>
    <div class="flex flex-row flex-stretch justify-center p-4"> <input type="button" v-if="hasMorePages" class=" cursor-pointer rounded p3 ml-3 w-32 h-11 text-white text-center p-2 bg-blue-2" value='Load More' @click="event_moreItemsClicked"/></div>
</template>
<script>
// To do , add favorites functionality (conntect to the favorites store). 
    export default {
    props: {
        columnCount: { default: 1 },
        filter:{ default : null }
    },
    setup: async function (props) {
        const store = useProductStore();
        store.setFilter(props.filter)
        await useAsyncData('product', () => store.fetchFirst());
        return{store}
    },
    watch:{
        filter : function (newFilter) {
            this.store.setFilter(newFilter)
            this.store.fetchFirst();
        }        
    },
    computed: { 
        columnTemplates: function () {
            return { 'grid-template-columns': `repeat(${this.columnCount}, minmax(0, 1fr))` };
        },
        hasMorePages: function () {

            return (this.store.currentPage < this.store.lastPage );
        },
        hasError:function () {
            return this.store.errorState; 
        },
        errorMessage: function (){
            return this.store.errorMessage
        },
        favorites : function () {
            const favoritestore = useFavoritesStore(),
            favorites =  favoritestore.getFavorites;
            let fIds = [];
            favorites.forEach(function (f) {
                fIds.push(f.id);
            })
            return fIds;
        },
        products: function () {
            return this.store.rows;
        }
    },
    methods : {
        event_moreItemsClicked : async function (event) {
            const result = await this.store.nextPage();
            this.products.value =[...this.products.value, ...result];
        },
        event_favoriteChanged: function ( event ) {
            const favoriteStore = useFavoritesStore();
            if(event.isFavorite){
                let product = this.products.value.find(function (p) {
                    return p.id===event.id
                });
                favoriteStore.addFavorite(toRaw(product));
            }
            else {
                let product = this.products.value.find(function (p) {
                    return p.id===event.id
                });
                favoriteStore.removeFavorite(toRaw(product));
            }
        }
    }
}
</script>