import { useState } from 'react'

function AddProperty() {
    const [image, setImage] = useState(false)
    const [images, setImages] = useState(false)
    const [propertyDetails, setPropertyDetails] = useState({
        description:"",
        typ:"",
        image:"",
        urlImages:[],
        category:{
            isBuy:"false",
            isRent:"false"
        },
        rooms:0,
        size:0,
        price:0
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0])
    }
    return (
        <div>

        </div>
    )
}

export default AddProperty