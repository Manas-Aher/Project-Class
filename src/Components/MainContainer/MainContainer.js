import maindiv from './MainContainer.module.css'


const MainContainer = ({ children, ...props }) => {
    return (
        <>
            <div className={maindiv.mcontainer} {...props}>{children}</div>
        </>
    )
}

export default MainContainer;