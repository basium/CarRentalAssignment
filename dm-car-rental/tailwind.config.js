/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./components/**/*.vue"
  ],
  theme:{
    fontFamily:{
      dm: ['Plus Jakarta Sans']
    },
    screens:{

    },
    extend : {
      maxHeight: {
        'limit':'2505px'
      },
      width:{
        'advert': '640px',
        'advert-s': '327px'
      },
      height:{
        'advert' : '360px',
        'advert-s': '232px'
      },
      backgroundColor:{
        'blue-1' : '#54A6FF',
        'blue-2' : '#3563E9'
      },
      lineHeight: {
         '12' : '3rem'
      }

    }
  }

}

