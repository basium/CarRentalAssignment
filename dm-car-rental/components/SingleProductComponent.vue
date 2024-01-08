<template>
    <section class="flex flex-row">
        <div class="flex flex-col">
            <div clas="flex flex-fixed"></div>
            <div clas="flex flex-fixed">
                <img :src="selectedImage" style="width:100px; height:100px;"/>
                <img v-for="(image,index) in product.images" :src="image" style="width:40px; height: 40px;" :image-index="index" @click="event_imageClick">
            </div>
        </div>
        <div class="flex flex-col flex-auto">
            <div>
                <div>{{product.heading}}</div>
                <span>{{`<3`}}</span>
            </div>
            <div> Fake Rating </div>
            <div> {{product.description}} </div>
            <div class="grid grid-cols-3"> 
                <div>
                    <span>Car Type</span>
                    <span>{{product.type}}</span>
                </div>
                <div>
                    <span>Capacity </span>
                    <span>{{product.people}}</span>
                </div>
                <div>
                    <span>Gasoline</span>
                    <span>{{ product.gas }}</span>
                </div>
                <div>
                    <span>Steering</span>
                    <span>{{product.steering}}</span>
                </div>
            </div>
            <div class="flex flex-row flex-auto">
                <div>{{product.price}} /<span>day</span></div>
                <a class="rounded p3 ml-3 w-32 h-11 bg-blue-2 text-white text-center p-2"> Rent Now </a>
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
        }
    }
}
</script>