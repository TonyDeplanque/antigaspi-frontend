import React, {useEffect, useState} from "react";
import {getCurrentFridge} from "../../services/fridge";
import ProductList from "../../components/Fridge/Product/ProductList";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import './Fridge.scss';
import Btn from "../../components/common/Btn";
import Modal from "../../components/common/Modal";
import AddProductForm from "../../components/Fridge/Product/Form/AddProductForm";

const Fridge = () => {
    const [fridge, setFridge] = useState({});
    const [products, setProducts] = useState([])
    const [openModal, setOpenModal] = useState(false);

    useEffect( () => {
        async function fetchData() {
            const currentFridge = await getCurrentFridge();
            setFridge(currentFridge);
            if (currentFridge?.attributes?.products?.data.length) {
                setProducts(currentFridge.attributes.products.data)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="page__fridge">
            <ProductList className={"page__fridge__list-product"} products={products}/>
            <div className="page__fridge__add-product">
                <Btn icon={faPlus} onClick={() => setOpenModal(!openModal)}/>
            </div>
            { openModal && <Modal title="Ajouter un produit" onClose={() => setOpenModal(false)}>
                <AddProductForm/>
            </Modal> }
        </div>
    )
}

export default Fridge;