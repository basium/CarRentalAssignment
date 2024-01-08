<template>
    <ProductListComponent
    :columnCount="4"
    :products="products"/>
</template>
<script>
    import {convertToClientModels} from "../helpers/products.js"
    export default {
        setup : async function() {
            const products = ref([]),
                {data:data} = await useFetch(`/api/cars/popular`);
                products.value = convertToClientModels(data.value);
                return {products};
        }
    }
</script>