import classes from "./TopBarComponent.module.css"
import { FaBars } from "react-icons/fa";

const TopBarComponent = ({click}) =>{

    return(
        <>
        <div className={classes.topbar}>
          <button className={`sb-button ${classes.btn}`} onClick={click}>
            <FaBars/>
          </button>
        </div>
        </>
    )
}

export default TopBarComponent;
