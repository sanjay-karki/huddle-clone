import styled from "styled-components";

export const Flex = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
margin-top: 20px;



&  >  div, 
& > ul {
    flex: 1;
}

@media (max-width: ${( {theme} ) => theme.mobile }) {
flex-direction: column;
align-items: center;

text-align: center;
padding: 0 20px;
}

`