<template>
    <div card class="flex flex-col">
        <div class="flex flex-row">
            <div class="flex flex-auto">{{heading}}</div>
            <div class="flex flex-fixed"> {{ '<3' }}</div>
        </div>
        <div class="flex flex-auto">{{subHeading}}</div>
        <div class="flex flex-col flex-auto" v-if="imageURL"><img :src="imageURL"></div>
        <div class="flex flex-row flex-auto">
            <div>attribute1<div></div><span>{{attribute1Value}}</span></div>
            <div>attribute2<div></div><span>{{attribute2Value}}</span></div>
            <div>attribute3<div></div><span>{{attribute3Value}}</span></div>
        </div>
        <div class="flex flex-row flex-auto">
            <div>{{price}}/<span>day</span></div>
            <a href="" class="rounded p3 ml-3 w-32 h-11 bg-blue-2 text-white text-center p-2"> Rent Now </a>
        </div>
    </div>
</template>
<script>
    export default{
        props : {
            heading : { default : '' },
            subHeading: { default: '' },
            attribute1: { default:''},
            attribute2: { default:''},
            attribute3: { default:''},
            attribute1Value : { default:''},
            attribute2Value : { default:''},
            attribute3Value : { default:''},
            price: {default:'$99.00'},
            imageURL: { default : null }
        }
    }
</script>