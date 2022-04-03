import React, {useEffect, useState} from "react";
import {getCurrentFridge} from "../../services/fridge";
import ProductList from "../../components/Fridge/Product/ProductList";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import './Fridge.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Fab} from "@mui/material";
import AddProductModal from "../../components/Fridge/Product/Modal/AddProductModal";

const Fridge = () => {
    const [fridge, setFridge] = useState({});
    const [products, setProducts] = useState([])
    const [openModal, setOpenModal] = useState(false);

    const fetchData =  async () => {
        const currentFridge = await getCurrentFridge();
        setFridge(currentFridge);
        if (currentFridge?.attributes?.products?.data.length) {
            setProducts(currentFridge.attributes.products.data)
        }
    }

    useEffect( () => {
        fetchData()
    }, [])

    return (
        <div className="page__fridge">
            <ProductList className={"page__fridge__list-product"} products={products}/>
            <div className="page__fridge__add-product">
                <Fab color="primary" aria-label="add product" onClick={() => setOpenModal(!openModal)}>
                    <FontAwesomeIcon icon={faPlus}/>
                </Fab>
            </div>
            { openModal && <AddProductModal fridgeId={fridge.id} onSuccess={fetchData} onClose={() => setOpenModal(false)}/>}
        </div>
    )
}

export default Fridge;