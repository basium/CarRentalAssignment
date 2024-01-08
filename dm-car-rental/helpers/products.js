export const convertToClientModels = function ( products ) {
    if( products?.length <=0){
        return []
    }
    let clientModels =[]
    products.forEach( function( product ) {
        clientModels.push({
            id:product.id,
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
export const convertToClientModel = function (product) {
    if(!product){
        return {}
    }
    let allImages = [];

    product.images.forEach(function (img){
        allImages.push(img.url);
    });

    if(product?.img){
        allImages.unshift(product.img);
    }
    const clientModel = {
        id: product.id,
        heading : product.name,
        description: product.description,
        price: product.pricePerDay,
        images: allImages,
        type: product.type,
        people: product.people,
        gas: product.gasolineLiter,
        steering: product.kindOfTransition

    };
    return clientModel;
    
}
