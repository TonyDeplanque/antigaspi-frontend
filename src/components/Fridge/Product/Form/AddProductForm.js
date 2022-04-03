import './AddProductForm..scss'
import {Button, TextField} from "@mui/material";
import ButtonRefuse from "../../../common/Button/ButtonRefuse";
import ButtonSuccess from "../../../common/Button/ButtonSuccess";
import React, {useEffect, useState} from "react";
import {addProduct} from "../../../../services/product";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

const AddProductForm = ({product, fridgeId, onSuccess, onRefuse}) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [expiryDate, setExpiryDate] = useState("");

    useEffect(() => {
        setName(product.name)
    }, [product.name])

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addProduct(fridgeId, {...product, name, quantity, expiryDate});
        onSuccess()
    }

    const handleRefuse = () => {
        setName("");
        setQuantity(1);
        setExpiryDate("")
        onRefuse()
    }

    const handleChangeQuantity = (value) => {
        if (value >= 1) {
            setQuantity(value)
        }
    }

    return (
        <form className="form-add-product" onSubmit={handleSubmit}>
            <TextField
                size="small" id="AddProductFromInputName" label="Nom" type="text" name="name" fullWidth margin="normal"
                value={name || ""}
                onChange={(event => setName(event.target.value))}
            />
            <div className="form-add-product__quantity">
                <TextField
                    size="small" id="AddProductFromInputQuantity" label="Quantité" type="number" name="quantity" fullWidth margin="normal"
                    value={quantity || 1}
                    onChange={(event => setQuantity(event.target.value))}
                />
                <Button onClick={() => handleChangeQuantity(quantity - 1)} className={"button"} variant="contained" size={"large"} disableElevation>
                    <FontAwesomeIcon icon={faMinus}/>
                </Button>
                <Button onClick={() => handleChangeQuantity(quantity + 1)} className={"button"} variant="contained" size={"large"} disableElevation>
                    <FontAwesomeIcon icon={faPlus}/>
                </Button>
            </div>

            <TextField
                size="small" id="AddProductFromInputExpiryDate" label="Date de péremption" type="date" name="expiryDate" fullWidth margin="normal"
                onChange={(event => setExpiryDate(event.target.value))}
            />
            <div className="form-add-product__actions">
                <ButtonRefuse onClick={() => handleRefuse()}>Annuler</ButtonRefuse>
                <ButtonSuccess type={'submit'}>Valider</ButtonSuccess>
            </div>
        </form>
    )
}


export default AddProductForm;