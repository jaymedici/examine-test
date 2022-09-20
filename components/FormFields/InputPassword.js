const InputPassword = (props) => {
    return ( 
        <div className="flex border-gray-300">
            <input type="password" placeholder={props.placeholder} className="font-sm font-thin w-full h-9 p-2 border rounded-md border-gray-300 focus:border-examinePurple focus:outline-none" />
            <span className="absolute right-10 md:right-20 lg:right-24 pr-1 pt-2 text-xs font-bold text-examinePurple cursor-pointer">SHOW</span>
        </div>
     );
}
 
export default InputPassword;