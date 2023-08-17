type ProductProps = {
    productName: string;
    price: number;
    image: string;
    stockStatus: string;
    averageRating: number | null;
};

export default function Product({ productName, price, image, stockStatus, averageRating}: ProductProps) {
    return (
        <div className="grid grid-rows-5 bg-white shadow-lg">
            <img className="row-span-3 min-w-full " src={image} alt={productName} />
            <div className="flex flex-col items-start row-span-2 gap-1 ml-2 mt-4">  
                <h2 className="font-semibold">{productName.length > 45 ? `${productName.slice(0, 45)}...` :productName}</h2> 
                <h4 className="font-bold text-red-600 text-2xl">£{price}</h4>
                <p className="font-medium">{stockStatus === 'G'? 'In Stock ' : 'Out of Stock'}</p>
                <p>{averageRating? `rating: ${averageRating}`: null}</p>
            </div>
        </div>
    );
}
