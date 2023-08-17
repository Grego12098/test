type ProductProps = {
    productName: string;
    price: number;
    oldPrice: number | null;
    image: string;
    stockStatus: string;
    averageRating: number | null;
    reviewsCount: number | null;
};

export default function ProductCard({ productName, price, oldPrice, image, stockStatus, averageRating, reviewsCount}: ProductProps) {
    return (
        <div className="grid grid-rows-5 bg-white shadow-lg ">
            <img className="row-span-3 min-w-full " src={image} alt={productName} />
            <div className="flex flex-col items-start row-span-2 gap-1 ml-2 mt-4">  
                <h2 className="font-semibold text-lg">{productName.length > 40 ? `${productName.slice(0, 40)}...` :productName}</h2> 
                <div className="flex items-end">
                    <h4 className="font-bold text-red-600 text-2xl mr-4">£{price}</h4>
                    <del>{oldPrice? `Was £${oldPrice}`: null}</del>
                </div>
                <p className="font-medium text-lg">{stockStatus === 'G'? 'In Stock ' : 'Out of Stock'}</p>
                <p className="mb-2">{averageRating? `rating: ${averageRating}/5`: null} {reviewsCount? `(${reviewsCount})`: null}</p>
            </div>
        </div>
    );
}
