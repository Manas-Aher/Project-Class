import product from './ProductBox.module.css'
import Modal1 from '../Modal1/Modal1';
import React from 'react';

const ProductBox =  ({ id , productname , category , price , description , images, products  }) =>{

    const rating = Math.floor(Math.random() * 5 + 1);

    const [modalShow, setModalShow] = React.useState(false);

    const handleShowModel = () => {
        setModalShow(true)
    }

    return(
        <div className={product.product_card}>
            <div className={product.product_card_image}>
            <img alt='img' src={images} style={{width: "100%", height: "100%" , objectFit: "cover"}} />
            <span className={product.product_tag}>Sale</span>
            </div>
            <div className={product.product_card_details}>
            <h5 className={product.product_name}>
                {productname}
            </h5>
            <p className={product.product_price}>{`$${price}`}</p>
            <p className={product.product_description}>{description}</p>
            <div className={product.product_footer}>
                <button className={product.view} onClick={handleShowModel} >View</button>
                <div className={product.product_rating}>⭐ {rating}</div>
                <Modal1 
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    product={products}
                />
            </div>
            </div>
        </div>
    )
}


export default ProductBox;