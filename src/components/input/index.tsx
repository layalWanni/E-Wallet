interface InputProps {
    placeHolder: string,
    type: string,
    name: string,
    label: string,
}

export default function InputComponent({
    placeHolder, type, name, label, ...child
}: InputProps) {
    return (
        <div {...child}>
            <input
                placeholder={placeHolder}
                type={type}
                name={name}
            />
        </div>
    )
}
