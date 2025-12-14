import MainContainer from '../MainContainer/MainContainer'
import ProductBox from './ProductBox/ProductBox';
import { getProducts } from './axios';
import React, { useEffect } from 'react';

const Dashboard = () => {

    const [productdata, setProducts] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const products = await getProducts();
                setProducts(products);
            }
            catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchData();
    }, []);

    return(
        <MainContainer style={{ paddingTop: "50px", paddingLeft: "50px", width: "100%", height: "100%" }}>
            <h2 className='mb-5'>Dashboard</h2> 
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {productdata.map((product) => (
                    <ProductBox
                        key={product.id}
                        productname={product.name}
                        category={product.categoryId}
                        price={product.price}
                        description={product.description}
                        rating={product.rating}
                        images={product.image}
                        products={product}
                    />
                ))}
            </div>
        </MainContainer>
    )
}

export default Dashboard;