export default function Button({title, className}){
    return (
        <button className={`px-4 rounded-md font-medium transition ${className}`}>
            {title}</button>
    )
}