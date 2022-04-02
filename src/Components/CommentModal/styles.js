import styledComponents from "styled-components";

export const Wrapper = styledComponents.div`
    height: 80vh !important;
`;

export const Content = styledComponents.div`
    display: flex;
    height: 90vh;
    width: 80%;

    > div {
        flex: 1;
    }
    .first-half{
        flex: 1;
        background: black;
        display:flex;
        align-items: center;

        > img {

        }
    }
    .second-half {
        flex: 1;
        width: 100%;
        min-width: 500px;
        display: flex;
        flex-direction: column;
    }
`;

export const Header = styledComponents.div`
    height: 40px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #efefef;;

    > div {
        display: flex;
        gap: 10px;

        h4 {
            margin: 0;
            font-size: 15px;
        }
        p{
            font-size: 12px;
            color: grey;
            margin: 0;
        }
        img {
            width: 32px;
            height: 32px;
            border-radius: 32px;
        }
`;

export const CommentSection = styledComponents.div`
        flex: 4;
        border-bottom: 1px solid #efefef;
`;

export const Footer = styledComponents.div`

`;

export const CommentButton = styledComponents.div`
  padding: 0 12px;  
  position: relative;

  input {
      width: max-content;
  }

.comment-btn {
    position: absolute;
    right: 12px;
    top: 7px;
    font-size: 14px;
    color: #0095f6;
}

`;
