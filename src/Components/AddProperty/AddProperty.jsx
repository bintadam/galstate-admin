import { response } from 'express'
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

    const addProduct = async () => {
        let responseData;
        let property = propertyDetails
        let formData = new FormData()
        formData.append('product', image) 
        try{
            await fetch('https://galstate-api-db8c5d80bbe4.herokuapp.com/uploadimage',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                },
                body:formData,
            }).then((response) => response.json()).then((data) => {console.error('Error uploading image:', error)})

            if(responseData && responseData.success){
                property.image = responseData.image;
                console.log(property)
                await fetch('https://galstate-api-db8c5d80bbe4.herokuapp.com/addproperty', {
                    method: 'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(property)
                }).then((response)=>{
                    if(response.ok && response.headers.get("Content-Type")?.includes('application/json')){
                        return response.json()
                    }
                }).then((data) => {
                    data.success ? alert('Property Added') : alert('Failed')
                })
            }
           
        } catch(error){
            console.error('Error Uploading Property:', error)
        }
    }

    return (
        <div>

        </div>
    )
}

export default AddProperty