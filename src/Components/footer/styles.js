import styledComponents from "styled-components";

export const Wrapper = styledComponents.div`
position: fixed;
bottom: 0;
z-index: 10;
left: 0;
right: 0;

> div {
    justify-content: space-around;
}
`;
