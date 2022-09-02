import React from "react"
import content from "./content";
import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global"
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
}

function App() {
  
  const allData = content
  console.log(allData)

  const displayAllCards = allData.map(card => <Cards key={card.id} id={card.id} title={card.title} body={card.body} image={card.image} /> )

  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
    <Header />
    <Container>
      {displayAllCards}
    </Container>
    <Footer />
    </>
    </ThemeProvider>
  );
}

export default App;
