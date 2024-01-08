<template>
    <section home-view class="flex flex-col flex-auto">
        <AdvertListComponent :advertList = "advertsData"/>
        <section class="flex flex-col flex-auto">
            <div class="flex flex-row flex-auto"> <span>Popular Cars</span>
                <ProductListComponent :columnCount="4" :products="popularCars"/>
            </div>
            <div class="flex flex-row flex-auto"> <span>Recomended Car </span> <span> <a> View All </a></span></div>
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

