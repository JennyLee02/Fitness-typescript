import { useState } from "react";
//24 is size
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link  from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean;
}

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
    //make flexBetween to use these following tailwind classes in multiple locations
    //item-center centers the item vertically and justify-between moves the item to the opposite ends
    const flexBetween = "flex items-center justify-between";
    //gives boolean of width info. if it is above 1060px or not
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    
    return (
        <nav>
            <div
                //z-30: it stays in front of everything
                className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
            >
                <div 
                    //this is the inner div of the navbar
                    //w-5/6 is the percentage. it will take 5/6 of the parent div.
                    //mx-auto centers it in the middle
                    className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/*left side */}
                        <img alt="logo" src={Logo}/>

                        {/*right side */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                {/*for links to different pages */}
                                {/* gap represents space between each item */}
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link 
                                        page="Home" 
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Benefits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Our Classes"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Contact Us"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                {/*for sign in and become a member */}
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                </div>
                            </div>
                            ) : (
                                <button
                                    className="rounded-full bg-secondary-500 p-2"
                                    onClick={()=>setIsMenuToggled(!isMenuToggled)}
                                >
                                    <Bars3Icon className="h-6 w-6 text-white"/>
                                </button>
                        )}
                    </div>
                </div>
            </div>
            {/*Mobile menu modal */}
            {!isAboveMediumScreens && isMenuToggled && (
                //exact number has to be put in []
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* Close Icon */}
                    <div className="flex justify-end p-12">
                        <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>
                    {/* Menu items */}
                    <div className="ml-[28%] flex flex-col gap-10 text-2xl">
                        <Link 
                            page="Home" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar; 
