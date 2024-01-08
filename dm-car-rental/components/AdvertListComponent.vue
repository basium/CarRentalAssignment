<template>
    <section class="flex flex-auto flex-row justify-around" style="padding:60px;">
            <AdvertCardComponent v-for="(advert, index) in advertList" 
            :isEven="index % 2 == 0"
            :imageUrl = "advert.imageUrl"
            :heading = "advert.heading"
            :contentText = "advert.contentText"
            :buttonCaption = "advert.buttonCaption" />
    </section>
</template>
<script>
    export default {
        props: {
            advertList : {
                default : function () {
                    return [];
                }
            }
        }
    }
</script>