import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import AddProduct from '../../Components/AddProperty/AddProperty'
import ListProperty from '../../Components/ListProperty/ListProperty'


function Admin() {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route path='/addproperty' element={<AddProduct/>}/>
          <Route path='/listproperty' element={<ListProperty/>}/>
        </Routes>
    </div>
  )
}

export default Admin