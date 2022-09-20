const SubmitButton = (props) => {
    return ( 
        <button className="flex items-center justify-center w-full rounded-md h-9 bg-examinePurple text-white">
            {props.text}
        </button>  
     );
}
 
export default SubmitButton;