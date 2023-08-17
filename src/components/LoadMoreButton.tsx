import { useSelector, useDispatch } from 'react-redux';
import { setValue } from '../redux/searchSlice';
import { RootState } from '../redux/store';

export default function LoadMoreButton() {
    const currentAdditionalPagesValue = useSelector((state: RootState) => state.select.queryParams.additionalPages);
    const dispatch = useDispatch();

    function LoadMore() {
        const incrementAdditionalPagesValue = currentAdditionalPagesValue + 1;
        dispatch(setValue({additionalPages: incrementAdditionalPagesValue}));
    }

    return (
        <div className='min-w-full flex justify-center'>
            <button className='mt-8 w-1/2 sm:w-1/4 h-12' onClick={LoadMore}>Load More</button>
        </div>
    )
}