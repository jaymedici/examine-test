const Footer = () => {
    return ( 
        <footer className="hidden lg:block w-full bg-examinePurple h-auto text-white flex-col gap-6 px-48">
            <div className="flex content-start w-full pt-14 gap-16 border-b border-gray-700 pb-8">
                <div className="flex flex-col gap-4 w-80">
                    <div className="w-36">
                        <img src="img/logowhite.png" className="h-8" alt="" />
                    </div>
                    <h2 className="font-heading text-2xl">Never miss an update!</h2>
                    <p>We are always updating our research and adding new stuff. 
                        Sign-up and always stay on top of our updates!</p>
                    <div className="w-full h-16 flex items-center justify-between p-3 rounded-full border border-white">
                        <input className="text-white bg-examinePurple h-6 w-52" type="text" placeholder="Your Email Address" />
                        <div className="flex items-center justify-center bg-white rounded-full h-12 w-12">
                            <img src="img/paper-plane-icon.png" className="h-6" alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-heading text-2xl">About us</h3>
                    <a href="">Our Story</a>
                    <a href="">Our Team</a>
                    <a href="">Our Editorial Policy</a>
                    <a href="">Our Mistakes</a>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-heading text-2xl">Resources</h3>
                    <a href="">Continuing Education</a>
                    <a href="">For Journalists</a>
                    <a href="">Our Story</a>
                    <a href="">Student Discount</a>
                    <a href="">Senior Discount</a>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-heading text-2xl">Social</h3>
                    <a href="">Facebook</a>
                    <a href="">Twitter</a>
                    <a href="">Linkedin</a>
                    <a href="">Email Us</a>
                </div>
            </div>

            <div className="flex justify-between py-4 text-sm">
                <p className="">Copyright 2010 - 2021 Examine Inc.</p>
                <p><a href="">Privacy Policy</a>  |  <a href="">Website Terms</a></p>
            </div>
        </footer>
     );
}
 
export default Footer;