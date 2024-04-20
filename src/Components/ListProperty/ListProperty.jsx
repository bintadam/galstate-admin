import {useEffect, useState} from 'react'
import './ListProduct.css'
import crossicon from '../../assets/cross_icon.png'

function ListProperty() {
    const [alproperties, setAllProperties] = useState([])

    const fetchData = async () => {
        await fetch('https://galstate-api-db8c5d80bbe4.herokuapp.com/').then((response) => response.json()).then((data) => {setAllProperties(data)})
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

        </div>
    )
}

export default ListProperty