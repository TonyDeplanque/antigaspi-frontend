import React, {useState} from "react";

import './ProductList.scss';
import date from "../../../lib/date";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarXmark, faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons'

const ProductListItem = (props) => {
    const { product } = props;
    const [quantity, setQuantity] = useState(product.attributes.quantity)


    return (
        <div className="product-list-item">
            <div className="product-list-item__top">
                <div  className="product-list-item__top__description">
                    <h5 className="card-title">{product.attributes.food.name}</h5>
                    <p>{product.attributes.food.brand}</p>
                </div>
                <div
                    className="product-list-item__top__image"
                    style={{ backgroundImage: `url(${product.attributes.food.image_url})`, backgroundPosition: 'center center', backgroundSize: 'cover'}}>
                </div>
            </div>
            <div className="product-list-item__bottom">
                <div>
                    <FontAwesomeIcon icon={faCalendarXmark} size="lg"/> {  date(product.attributes.expiryDate).format('DD/MM/YYYY') }
                </div>
                <div className="product-list-item__bottom__quantity">
                    <FontAwesomeIcon icon={faMinusSquare} onClick={() => setQuantity(quantity - 1)} size="lg"/>
                    <div>x{quantity}</div>
                    <FontAwesomeIcon icon={faPlusSquare} onClick={() => setQuantity(quantity + 1)} size="lg"/>
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