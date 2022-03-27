import react, {useEffect, useState} from "react";
import {getCurrentFridge} from "../../services/fridge";
import ProductList from "../../components/Fridge/Product/ProductList";


const Fridge = () => {
    const [fridge, setFridge] = useState({});
    const [products, setProducts] = useState([])
    useEffect(async () => {
        if (!fridge.id) {
            const currentFridge = await getCurrentFridge();
            setFridge(currentFridge);
            if (currentFridge?.attributes?.products?.data.length) {
                setProducts(currentFridge.attributes.products.data)
            }

        }
    }, [fridge.id])

    return (
        <>
            <ProductList products={products}/>
        </>
    )
}

export default Fridge;