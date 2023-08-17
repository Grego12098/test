import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { FetchProducts } from './apiThunk';
import { ProductProps, facetProps } from '../types/propTypes';

export type ResultTypes = {
    products: ProductProps[];
    facets: facetProps[];
};

type QueryParamTypes = {
    query: string;
    pageNumber: number;
    size: number;
    additionalPages: number;
    sort: number;
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
    },
    results: {
        products: [],
        facets: [],
    }
};

type setValuePayload = {
    query?: string;
    pageNumber?: number;
    size?: number;
    additionalPages?: number;
    sort?: number;
};

export const selectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<setValuePayload>) => {
            const params = state.queryParams;
            state.queryParams = { ...params, ...action.payload };
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
export default selectSlice.reducer;

export const productResults = (state: RootState) => state.select.results.products;

export const facetResults = (state: RootState) => state.select.results.facets;

export const queryParams = (state: RootState) => state.select.queryParams;