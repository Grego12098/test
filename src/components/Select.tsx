import { useState, ChangeEvent } from 'react';
export default function Select() {
    const [value, setValue] = useState("1");

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        setValue(event.target.value);
    }

    return (
        <>
            <select className='w-[40%] h-12' onChange={handleChange}>
                <option value="1">Recommended</option>
                <option value="2">Lowest Price</option>
                <option value="3">Highest Price</option>
                <option value="4">Highest Discount</option>
            </select>
        </>
    )
}