import API from "../lib/api"
import {getCurrentUser} from "./auth";
import qs from "qs";

export const getCurrentFridge = async () => {
    const currentUser = getCurrentUser();

    const query = qs.stringify({
        filters: {
            users: {
                id: {
                    $in: [currentUser.id],
                }
            },
        },
        populate: ['products', 'products.food']
    }, {
        encodeValuesOnly: true,
    });


    let fridges = []
    try {
        const response = await API.get(`/fridges?${query}`)
        fridges = response.data.data
    } catch (e) {
        // CHECK AFTER TO HANDLE ERROR
        throw (e)
    }

    return fridges.length ? fridges[0] : {};
}