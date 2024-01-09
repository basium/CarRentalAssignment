<template>
    <section product-card-grid class="grid" :style="columnTemplates" style="column-gap:calc(4vw + 10px); row-gap:2em">  
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
</template>
<script>
    export default {
        props: {
            columnCount: { default: 1 },
            products : {default:[]}
        },
        computed: { 
            columnTemplates: function () {
                return { 'grid-template-columns': `repeat(${this.columnCount}, minmax(0, 1fr))` };
            },
            favorites : function () {
                const favoritestore = useFavoritesStore(),
                favorites =  favoritestore.getFavorites;
                let fIds = [];
                favorites.forEach(function (f) {
                    fIds.push(f.id);
                })
                return fIds;
            }
        },
        methods: {
            event_favoriteChanged: function ( event ) {
                const favoriteStore = useFavoritesStore();
                if(event.isFavorite){
                    let product = toRaw(this.products).find(function (p) {
                        return p.id===event.id
                    });
                    favoriteStore.addFavorite(toRaw(product));
                }
                else {
                    let product = toRaw(this.products).find(function (p) {
                        return p.id===event.id
                    });
                    favoriteStore.removeFavorite(toRaw(product));
                }
            }     
        }
    }
</script>