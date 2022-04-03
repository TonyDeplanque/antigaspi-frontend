import API from "../lib/api"

export const updateProduct = async (fridgeId, productId, product) => {
    try {
        const response = await API.put(`/products/${productId}`, { data :  product })
        return response.data.data
    } catch (e) {
        throw (e)
    }
}

export const addProduct = async (fridgeId, product) => {
    const data = {
        quantity: product.quantity,
        expiryDate: product.expiryDate,
        food: {
            name: product.name,
            brand: product.brand,
            barcode: product.barcode,
            image_url: product.image,
        },
        fridge: fridgeId
    }

    try {
        const response = await API.post(`/products`, {data: data})
        return response.data.data
    } catch (e) {
        throw (e)
    }
}