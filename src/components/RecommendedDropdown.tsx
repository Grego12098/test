import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue } from '../redux/searchSlice';
import { RootState } from '../redux/store';
export default function RecommendedDropdown() {
    const currentSelectValue = useSelector((state: RootState) => state.select.queryParams.sort);
    const dispatch = useDispatch();

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        const selectValue = event.target.value;
        const selectValueNumber = Number(selectValue);
        dispatch(setValue({sort: selectValueNumber}));
    }

    return (
        <>
            <select aria-label="sort-by" className='w-1/2 sm:w-[40%] h-12' onChange={handleChange} defaultValue={currentSelectValue}>
                <option value={1}>Recommended</option>
                <option value={2}>Lowest Price</option>
                <option value={3}>Highest Price</option>
                <option value={4}>Highest Discount</option>
            </select>
        </>
    )
}