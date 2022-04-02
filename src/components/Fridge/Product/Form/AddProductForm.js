import './AddProductForm..scss'
import {TextField} from "@mui/material";
import ButtonRefuse from "../../../common/Button/ButtonRefuse";
import ButtonSuccess from "../../../common/Button/ButtonSuccess";
import React, {useState} from "react";
import {getCurrentFridge} from "../../../../services/fridge";
import {addProduct} from "../../../../services/product";

const AddProductForm = ({fridgeId , onSuccess}) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [expiryDate, setExpiryDate] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addProduct(fridgeId, {name, quantity, expiryDate});
        onSuccess()
    }

    return (
        <form className="form-add-product" onSubmit={handleSubmit}>
            <TextField
                size="small" id="AddProductFromInputName" label="Nom" type="text" name="name" fullWidth margin="normal"
                onChange={(event => setName(event.target.value))}
            />
            <TextField
                size="small" id="AddProductFromInputQuantity" label="Quantité" type="number" name="quantity" fullWidth margin="normal"
                onChange={(event => setQuantity(event.target.value))}
            />
            <TextField
                size="small" id="AddProductFromInputExpiryDate" label="Date de péremption" type="date" name="expiryDate" fullWidth margin="normal"
                onChange={(event => setExpiryDate(event.target.value))}
            />
            <div className="form-add-product__actions">
                <ButtonRefuse>Annuler</ButtonRefuse>
                <ButtonSuccess type={'submit'}>Valider</ButtonSuccess>
            </div>
        </form>
    )
}


export default AddProductForm;