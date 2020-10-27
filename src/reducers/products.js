var initState = [
    {
        id:1,
        name : 'Iphone 7 plus',
        image: 'https://cdn.shopify.com/s/files/1/0101/2522/products/apple-iphone-7-plus-128gb-silver-appliph7pls128gbslv-by-apple-color-silver-8ca.jpg?v=1476808775',
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        inventory: 10,
        rating:3
    },
    {
        id:2,
        name : 'Samsung Galaxy S7',
        image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_xs_max_64gb.jpg',
        description: 'Sản phẩm do SAMSUNG sản xuất',
        price: 400,
        inventory: 15,
        rating: 4
    },
    {
        id:3,
        name : 'OPPO 7 plus',
        image: 'https://imgs.viettelstore.vn/images/Product/ProductImage/medium/95151513.jpeg',
        description: 'Sản phẩm do OPPO sản xuất',
        price: 450,
        inventory: 5,
        rating: 5
    },
]

const products = (state = initState, action) =>{
    switch(action.type){
        

        default: return [...state]
    }
}

export default products;