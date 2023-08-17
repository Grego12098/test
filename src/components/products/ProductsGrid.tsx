import ProductCard from './ProductCard';
import  { FetchProducts }  from '../../redux/apiThunk';
import { useSelector } from 'react-redux';
import { AppDispatch } from "../../redux/store";
import { useDispatch } from 'react-redux';
import {productResults, queryParams} from '../../redux/searchSlice';
import { useEffect } from 'react';
import { ProductProps } from '../../types/propTypes';

export default function ProductsGrid() {
    const dispatch = useDispatch<AppDispatch>();
    const params = useSelector(queryParams);
    useEffect(() => {
        dispatch(FetchProducts());
    }, [dispatch, params]);
    const productData = useSelector(productResults);
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">

            {productData?.map((product: ProductProps) => (
                <ProductCard
                    key={product.id}
                    productName={product.productName}
                    price={product.price.priceIncTax}
                    oldPrice={product.price.wasPriceIncTax}
                    image={product.image.url}
                    stockStatus={product.stockStatus.status}
                    averageRating={product.averageRating}
                    reviewsCount={product.reviewsCount}
                />
            ))}    
        </div>
    );
}