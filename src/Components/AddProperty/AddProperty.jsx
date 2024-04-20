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

    const changeHandler = (e) => {
        const {name, value} = e.target
        if(name === 'category'){
            const updates = {
                isBuy:'false',
                isRent:'false'
            }

            updates[value] = 'true'
            setPropertyDetails(prevState => ({
                ...prevState,
                category:{...updates}
            }))
        } else {
            setPropertyDetails(prevState => ({
                ...prevState,
                [name]:value
            }))
        }
    }
    return (
        <div>

        </div>
    )
}

export default AddProperty