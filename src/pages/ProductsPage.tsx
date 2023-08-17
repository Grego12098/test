import { useState, useEffect } from 'react';
import ProductsGrid from '../components/products/ProductsGrid';
import Sidebar from '../components/sidebar/Sidebar';
import RecommendedDropdown from '../components/RecommendedDropdown';
import LoadMoreButton from '../components/LoadMoreButton';
export default function ProductsPage() {
    const [sidebarHidden, setSidebarHidden] = useState<boolean>(true);
    function showSidebar() {
        setSidebarHidden(prevState => !prevState); 
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setSidebarHidden(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="grid grid-cols-4">
            <div className={`${sidebarHidden ? 'hidden' : 'absolute z-10'} lg:col-span-1 lg:flex flex-col items-start gap-5`}>
                <h1 className='hidden lg:block text-3xl font-bold mb-2'>Filter By</h1>
                <Sidebar />
                {sidebarHidden ? null : <button onClick={showSidebar} className='fixed right-5 top-5 z-10'>Close</button>}
            </div>
            <div className="col-span-4 lg:col-span-3">
                <div className="flex gap-2 mb-4">
                    <button onClick={showSidebar} className="lg:hidden h-12 flex flex-end w-1/2 sm:w-[40%]">Fliter by</button>
                    <RecommendedDropdown/>
                </div>
                <ProductsGrid />
                <LoadMoreButton />
            </div>
        </div>
    );
}