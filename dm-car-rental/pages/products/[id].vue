<template>
    <section product-detail-view class="flex flex-col">
        <SingleProductComponent :id="productId"/>
        <section class="flex flex-col flex-fixed">
                <div class="flex flex-row flex-auto"> <span>Popular Car </span> <span> <a> View All </a></span></div>
                <ProductListComponent
                    :columnCount = "3"
                    
                />
        </section>
    </section>
</template>
<script>
    export default {
        setup : function () {
            const route = useRoute(),
                productId = route.params.id;
        return {productId}
        }
    } 
</script>