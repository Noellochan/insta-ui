import styledComponents from "styled-components";

export const Wrapper = styledComponents.div`
border: 5px solid black;
height: 100vh;
padding: 20px;
display: flex;
align-items: center;
flex-direction: column;


> img {
  width: 500px;
  height: 500px;
}
> div {
  max-height: 500px;
}
`;

export const FieldWrapper = styledComponents.div`

p {
  margin-bottom: 2px;
}

.primary-input {
  border: 1px solid black;
  width: 500px;
  height: 40px;
  border-radius: 4px;
  padding: 8px 4px;

  :hover {
    border: 2px solid grey;
  }
}
`;
