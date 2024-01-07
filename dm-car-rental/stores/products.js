
import {defineStore} from 'pinia';
import { convertToClientModels } from '~/helpers/products';

//TO DO: USE ENV Variables for endpoint names.

export const useProductStore = defineStore('products',{

        state:()=>{
            return {
                rows: [],
                currentPage:1,
                lastPage:0,
                pageSize:0, 
                currentFilter:"",
                currentRecord:{},
                errorState : false,
                errorMessage : ""
            }
        },
        actions:{
            fetchFirst : async function () {
                let endpoint ="/api/cars",
                    firstResult = [];

                if( this.currentFilter ){
                    endpoint+=`?q=${this.currentFilter}`;
                }
                try{
                    /* Ideally, this is moved to a static data helper class.  */
                    const {data:result} = await useFetch(endpoint, {server :true }),
                    cars = result.value.data,
                    meta = result.value.meta;

                    
                    if(cars) {
                        firstResult = convertToClientModels(cars);
                    }
                    else {
                        firstResult = []
                    }
                    this.currentPage =1;
                    this.lastPage= parseInt(meta.last_page);
                    this.rows = firstResult;
                    this.errorState = false;
                    this.errorMessage = ""

                    return firstResult;
                }
                catch( error )
                {
                    this.errorState = true,
                    this.errorMessage = "Something went wrong while getting products (first)."   
                }

            },
            nextPage : async function (  ) {
                if( this.currentPage === this.lastPage){
                    return [];
                }

                let endpoint ="/api/cars",
                    nextPageResult = [],
                    mutliQuery = false,
                    newPage = this.currentPage+1;


                if( this.currentFilter ){
                    endpoint+=`?q=${this.currentFilter}`;
                    mutliQuery = true;
                }
                endpoint += `${mutliQuery?'&':'?'}page=${newPage}`
                try{
                    
                    /* Ideally, this is moved to a static data helper class.  */
                    const {data:result} = await useFetch(endpoint, {server :true }),
                    cars = result.value.data,
                    meta = result.value.meta;

                    if(cars) {
                        nextPageResult = convertToClientModels(cars);   
                    }
                    else {
                        nextPageResult = []
                    }

                    this.currentPage =newPage;
                    this.lastPage= parseInt(meta.last_page);
                    this.rows = nextPageResult;

                    this.errorState = false;
                    this.errorMessage = ""

                    return nextPageResult;
                }
                catch( error )
                {
                    this.errorState = true,
                    this.errorMessage = `Something went wrong while getting products (Page ${this.currentPage}).`
                }

            }
        }
});

