import Product from './Product';
import  fetchProducts  from '../api/fetchProducts';
import { useQuery } from '@tanstack/react-query';

interface Price {
    priceIncTax: number;
}

interface stockStatus {
    status: string;
}

interface Image {
    url: string;
}

type ProductProps = {
    id: string;
    productName: string;
    price: Price;
    image: Image;
    stockStatus: stockStatus;
    averageRating: number | null;
};

export default function ProductsGrid() {
    // currency converter map here? 
    // image alt text 
    // name vs external id for category
    // will need more props for more filtering options
    

    const {data: productData} = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
        // onSuccess: (data) => {
        //     return data;
        // },
    });
    
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {productData?.data.products.map((product: ProductProps) => (
                <Product
                    key={product.id}
                    productName={product.productName}
                    price={product.price.priceIncTax}
                    image={product.image.url}
                    stockStatus={product.stockStatus.status}
                    rating={product.averageRating}
                />
            ))}    
        </div>
    );
}