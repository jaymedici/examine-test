import Logo from "./Logo";
import SearchBox from "./SearchBox";
import NavBar from "./Navbar";
import SearchIcon from "./SearchIcon";
import MobileMenu from "./MobileMenu";

const Header = () => {
    return ( 
        <header className="h-14 w-full flex items-center justify-between bg-examinePurple lg:h-16 lg:bg-white border drop-shadow-md">
            <div className="w-full h-8 flex items-center">
                <MobileMenu />  
                <Logo />
                <SearchBox />
                <NavBar />
                <SearchIcon />
            </div>  
        </header>
     );
}
 
export default Header;