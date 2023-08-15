type CheckboxProps = {
    label: string;
    productCount: number;
}

export default function Checkbox({label, productCount}: CheckboxProps) {
    return (
        <div className="flex gap-1">
            <input type="checkbox" />
            <label>{label}</label>
            <p>({productCount})</p>
        </div>
    );
}