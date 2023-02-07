import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    //.replace(/ /g, "") => anytime we have a space, remove it.
    // "as SelectedPage" : forcing ts to treat it as SelectedPage enum value instead
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <AnchorLink
        // 1) "" is default which is black
        // 2) when we hover the tag, there is a small transition period when it changes color
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : "" }
                transition duration-500 hover:text-primary-300
            `}
        //we are using lowercase to set it as an id
            href={`#${lowerCasePage}`}
        //selectedPage is a state, which onClick, we want to change the state to whatever we click onto
            onClick={()=> setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};  

export default Link;