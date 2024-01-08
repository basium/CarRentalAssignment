<template>
    <div card class="flex flex-col w-[19rem] sm:w[15rem] h-[24.25rem] sm:h-72 rounded-xl p-0.25 bg-white">
        <div class="flex flex-row h-8">
            <div class="flex flex-auto w-2 h-[1.5rem] text-2xl tracking-[-0.037rem] leading-[1.875rem] font-bold text-secondary-500">{{heading}}</div>
            <div class="flex flex-fixed"> 
                <span class="cursor-pointer" @click="event_unfavoriteClicked" v-if="isFavorite"><img src="/images/heart_full.svg"/></span>
                <span class="cursor-pointer" @click="event_favoriteClicked" v-if="!isFavorite"><img src="/images/heart_empty.svg"/></span>
            </div>
        </div>
        <div class="flex flex-auto text-[0.875rem] leading-snug h-5 tracking-[-0.0175rem] font-bold text-secondary-300">{{subHeading}}</div>
        <div class="flex flex-col flex-auto justify-end h-48" v-if="imageURL"><img class="mb-3" :src="imageURL"></div>
        <div class="flex flex-row flex-auto">
            <div class="flex flex-row flex-fixed"><img class="w-6 h-6 mt-1.5" src="/images/gas.svg"/><div class="pt-2 pl-1 pr-2 text-sm font-medium  text-secondary-300">{{gas}}L</div></div>
            <div class="flex flex-row flex-fixed"><img class="w-6 h-6 mt-1.5"  src="/images/transmission.svg"/><div class="pt-2 pl-1 pr-2 text-sm font-medium text-secondary-300">{{transmission}}</div></div>
            <div class="flex flex-row flex-fixed"><img class="w-6 h-6 mt-1.5"  src="/images/people.svg"/><div class="pt-2 pl-1 pr-2 text-sm font-medium text-secondary-300">{{people}} People</div></div>
        </div>
        <div class="flex flex-row flex-auto mt-8 justify-between">
            <div class="flex flex-row align-middle"><span class="flex flex-auto flex-col justify-center text-x1 text-secondary-500 font-bold">${{price}}/</span><span class="flex flex-auto  flex-col justify-center text-sm text-secondary-300">day</span></div>
            <a :href="`/products/${id}`" class="rounded p3 ml-3 w-32 h-11 bg-blue-2 text-white text-center p-2"> Rent Now </a>
        </div>
    </div>
</template>
<script>

    export default{
        props : {
            id:{default:''},
            heading : { default : '' },
            subHeading: { default: '' },
            gas : { default:''},
            transmission : { default:''},
            people : { default:''},
            price: {default:'$99.00'},
            imageURL: { default : null },
            isFavorite : {default:false}
        },
        methods:{
            event_unfavoriteClicked : function (event) {
                this.$emit('favoriteChanged',{id:this.id, isFavorite:false});
            },
            event_favoriteClicked: function (event) {
                this.$emit('favoriteChanged',{id:this.id, isFavorite:true});
            }
        }
    }
</script>