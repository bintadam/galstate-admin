import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import AddProduct from '../../Components/AddProperty/AddProduct'
import ListProperty from '../../Components/ListProperty/ListProperty'

function Admin() {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/listproduct' element={<ListProperty/>}/>
        </Routes>
    </div>
  )
}

export default Admin