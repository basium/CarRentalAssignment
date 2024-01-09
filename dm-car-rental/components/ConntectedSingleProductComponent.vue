<template>
    <section class="flex flex-row mb-8">
        <div class="flex flex-col">
            <div clas="flex flex-fixed"></div>
            <div image-content clas="flex flex-fixed" style="margin-top:2rem">
                <div card-selected-image class="flex flex-auto justify-center rounded-xl">
                    <img class="flex flex-col flex-fixed w-[30.75rem] h-[22.5rem] justify-center" :src="selectedImage"/>
                </div>
                <div class="flex flex-row flex-fixed">
                    <img class="flex flex-col flex-fixed w-[9.25rem] h-[7.75rem] ml-6 mr-6 mt-6 rounded-lg cursor-pointer" v-for="(image,index) in product.images" :src="image" :image-index="index" @click="event_imageClick">
                </div>
            </div>
        </div>
        <div card-text-content class="flex flex-col flex-auto w-[50rem] h-[32rem] bg-white rounded-lg p-6 pt-8 m-8 pb-11">
            <div class="flex flex-row flex-fixed">
                <div class="flex flex-fixed mr-3 h-[2.5rem] text-secondary-500 text-3xl leading-[3rem]">{{product.heading}}</div>
                <span class="cursor-pointer" @click="event_unfavoriteClicked" v-if="isFavorite"><img src="/images/heart_full.svg"/></span>
                <span class="cursor-pointer" @click="event_favoriteClicked" v-if="!isFavorite"><img src="/images/heart_empty.svg"/></span>
            </div>
            <div class="flex flex-fixed mt-2"><img src="/images/fakeReview.png"></div>
            <div class="flex flex-row mb-8 mt-8 text-secondary-400 font-normal "> {{product.description}} </div>
            <div class="flex">
                <div class="grid grid-cols-3" style="gap:44px; row-gap:16px;"> 
                    <div class="flex w-[11.4rem]">
                        <span class="flex flex-auto w-[5.7rem] h-[1.75rem] tracking-tighter text-secondary-300">Car Type</span>
                        <span class="flex flex-auto w-[5.7rem] tracking-tighter text-secondary-400 justify-end font-semibold">{{product.type}}</span>
                    </div>
                    <div class="flex flex-auto">
                        <span class="flex flex-auto w-[5.7rem] h-[1.75rem] tracking-tighter text-secondary-300">Capacity </span>
                        <span class="flex flex-auto w-[5.7rem] tracking-tighter text-secondary-400 justify-end font-semibold">{{product.people}} Person</span>
                    </div>
                    <div class="flex flex-auto">
                        <span class="flex flex-auto w-[5.7rem] h-[1.75rem] tracking-tighter text-secondary-300">Gasoline</span>
                        <span class="flex flex-auto w-[5.7rem] tracking-tighter text-secondary-400 justify-end font-semibold">{{ product.gas }}L</span>
                    </div>
                    <div class="flex flex-auto ">
                        <span class="flex flex-auto w-[5.7rem] h-[1.75rem] tracking-tighter text-secondary-300">Steering</span>
                        <span class="flex flex-auto w-[5.7rem] tracking-tighter text-secondary-400 justify-end font-semibold">{{product.steering}}</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-row flex-auto justify-between">
                <div class="flex flex-row "><span class="flex flex-auto flex-col justify-end text-2xl text-secondary-500 font-bold">${{product.price}}/</span><span class="flex flex-auto  flex-col justify-end text-base text-secondary-300">day</span></div>
                <div class="flex flex-row items-end"><a class="flex flex-auto flex-col justify-end rounded p3 ml-3 w-32 h-11 bg-blue-2 text-white text-center p-2"> Rent Now </a></div>
            </div>
        </div>
    </section>
</template>
<script>
import {convertToClientModel} from "../helpers/products.js"

export default{ 
    props:{
        id: {default : null}
    },
    data:function(){
        return {
            selectedImage:null
        }
    },
    setup : async function(props) {
        if( !props.id ){
            // throw error
        }
        const product = ref([]),
        {data:data} = await useFetch(`/api/cars/${props.id}`);
        product.value = convertToClientModel(data.value);
        return {product};
    },
    computed: {
        isFavorite : function () {
            const favoritestore = useFavoritesStore();
            return favoritestore.isFavorite(this.product);
        }
    },  
    mounted : function () {
        if( this.product.images.length > 0) {
            this.selectedImage = this.product.images[0];
        }
    },
    methods: {
        event_imageClick: function (event) {
            const images = this.product.images,
            nextImageIndex = parseInt(event?.currentTarget?.getAttribute('image-index'));
            if(nextImageIndex > -1){
                this.selectedImage = images[nextImageIndex];
            }
        },
        event_unfavoriteClicked : function (event) {
            const favoriteStore = useFavoritesStore();
            favoriteStore.removeFavorite(toRaw(this.product))
        },
        event_favoriteClicked: function (event) {
            const favoriteStore = useFavoritesStore();
            favoriteStore.addFavorite(toRaw(this.product));
        }
    }
}
</script>