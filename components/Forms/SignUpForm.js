import SocialsAuth from "../SocialsAuth";
import OrDivider from "../OrDivider";
import FormTitle from "../FormFields/FormTitle";
import FormSubtitle from "../FormFields/FormSubtitle";
import Input from "../FormFields/Input";
import InputPassword from "../FormFields/InputPassword";
import SubmitButton from "../FormFields/SubmitButton";

const SignUpForm = () => {
    return ( 
        <div className="mx-auto w-full mb-5 max-w-lg lg:max-w-[650px] md:pt-20 lg:pt-28 md:pb-60">
            <div className="relative px-6 pt-8 bg-white text-center flex flex-col content-start gap-6 md:border rounded-lg md:shadow-xl md:p-14 lg:p-20">
                <div className="flex flex-col content-center gap-3">
                    <FormTitle text="Create your account" />
                    <FormSubtitle text="It Includes a free 2 week trial" />
                </div>
                <SocialsAuth />
                <OrDivider />
                <div className="flex flex-col content-start gap-6">
                    <Input type="text" placeholder="Full Name" />
                    <Input type="email" placeholder="Email" />
                    <InputPassword placeholder="Password" />
                    <SubmitButton text="Start your 2-week free trial" />
                </div>
            </div>
        </div>
     );
}
 
export default SignUpForm;