import styledComponents from "styled-components";

export const Wrapper = styledComponents.div`
height: 500px;
display: flex;
align-items: flex-start;

@media only screen and (max-width: 800px){
  flex-direction: column;
}

.close-icon {
  position: absolute;
  right: 10px;
  top: 10px;
}


.uploaded-img {
  width: 100%
}
> div {
  max-height: 500px;
  flex: 1;
  width: 50%;
}


.left-container {
display: flex;
align-items: center;
justify-content: center;
height: 100%;
flex-direction: column;
background: ${({ image }) => (image ? "black" : "white")};
padding-left: 10px;

@media only screen and (max-width: 800px){
  display: block;
  margin-top: 30px;
  margin-left: 14px;
}
}

.right-container {
  padding: 20px;
  margin: auto;

  @media only screen and (max-width: 800px){
    padding: 20px;
    margin: 0;
    width: 80%;
  }
}

.image-upload {
  border: 1px solid black;
  display: none;
}

.image-icon-wrapper {
  min-width: 250px;
  height: 250px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: rgb(250,250,250);
  border: 1px solid rgb(1,1,1,.1);
}

.divider {
  width: 1px;
  height: auto;
  background: rgb(1,1,1,.1);
  margin-right: 20px;
}
`;

export const FieldWrapper = styledComponents.div`

p {
  margin-bottom: 2px;
}

.primary-input {
  border: 1px solid black;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding: 8px 4px;

  :hover {
    border: 2px solid grey;
  }


}
`;

export const ButtonWrapper = styledComponents.div`
display: flex;
gap: 10px;
margin-top: 20px;

@media only screen and (max-width: 800px){
  flex-direction: column;
}

  button {
    width: 100%;
  }
`;
