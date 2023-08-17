import ProductsGrid from '../components/ProductsGrid';
import Sidebar from '../components/Sidebar';
import Select from '../components/Select';
import { useState, useEffect } from 'react';
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
                <Sidebar />
                {sidebarHidden ? null : <button onClick={showSidebar} className='fixed right-5 top-5 z-10'>Close</button>}
            </div>
            <div className="col-span-4 lg:col-span-3">
                <div className="flex gap-2 mb-4">
                    <button onClick={showSidebar} className="lg:hidden h-12 flex flex-end w-[40%]">Fliter by</button>
                    <Select/>
                </div>
                <ProductsGrid />
            </div>
        </div>
    );
}