const MembershipBanner = () => {
    return ( 
        <div className="rounded-md border border-dotted border-infoBoxBold flex flex-col items-center justify-center w-full bg-infoBox cursor-pointer text-infoBoxBold h-28 p-2">
            <h2 className="font-semibold text-lg font-heading">Click here!</h2>
            <p className="text-sm font-thin">to sign up for the complete Examine Membership.
                Includes a free 2 week trial!</p>
        </div> 
     );
}
 
export default MembershipBanner;