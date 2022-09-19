const LoginForm = () => {
    return ( 
        <div class="mx-auto w-full mb-5 max-w-lg lg:max-w-[650px] md:pt-20 lg:pt-28 md:pb-60">
            <div class="relative px-6 pt-8 bg-white text-center flex flex-col content-start gap-6 md:border rounded-lg md:shadow-xl md:p-14 lg:p-20">
                <div class="flex flex-col content-center gap-3">
                    <h2 class="font-heading font-semibold text-4xl">Welcome Back! 👋</h2>
                    <p class="font-body font-thin text-gray-400 text-sm">Let's build something great</p>
                </div>
                <div class="flex flex-col content-start">
                    <div class="flex items-center justify-center gap-4 h-7">
                        <div class="rounded border border-gray-50 shadow-md">
                            <button class="flex items-center justify-center w-9 h-7">
                                <img class="h-3" src="img/socials/google-icon.svg" alt="" />
                            </button>
                        </div>
                        <div class="rounded border border-gray-50 shadow-md">
                            <button class="flex items-center justify-center w-9 h-7">
                                <img class="h-3" src="img/socials/apple-Logo.png" alt="" />
                            </button>
                        </div>
                        <div class="rounded border border-gray-50 shadow-md">
                            <button class="flex items-center justify-center w-9 h-7">
                                <img class="h-4" src="img/socials/facebook-icon.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex items-center content-start h-6 gap-4">
                    <div class="flex-grow border-t border-gray-300"></div>
                    <p class="font-body font-xs font-thin text-gray-400">OR</p>
                    <div class="flex-grow border-t border-gray-300"></div>
                    <hr />
                </div>
                <div class="flex flex-col content-start gap-6">
                    <div class="border rounded-sm border-gray-300">
                        <input type="email" placeholder="Email" class="font-body font-sm font-thin w-full h-9 p-1" />
                    </div>
                    <div class="flex border rounded-sm border-gray-300">
                        <input type="password" placeholder="Password" class="font-body font-sm font-thin w-full h-9 p-1" />
                        <span class="pr-1 pt-2 text-xs font-body font-semibold text-examinePurple cursor-pointer">SHOW</span>
                    </div>
                    <button class="flex items-center justify-center w-full rounded-md h-9 bg-examinePurple text-white font-body">
                        Register
                    </button>
                </div>
                <div class="rounded-md border border-dotted border-infoBoxBold flex flex-col items-center justify-center w-full bg-infoBox cursor-pointer text-infoBoxBold h-28 p-2">
                    <h2 class="font-semibold text-lg font-heading">Click here!</h2>
                    <p class="text-sm font-thin font-body">to sign up for the complete Examine Membership.
                        Includes a free 2 week trial!</p>
                </div>
            </div>
        </div>
     );
}
 
export default LoginForm;