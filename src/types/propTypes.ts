export type ProductProps = {
    id: string;
    productName: string;
    price: {
        priceIncTax: number;
        wasPriceIncTax: number | null;
    };
    image: {
        url: string;
    }
    stockStatus: {
        status: string;
    };
    averageRating: number | null;
    reviewsCount: number | null;
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

