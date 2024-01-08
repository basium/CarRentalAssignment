<template>
    <section product-detail-view class="flex flex-col">
        <ConntectedSingleProductComponent :id="productId"/>
        <section class="flex flex-col flex-fixed">
                <ConnectedProductListComponent
                    :columnCount = "4"
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