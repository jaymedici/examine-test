const SocialsAuth = () => {
    return ( 
        <div className="flex flex-col content-start">
            <div className="flex items-center justify-center gap-4 h-7">
                <div className="rounded border border-gray-50 shadow-md">
                    <button className="flex items-center justify-center w-9 h-7">
                        <img className="h-3" src="img/socials/google-icon.svg" alt="" />
                    </button>
                </div>
                <div className="rounded border border-gray-50 shadow-md">
                    <button className="flex items-center justify-center w-9 h-7">
                        <img className="h-3" src="img/socials/apple-Logo.png" alt="" />
                    </button>
                </div>
                <div className="rounded border border-gray-50 shadow-md">
                    <button className="flex items-center justify-center w-9 h-7">
                        <img className="h-4" src="img/socials/facebook-icon.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default SocialsAuth;