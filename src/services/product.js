import API from "../lib/api"

export const updateProduct = async (fridgeId, productId, product) => {
    try {
        const response = await API.put(`/products/${productId}`, { data :  product })
        return response.data.data
    } catch (e) {
        throw (e)
    }
}