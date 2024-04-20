import { response } from 'express'
import { useState } from 'react'

function AddProperty() {
    const [image, setImage] = useState(false)
    const [images, setImages] = useState(false)
    const [propertyDetails, setPropertyDetails] = useState({
        description:"",
        typ:"apartment",
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

    const arrImagesHandler = (e) => {
        setImages(e.target.files[0])
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
        formData.append('property', image)
        formData.append('property', urlImages)
        try{
            await fetch('https://galstate-api-db8c5d80bbe4.herokuapp.com/uploadimage',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                },
                body:formData,
            }).then((response) => response.json()).then((error) => {console.error('Error uploading image:', error)})

            await fetch('https://galstate-api-db8c5d80bbe4.herokuapp.com/uploadfeaturesimages',{
                method:'post',
                headers:{
                    Accept:'application/json'
                },
                body:formData
            }).then((response) => response.json()).then((error) => console.error('Error uploading image', error))

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
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Property description</p>
                <textarea name="description" id="" cols="30" rows="10" onChange={changeHandler} value={propertyDetails.description}></textarea>
            </div>
            <div className="addproduct-type">
                <p>Type</p>
                <select name="ty" onChange={changeHandler}className="add-product-selector" value={propertyDetails.typ}>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                </select>
            </div>
            <div value={propertyDetails.category} className="addproduct-type">
                <p>Category</p>
                <select name="category" className="add-product-selector" onChange={changeHandler} >
                    <option value='isSpecial'>isBuy</option>
                    <option value='isPopular'>isRent</option>
                </select>
            </div>
            <div value={propertyDetails.price} className="addproduct-price">
                <p>Price</p>
                <input type="text" name='price' onChange={changeHandler} placeholder='Type here'/>
            </div>
            <div value={propertyDetails.size} className="addproduct-price">
                <p>Price</p>
                <input type="text" name='size' onChange={changeHandler} placeholder='Type here'/>
            </div>
            <div value={propertyDetails.rooms} className="addproduct-price">
                <p>Price</p>
                <input type="text" name='rooms' onChange={changeHandler} placeholder='Type here'/>
            </div>
            <div>
                <label htmlFor="">
                    <img src={image ? URL.createObjectURL(image):upload_area} alt="" className='addproduct-thumbnail-img'/>
                </label>
                <input type="file" name='image' id='file-input' onChange={imageHandler} hidden/>
            </div>
            <button onClick={() => {AddProperty()}} className="addproduct-btn">ADD</button>
        </div>
    )
}

export default AddProperty