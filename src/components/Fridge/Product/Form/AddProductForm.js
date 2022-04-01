import FormInput from "../../../common/Form/Input";
import './AddProductForm..scss'

const AddProductForm = () => {
    return (
        <form className="form-add-product">
            <FormInput id="AddProductFromInputName" label="Nom" placeholder="Toto" type="text" name="name"/>
            <FormInput id="AddProductFromInputBrand" label="Marque" type="text" name="brand"/>
            <FormInput id="AddProductFromInputCategory" label="Catégorie" type="text" name="category"/>
            <FormInput id="AddProductFromInputBarcode" label="Code barre" type="text" name="barcode"/>
            <FormInput id="AddProductFromInputQuantity" label="Quantité" type="number" name="quantity"/>
            <FormInput id="AddProductFromInputExpiryDate" label="Date de péremption" type="date" name="expiryDate"/>
        </form>
    )
}


export default AddProductForm;