import React, {useEffect, useState} from "react";
import Modal from "../../../common/Modal";
import {Button} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBarcode} from "@fortawesome/free-solid-svg-icons";
import AddProductForm from "../Form/AddProductForm";
import Scanner from "../../../common/Scanner/Scanner";
import {getProductByBarcode} from "../../../../services/openfactfood";
import ImageCard from "../../../common/Image/ImageCard";

const AddProductModal = ({fridgeId, onClose, onSuccess}) => {
    const [openScanner, setOpenScanner] = useState(false)
    const [product, setProduct] = useState({})
    const [barcode, setBarcode] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const product = await getProductByBarcode(barcode)
            setProduct(product)
            setOpenScanner(false)
            setLoading(false)
        }

        if (!loading && barcode && !product.name) {
            fetchData()
        }
    }, [barcode])

    const onClickOpenScanner = () => {
        setOpenScanner(true)
        setProduct({})
    }

    const handleOnSuccess = async () => {
        onSuccess()
        onClose()
    }

    const handleOnRefuse = async () => {
        setProduct({})
        onClose()
    }


    return (
        <Modal title="Ajouter un produit" onClose={onClose}>
            <Button
                onClick={onClickOpenScanner}
                variant={"outlined"}
                startIcon={ <FontAwesomeIcon icon={faBarcode}/>}
                fullWidth
                size="large"
                color="primary"
                aria-label="Je scanne mon produit">
                Je scanne mon produit
            </Button>
            { product.image && <ImageCard src={product.image}/>}
            <AddProductForm product={product} fridgeId={fridgeId} onSuccess={handleOnSuccess} onRefuse={() => handleOnRefuse()}/>
            { openScanner && <Scanner onDetected={(barcode) => setBarcode(barcode)}/> }
        </Modal>
    )
}

export default AddProductModal