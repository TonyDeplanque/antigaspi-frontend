import axios from "axios";

export const getProductByBarcode = async (barcode) => {
    let product = {}
    try {
        const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json?`)
        const openfactfoodModel = response.data;
        product = {
            name: openfactfoodModel?.product?.product_name_fr || '',
            brand: openfactfoodModel?.product?.brands || '',
            image: openfactfoodModel?.product?.selected_images?.front?.display?.fr || '',
            barcode: openfactfoodModel?.product?.code || ''
        };
    } catch (e) {
        // CHECK AFTER TO HANDLE ERROR
        throw (e)
    }

    return product
}