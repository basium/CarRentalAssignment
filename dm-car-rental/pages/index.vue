<template>
    <section home-view class="flex flex-col flex-auto">
        <AdvertListComponent :advertList = "advertsData"/>
        <section class="flex flex-col">
                <div class="flex  flex-col jsutify-center ml-[13rem] items-center p-5 w-[8.2rem] h-11  text-secondary-300" style="margin-left:13rem; padding-left:1.25rem;">
                    Popular Cars
                </div>
                <div class="flex justify-center">
                    <ProductListComponent :columnCount="4" :products="popularCars"/>
                </div>
                <div class="flex  flex-col jsutify-center ml-[13rem] items-center p-5 w-[8.2rem] h-11  text-secondary-300" style="margin-left:13rem; margin-top:2rem; padding-left:1.25rem;">
                    Recommended Cars
                </div>
                <ConnectedProductListComponent
                :columnCount = "4"  
            />   
        </section>
    </section>
</template>
<script>
import { convertToClientModels } from '~/helpers/products';

export default {
    setup() {
    
        const { data: popularData } = useFetch('/api/cars/popular');
        const { data: advertsData } = useFetch('/api/promotions', { server: true });

        const popularCars = computed(() => {
            if (popularData.value) {
                return convertToClientModels(popularData.value);
            }
            return [];
        });

        return {
            advertsData,
            popularCars
        };
    }
}
</script>

