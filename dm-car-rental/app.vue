<template>
  <section class="flex max-h-limit flex-auto flex-col font-dm bg-white-2 ">
    <section header class="flex flex-auto flex-row h-32 pt-9 pb-9 border-b border-[rgba(195,212,233,0.40)]">
        <div class="flex ml-[3.75rem] mr-[4px] w-[9.25rem] h-[2.75rem] text-primary-500 text-center font-bold text-[2rem] leading-[3rem] tracking-tighter"><a href="/">DM</a></div>
        <div class="flex flex-auto flex-row bg-white mr-[2.62rem] w-[64.5rem] h-[2.75rem] rounded-full border border-[rgba(195,212,233,0.40)]">
          <div class="flex flex-col justify-center ml-[1.25rem] mr-[1.25rem] mt-[0.63rem] mb-[0.62rem] cursor-pointer">
              <img class="w-[1.5rem] h-[1.5rem]" src="/images/search_normal.svg"/>
          </div>
          <input class="nakedInput w-64" placeholder="Search something here" @keyup.enter="event_searchSubmit"/>
        </div>
        <div class="w-[1.5rem] h-[1.5rem] mr-[3.75rem] cursor-pointer" style="margin-top:0.5rem"><a href="/favorites"><img src="/images/heart_blue.svg"/></a></div>

    </section>
    <section content class="flex flex-auto flex-row">
      <NuxtPage />
    </section>
    <section footer class="flex flex-auto flex-row h-96 bg-white mt-8 border-t border-[rgba(195,212,233,0.40)]">
      <div class="flex flex-col flex-auto" style="margin-top:5rem">
          <div class="flex flex-row border-b border-[rgba(195,212,233,0.40)] pb-9" style="padding-top:1rem">
              <div class="flex flex-col flex-auto">
                <div class="ml-[3.75rem] mr-[4px] w-[9.25rem] h-[2.75rem] text-primary-500 font-bold text-[2rem] leading-[3rem] tracking-tighter">
                  <a href="/">DM</a>
                </div>
                <div class="ml-[3.75rem] mt-[1rem] w-[18.25rem] h-[3rem] text-[rgba(19,19,19,0.60)] font-medium text-[1rem] leading-[150%] tracking-[-0.02rem]">
                    Our vision is to create a good Nuxt app and ace this assignment.
                </div>
              </div>

              <div class="flex flex-col text-secondary-500">
                <div class="flex flex-col justify-center shrink-0 font-medium text-[1.25rem] leading-[150%] tracking-[-0.025rem] w-[9.5rem] h-[2rem] mb-[1.5rem]">About</div>
                <div class="flex flex-col">
                    <span class="flex shrink-0 text-[rgba(19,19,19,0.60)] font-medium text-[1rem] leading-[150%] tracking-[-0.02rem] w-[9.5rem] mt-2 mb-2">How it works</span>
                    <span class="flex shrink-0 text-[rgba(19,19,19,0.60)] font-medium text-[1rem] leading-[150%] tracking-[-0.02rem] w-[9.5rem] mt-2 mb-2">Featured</span>
                    <span class="flex shrink-0 text-[rgba(19,19,19,0.60)] font-medium text-[1rem] leading-[150%] tracking-[-0.02rem] w-[9.5rem] mt-2 mb-2">Partnership</span>
                    <span class="flex shrink-0 text-[rgba(19,19,19,0.60)] font-medium text-[1rem] leading-[150%] tracking-[-0.02rem] w-[9.5rem] mt-2 mb-2">Business Relation</span>
                </div>
            </div>
            <div class="flex flex-col text-secondary-500">
                <div class="flex flex-col justify-center shrink-0 font-medium text-[1.25rem] leading-[150%] tracking-[-0.025rem] w-[9.5rem] h-[2rem] mb-[1.5rem]">Community</div>
                <div class="flex flex-col">
                    <span class="flex shrink-0 text-[rgba(19,19,19,0.60)] font-medium text-[1rem] leading-[150%] tracking-[-0.02rem] w-[9.5rem] mt-2 mb-2">How it works</span>
                    <span class="flex shrink-0 text-[rgba(19,19,19,0.60)] font-medium text-[1rem] leading-[150%] tracking-[-0.02rem] w-[9.5rem] mt-2 mb-2">Featured</span>
                    <span class="flex shrink-0 text-[rgba(19,19,19,0.60)] font-medium text-[1rem] leading-[150%] tracking-[-0.02rem] w-[9.5rem] mt-2 mb-2">Partnership</span>
                    <span class="flex shrink-0 text-[rgba(19,19,19,0.60)] font-medium text-[1rem] leading-[150%] tracking-[-0.02rem] w-[9.5rem] mt-2 mb-2">Business Relation</span>
                </div>
            </div>
            <div class="flex flex-col text-secondary-500 mr-[4.25rem]">
                <div class="flex flex-col justify-center shrink-0 font-medium text-[1.25rem] leading-[150%] tracking-[-0.025rem] w-[9.5rem] h-[2rem] mb-[1.5rem]">Socials</div>
                <div class="flex flex-col">
                    <span class="flex shrink-0 text-[rgba(19,19,19,0.60)] font-medium text-[1rem] leading-[150%] tracking-[-0.02rem] w-[9.5rem] mt-2 mb-2">How it works</span>
                    <span class="flex shrink-0 text-[rgba(19,19,19,0.60)] font-medium text-[1rem] leading-[150%] tracking-[-0.02rem] w-[9.5rem] mt-2 mb-2">Featured</span>
                    <span class="flex shrink-0 text-[rgba(19,19,19,0.60)] font-medium text-[1rem] leading-[150%] tracking-[-0.02rem] w-[9.5rem] mt-2 mb-2">Partnership</span>
                    <span class="flex shrink-0 text-[rgba(19,19,19,0.60)] font-medium text-[1rem] leading-[150%] tracking-[-0.02rem] w-[9.5rem] mt-2 mb-2">Business Relation</span>
                </div>
            </div>
          </div>
          <div class="flex flex-row justify-between text-secondary-500 font-medium text-[1rem] leading-[150%] tracking-[-0.02rem] ml-[3.75rem]" style="margin-top:2.5rem">
              <div class="flex flex-row flex-auto">©2022 DM. All rights reserved</div>
              <div class="flex flex-auto flex-row justify-end mr-[4.25rem]">
                  <span class="m-3">Privacy & Policy</span>
                  <span class="m-3">Terms & Conditions</span>
              </div>
          </div>
      </div>
    </section>

  </section>
</template>
<script>
  export default {
    mounted: function () {
      const store= useFavoritesStore();
      store.fetchFavorites(); //load up the favorites list when the app loads
      //Doing this client side only since I am using window.localStorage in the store for this assingment.
    },
    methods :{
      event_searchSubmit : async function ( event ) {

        if( event?.target?.value?.length > 0 ){          
            await navigateTo(`/products/search?q=${event.target.value}`)
        } 
      }
    }
  }
</script>

