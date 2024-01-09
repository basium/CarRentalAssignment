<template>
    <section product-detail-view class="flex flex-auto flex-row justify-center">
        <div class="flex flex-col">
            <ConntectedSingleProductComponent :id="productId"/>
            <section class="flex flex-col flex-fixed">
                    <div class="flex  flex-col ml-[13rem] items-center p-5 w-[8.2rem] h-11  text-secondary-300">
                        Recommended Cars
                    </div>
                    <ConnectedProductListComponent
                        :columnCount = "4"
                    />
            </section>
        </div>

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