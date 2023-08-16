type CheckboxProps = {
    label: string;
    productCount: number;
}

export default function Checkbox({label, productCount}: CheckboxProps) {
    return (
        <div className="flex gap-1 ml-2">
            <input type="checkbox" aria-label={label}/>
            <label>{label}</label>
            <p>({productCount})</p>
        </div>
    );
}