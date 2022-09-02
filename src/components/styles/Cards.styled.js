import styled from "styled-components";

export const StyledCard = styled.div`
display: flex;
flex-direction: ${( {layout} )=> layout || "row" } ;
/* border: 2px solid rgba(82, 80, 80, 0.11); */
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
border-radius: 15px;
align-items: center;
margin: 40px 0;
padding: 60px;
& > div {
    padding: 0 20px;
    flex: 1;
}

& > div > img {
width: 80%;
margin: 0 20px;
-webkit-user-drag: none;
}

@media (max-width: ${( {theme} ) => theme.mobile }) {
flex-direction: column;
text-align: center;
gap: 10px;
padding: 20px;
}
`