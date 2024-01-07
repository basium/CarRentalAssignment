<template>
    <section class="flex flex-col">
        <AdvertListComponent :advertList = "advertList"/>
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
        setup: async function () {
            const {data} = await useFetch('/api/promotions', {server :true });
            
            return{
                advertList : data,

            }
        }
    }
</script>