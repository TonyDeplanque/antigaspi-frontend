import React from "react";
import Modal from "../../../common/Modal";
import {Button} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBarcode} from "@fortawesome/free-solid-svg-icons";
import AddProductForm from "../Form/AddProductForm";

const AddProductModal = ({fridgeId, onClose, onSuccess}) => {
    const handleOnSuccess = async () => {
        onSuccess()
        onClose()
    }

    return (
        <Modal title="Ajouter un produit" onClose={onClose}>
            <Button
                variant={"outlined"}
                startIcon={ <FontAwesomeIcon icon={faBarcode}/>}
                fullWidth
                size="large"
                color="primary"
                aria-label="Je scanne mon produit">
                Je scanne mon produit
            </Button>
            <div style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}>ou</div>
            <AddProductForm fridgeId={fridgeId} onSuccess={handleOnSuccess}/>
        </Modal>
    )
}

export default AddProductModal