import { StyledLink } from "./style";

const Link = (props) => {
    return ( 
        <StyledLink target={props.target} to={props.to}>{props.children}</StyledLink>
     );
}
 
export default Link;