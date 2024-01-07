export default defineEventHandler( async (event) => { 
    return new Promise( function ( resolve, reject ) {
        const promotions = [{
            imageUrl:"/images/sports-white.png",
            heading: "The Best Platform for Car Rental",
            contentText: "Ease of doing a car rental safely and reliably. Of course at a low price."
        },{
            imageUrl:"/images/sports-white.png",
            heading: "Easy way to rent a car at a low price",
            contentText: "Providing cheap car rental services and safe and comfortable facilities."
        }]
        resolve(promotions);
    })
});