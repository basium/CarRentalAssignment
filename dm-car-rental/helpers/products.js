export const convertToClientModels = function ( products ) {
    if( products?.length <=0){
        return []
    }
    let clientModels =[]
    products.forEach( function( product ) {
        clientModels.push({
            heading: product.name, 
            subHeading: product.type, 
            attribute1:'g',
            attribute2:'t',
            attribute3:'c',
            attribute1Value:product.gasolineLiter,
            attribute2Value:product.kindOfTransition,
            attribute3Value:product.people,
            price: product.pricePerDay,
            imageURL: product.img
        })
    });
    return clientModels;

}
