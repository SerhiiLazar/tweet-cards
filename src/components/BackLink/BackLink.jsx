import {SlActionUndo} from "react-icons/sl";
import {LinkBack} from "./BackLink.styled";

const BackLink = ({to, children}) => {
    return (
        <LinkBack to={to}>
            <SlActionUndo size={"25"}/>
            {children}
        </LinkBack>
    )
}

export default BackLink;