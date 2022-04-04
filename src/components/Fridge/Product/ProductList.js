import React from "react";

import './ProductList.scss';
import Counter from "../../common/Counter";
import {updateProduct} from "../../../services/product";
import ExpiryDate from "./ExpiryDate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBarcode, faHatHard, faTrash} from "@fortawesome/free-solid-svg-icons";
import {IconButton} from "@mui/material";

const ProductListItem = (props) => {
    const { product } = props;

    const updateProductQuantity = async (quantity) => {
        await updateProduct(product.attributes.fridge.data.id, product.id, {...product, quantity})
    }

    return (
        <div className="product-list-item">
            <div className="product-list-item__top">
                <ExpiryDate expiryDate={product.attributes.expiryDate}/>
            </div>
            <div className="product-list-item__middle">
                <div
                    className="product-list-item__top__image"
                    style={{ backgroundImage: `url(${product.attributes.food.image_url})`, backgroundPosition: 'center center', backgroundSize: 'cover'}}>
                </div>
                <div className="product-list-item__top__content">
                    <div  className="product-list-item__top__description">
                        <h5>{product.attributes.food.name}</h5>
                        <p>{product.attributes.food.brand}</p>
                    </div>
                    <div className="product-list-item__top__actions">
                        <IconButton aria-label="cook" size={"small"}>
                            <FontAwesomeIcon icon={faHatHard}/>
                        </IconButton>
                        <IconButton aria-label="trash" size={"small"}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}



const ProductList = (props) => {
    const { products } = props;
    return (
        <div className="product-list">
        { products.map(p => <ProductListItem key={p.id} product={p}/>)}
        </div>);
}

export default ProductList;