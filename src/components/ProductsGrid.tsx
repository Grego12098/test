import Product from './Product';
import  fetchProducts  from '../api/fetchProducts';
import { useQuery } from '@tanstack/react-query';

interface Price {
    priceIncTax: number;
}

interface Image {
    url: string;
}

interface Category {
    name: string;
}

interface Attributes {
    isRecommended: boolean;
}

type ProductProps = {
    id: string;
    productName: string;
    price: Price;
    image: Image;
    defaultCategory: Category;
    attributes: Attributes;
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
        <div className="col-span-3 grid grid-cols-3 sm:grid-cols-4 gap-10">
            {productData?.data.products.map((product: ProductProps) => (
                <Product
                    key={product.id}
                    productName={product.productName}
                    price={product.price.priceIncTax}
                    image={product.image.url}
                    category={product.defaultCategory.name}
                    recommended={product.attributes.isRecommended}
                    rating={product.averageRating}
                />
            ))}    
        </div>
    );
}