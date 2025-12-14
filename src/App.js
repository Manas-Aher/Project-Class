import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCategoryComponent from './Components/Dashboard/Category/AddCategoryComponent'
import Categorylist from './Components/Dashboard/Category/Catogorylist'
import AddProductComponent from './Components/Dashboard/Product/AddProductComponent'
import ProductListComponent from './Components/Dashboard/Product/ProductListComponent'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute';
import ReducerComponent from './Components/Dashboard/Reducer/ReduceComponent';

function App() {

  return (
    <ReducerComponent>
      <BrowserRouter>
      {/*<TopBarComponent click={click}/>
      <div style={{ display: "flex" }}>
        <Sidebar1 colla={colla} padding={padding} />*/}
        <Routes>
        <Route index element = {<Login/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route element={<PrivateRoute/>}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/addcategory' element={<AddCategoryComponent />} />
            <Route path='/categorylist' element={<Categorylist />} />
            <Route path='/addproduct' element={<AddProductComponent />} />
            <Route path='/productlist' element={<ProductListComponent />} />
        </Route>
        </Routes>
      {/*</div>*/}
      </BrowserRouter>
    </ReducerComponent>
  );
}

export default App;
