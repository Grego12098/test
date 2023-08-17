import Checkbox from './Checkbox';
import { facetResults } from '../../redux/searchSlice';
import { useSelector } from 'react-redux';
import { facetProps, Options } from '../../types/propTypes';

export default function Sidebar() {
    const facetData = useSelector(facetResults);
    
    return (
        <>
            {facetData?.map((category: facetProps) => (
                <div className="flex flex-col gap-1 w-4/5 bg-white border shadow-sm pl-2 pt-1" key={category.identifier}>
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