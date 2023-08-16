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
        <>
            {productData?.data.facets.map((category: facetProps) => (
                <div className="flex flex-col gap-1 w-4/5 bg-white border shadow-sm mb-2" key={category.identifier}>
                    <h3 className="font-semibold text-xl mb-2">{category.displayName}</h3>
                    {category.options.map((categoryValue: Options) => (
                        <Checkbox
                            key={categoryValue.identifier}
                            label={categoryValue.displayValue}
                            productCount={categoryValue.productCount}
                        />
                    ))}
                </div>
            ))}
        </>
    );
}