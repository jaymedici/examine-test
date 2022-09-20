const Input = (props) => {
    return ( 
        <div className="">
            <input type={props.type} placeholder={props.placeholder} className="font-sm font-thin w-full h-9 p-2 border rounded-md border-gray-300 focus:border-examinePurple focus:outline-none" />
        </div>
     );
}
 
export default Input;