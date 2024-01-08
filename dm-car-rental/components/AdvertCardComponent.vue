<template>
    <div card-content :class="[isEven?'bg-blue-2':' bg-blue-1']" class="flex flex-col relative w-advert h-advert p-4 rounded-xl sm:w-advert-s sm:h-advert-s ml-16 mt-16 mb-16">
        <div class="text-white leading-12 text-3xl max-w-[272px] ml-3">{{ heading }}</div>
        <div class="text-white text-base leading-6 mt-3.5 ml-3 mb-6 max-w-[272px]"> {{ contentText }}</div>
        <a href="http://www.google.com" :class="[isEven?'bg-blue-1':'bg-blue-2']" class="rounded p3 ml-3 w-32 h-11 text-white text-center p-2"> {{buttonCaption }}</a>
        <img class="absolute w-[406px] h-[116px] sm:w-[196px] sm:h-[56px] " style="left:23%; bottom:3%" :src="imageUrl">
    </div>
</template>
<script>
/* To do change the Car rental link to a functioning one */
    export default {
        props : {
            isEven:{
                default:false
            },
            imageUrl:{
                default: "/images/sports-white.png"
            },
            heading : {
                default : "This is a default heading. Please set your own."
            },
            contentText: {
                default : "This is the default context text. Please also set your own."
            },
            buttonCaption:
            {
                default : "Rent Car"
            }
        },
        data : function () {
            return {}
        }
    }
</script>