import ProductsGrid from '../components/ProductsGrid';
import Sidebar from '../components/Sidebar';

export default function ProductsPage() {
    return (
        <div className="grid grid-cols-4">
            <Sidebar />
            <ProductsGrid />
        </div>
    );
}