import React from "react";





const ProductListItem = (props) => {
    const { product } = props;
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.attributes.food.image_url} className="img-fluid rounded-start"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.attributes.food.name}</h5>
                        <p>{product.attributes.quantity}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



const ProductList = (props) => {
    const { products } = props;
    return (
        <ul className="list-group">
        { products.map(p => <li className={"list-group-item"} key={p.id}><ProductListItem product={p}/></li>)}
        </ul>);
}

export default ProductList;