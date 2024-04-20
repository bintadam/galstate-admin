import {useEffect, useState} from 'react'
import './ListProduct.css'

function ListProperty() {
    const [allproperties, setAllProperties] = useState([])

    const fetchData = async () => {
        await fetch('https://galstate-api-db8c5d80bbe4.herokuapp.com/').then((response) => response.json()).then((data) => {setAllProperties(data)})
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h1>All Products List</h1>
            <div className="listproduct-format-main">
                <p>Properties</p>
                <p>Description</p>
                <p>Category</p>
                <p>Price</p>
                <p>Type</p>
                <p>Rooms</p>
                <p>Size</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allproperties.map((property, index)=> {
                return <>
                <div key={index} className="listproduct-format-main listproduct-format">
                    <img src={property.image} alt='' className='listproduct-product-icon'/>
                    <p>{property.description}</p>
                    <div >
                        {property.category}
                    </div>
                    <p>{property.rooms}</p>
                    <p>{property.typ}</p>
                    <p>{property.size}</p>
                    <p>{property.price}</p>
                    {property.urlImages.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt="" />
                        </div>
                    ))}
                </div>
                <hr />
                </> 
                })}
            </div>
        </div>
    )
}

export default ListProperty