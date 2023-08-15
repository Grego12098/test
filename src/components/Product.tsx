type ProductProps = {
    productName: string;
    price: number;
    image: string;
    category: string;
    recommended: boolean;
    rating: number | null;
};
export default function Product({ productName, price, image, category, recommended, rating}: ProductProps) {
    return (
        <div className="flex flex-col">  
            <img src={image} alt={productName} />
            <h2>{productName}</h2> 
            <p>price: {price}</p>
            <p>category: {category}</p>
            <p>recommended? {recommended}</p>
            <p>{rating? `rating: ${rating}`: null}</p>
        </div>
    );
}
