import styledComponents from "styled-components";

export const Wrapper = styledComponents.div`
position: fixed;
bottom: 0;
z-index: 10;
left: 0;
right: 0;
background-color: white;

> div {
    justify-content: space-around;
}

.Mui-selected css-1ee5err-MuiButtonBase-root-MuiBottomNavigationAction-root{
    border: 2px solid black;
}

.avatar {
    width: 25px;
    height: 25px;
    font-size: 12px;
    display: flex;
    align-items: center;

}
`;
