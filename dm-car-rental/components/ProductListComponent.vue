<template>
    
    <section class="grid" :style="columnTemplates">
    
        <ProductCardComponet v-if="products.value.length>0 && !hasError" v-for="(product,index) in products.value"
            :heading="product.heading"
            :subHeading="product.subHeading"
            :attribute1 = product.attribute1
            :attribute2 = product.attribute2
            :attribute3 = product.attribute3
            :attribute1Value = product.attribute1Value
            :attribute2Value = product.attribute2Value
            :attribute3Value = product.attribute3Value
            :price = product.price
            :imageURL= product.imageURL
        /> 
        <div v-if="hasError">{{ errorMessage || `An unknown error has occured with this widget.` }}</div>
    </section>
    <input type="button" v-if="hasMorePages" class="rounded p3 ml-3 w-32 h-11 text-white text-center p-2 bg-blue-2" value='Load More' @click="event_moreItemsClicked"/>

</template>
<script>
// To do , add favorites functionality (conntect to the favorites store). 
    export default {
    props: {
        columnCount: { default: 1 }
    },
    setup: async function () {
        const store = useProductStore(),
        products = ref([]),
        { data: data } = await useAsyncData('products', () => store.fetchFirst());
        products.value = data;
        return{store, products}
    },
    computed: { 
        columnTemplates: function () {
            return { 'grid-template-columns': `repeat(${this.columnCount}, minmax(0, 1fr));` };
        },
        hasMorePages: function () {
            return (this.store.currentPage < this.store.lastPage );
        },
        hasError:function () {
            return this.store.errorState; 
        },
        errorMessage: function (){
            return this.store.errorMessage
        }
    },
    methods : {
        event_moreItemsClicked : async function (event) {
            const result = await this.store.nextPage();
            this.products.value =[...this.products.value, ...result];
        }
    }

}
</script>