import Link from "next/link";

const NavBar = () => {
    return ( 
        <div className="hidden lg:block ml-auto px-4 w-96">
            <div className="flex items-center justify-end h-16 gap-4">
                <Link href="/"><a className="h-5">Login</a></Link>
                <Link href="/signUp">
                    <a>
                        <button className="flex items-center justify-center rounded-full px-2.5 py-5 bg-[#FFD747] text-examinePurple font-bold h-11 w-24">
                            Sign up
                        </button>
                    </a>
                </Link>
                <div className="mr-2 pt-1">
                    <button className="hammenu">
                        <span className="hammenu-top bg-black"></span>
                        <span className="hammenu-middle bg-black"></span>
                        <span className="hammenu-bottom bg-black"></span>
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;