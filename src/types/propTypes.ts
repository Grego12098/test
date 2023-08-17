export type ProductProps = {
    id: string;
    productName: string;
    price: {
        priceIncTax: number;
    };
    image: {
        url: string;
    }
    stockStatus: {
        status: string;
    };
    averageRating: number | null;
};

export interface Options {
    identifier: string;
    displayValue: string;
    productCount: number;
}

export type facetProps = {
    identifier: string;
    displayName: string;
    options: Options[];
};

