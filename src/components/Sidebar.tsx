import  fetchProducts  from '../api/fetchProducts';
import { useQuery } from '@tanstack/react-query';
import Checkbox from './Checkbox';

interface Options {
    identifier: string;
    displayValue: string;
    productCount: number;
}

type facetProps = {
    identifier: string;
    displayName: string;
    options: Options[];
}

export default function Sidebar() {
    const {data: productData} = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });
    return (
        <div className='col-span-1 flex flex-col items-start gap-5'>
            {productData?.data.facets.map((category: facetProps) => (
                <div className="flex flex-col gap-1" key={category.identifier}>
                    <h3>{category.displayName}</h3>
                    {category.options.map((categoryValue: Options) => (
                        <Checkbox
                            key={categoryValue.identifier}
                            label={categoryValue.displayValue}
                            productCount={categoryValue.productCount}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}