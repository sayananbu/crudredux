import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductApi } from '../services/product-api.service';
import { setProductsAction } from '../store/product/product.slice';

type useProductsReturn = {
	isLoaded:boolean,
    error: string
};
const useProducts = (): useProductsReturn => {
	const dispatch = useDispatch()
	const [isLoaded,setIsloaded] = useState(false)
    const [error, setError] = useState<string>('');
    const fetchProducts = useCallback(async function() {
        try {
            const res = await fetchProductApi();
            if (res.status === 200) {
                dispatch(setProductsAction(res.data));
				setIsloaded(true)
            } else throw new Error(`Error: ${res.status}`);
        } catch (e) {
            setError(`Something went wrong: ${e}`);
        }
    }, [dispatch]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return {isLoaded,error};
};

export default useProducts;
