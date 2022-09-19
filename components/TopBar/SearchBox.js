const SearchBox = () => {
    return ( 
        <div className="hidden lg:block w-2/3 bg-[#F7F7F7]">
            <div className="flex items-center content-start h-16 px-4 shadow-inner">
                <img src="img/search_icon_purple.png" className="h-6" alt="" />
                <input type="text" className="ml-2 border-b w-96 border-gray-600 bg-[#F7F7F7]" placeholder="What do you want to learn about?" />
            </div>
        </div>  
     );
}
 
export default SearchBox;