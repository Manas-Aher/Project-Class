import axios from 'axios';

const API = 'https://6736e031aafa2ef22231c8bd.mockapi.io/dashboard';

const categoryAPI = 'https://6736e031aafa2ef22231c8bd.mockapi.io/dashboard/category';


// Product Section
export const getProducts = async () => {
    try {
        const response = await axios.get(`${API}/product`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching products:", error);
    }
};

export const addProduct = async (product) => {
    try {
        const response = await axios.post(`${API}/product`, product);
        return response.data;
    }
    catch (error) {
        console.error("Error adding product:", error);
    }
};

export const deleteProduct = async (product) => {
    try {
        const response = await axios.delete(
            `${API}/category/${product.categoryId}/product/${product.id}`
        );
        return response.data;
    }
    catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
};



// Category Section
export const getCategories = async () => {
    try {
        const response = await axios.get(`${categoryAPI}`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching categories:", error);
    }
};

export const addCategory = async (category) => {
    try {
        const response = await axios.post(`${categoryAPI}`, category);
        return response.data;
    }
    catch (error) {
        console.error("Error adding category:", error);
        throw error;
    }
}

export const deleteCategory = async (category) =>{
    try {
        const response = await axios.delete(
            `${categoryAPI}/${category.id}`
        );
        return response.data;
    }
    catch (error) {
        console.error('Error deleting category:', error);
        throw error;
    }
};

