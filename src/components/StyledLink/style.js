import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;
    background: linear-gradient(to right, var(--second-color) 50% , var(--primary-color)  );
    /* background-color: var(--second-color); */
    color: var(--dark-color);
    font-family: var(--title-font);
    padding: 16px;
    text-align: start;
    border-radius: 8px;
    margin: 8px;
`