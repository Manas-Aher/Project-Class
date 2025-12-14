import {Sidebar, Menu, MenuItem, SubMenu} from "react-pro-sidebar"
import { AiOutlineHome } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import classes from "./Sidebar1.module.css";
import { NavLink } from "react-router-dom";
import logo from './logo.jpg'

const Sidebar1 = ({colla , padding }) => {  
    // document.querySelector('#div').style.padding = colla == false ? "20px" : "10px";
    return (
      <>
      <div style={{ display: 'flex', height: 'auto'}} className={classes.div}>
        <Sidebar collapsed={colla} className={classes.main}>
          <Menu>
          <div style={{display: "flex", padding: "20px"}} id="div">
            <img alt="img" className={classes.image} src={logo}></img>
            <h3 className={classes.h3}>Manas Aher</h3>
          </div>
            <MenuItem> 
              <NavLink to="/dashboard"
                   className={({isActive })=> `${classes.link} ${isActive ? classes.active : ""}`}>
                    <span style={{display:"flex"}}><AiOutlineHome style={{marginRight: "20px"}}/></span> Dashboard
              </NavLink>
            </MenuItem>

            <SubMenu icon={<MdCategory/>} label="Category">
                <MenuItem >
                <NavLink to="/categorylist" 
                    className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ""}`}>
                                <FaList className={classes.icon} /> Category List
                 </NavLink>
                </MenuItem>
                
              <MenuItem>
                <NavLink to="/addcategory" 
                    className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ""}`}>
                                <FaPlus className={classes.icon} /> Add Category
                 </NavLink>
              </MenuItem>
            </SubMenu>
              
            <SubMenu icon={<FaBoxArchive/>} label="Product">
              <MenuItem> 
                <NavLink to="/productlist" 
                    className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ""}`}>
                                <FaList className={classes.icon} /> Product List
                 </NavLink>
              </MenuItem>

              <MenuItem> 
                <NavLink to="/addproduct" 
                    className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ""}`}>
                                <FaPlus className={classes.icon} /> Add Product
                 </NavLink>
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
        <div></div>
      </div>
      </>
    );
  }



export default Sidebar1;