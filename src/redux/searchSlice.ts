import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { FetchProducts } from './apiThunk';
import { ProductProps, facetProps } from '../types/propTypes';

type setValuePayload = {
    query?: string;
    pageNumber?: number;
    size?: number;
    additionalPages?: number;
    sort?: number;
    // facets?: FacetsTypes[];
};

export type ResultTypes = {
    products: ProductProps[];
    facets: facetProps[];
};

// type priceRangeTypes = {
//     gte: number;
//     lte?: number;
// };
// type OptionTypes = {
//     identifier : string;
//     value: string | priceRangeTypes;
// };

// type FacetsTypes = {
//     identifier : string;
//     options: OptionTypes[];
// };

type QueryParamTypes = {
    query: string;
    pageNumber: number;
    size: number;
    additionalPages: number;
    sort: number;
    // facets: FacetsTypes[];
};

type SelectTypes = {
    queryParams: QueryParamTypes;
    results: ResultTypes;
};

const initialState: SelectTypes = {
    queryParams: {
        query: "toilets",
        pageNumber: 0,
        size: 0,
        additionalPages: 0,
        sort: 1,
        // facets: {},
    },
    results: {
        products: [],
        facets: [],
    }
};

export const selectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<setValuePayload>) => {
            const params = state.queryParams;
            state.queryParams = { ...params, ...action.payload };
            console.log(state);
        }
    },
    extraReducers: (builder) => { 
        builder.addCase(FetchProducts.fulfilled, (state, action) => {
            if (action.payload) {
                state.results = action.payload;
            }
        });
    }
});

export const { setValue } = selectSlice.actions;
export const sortValue = (state: RootState) => state.select;
export default selectSlice.reducer;

export const productResults = (state: RootState) => state.select.results.products;

export const facetResults = (state: RootState) => state.select.results.facets;

export const queryParams = (state: RootState) => state.select.queryParams;