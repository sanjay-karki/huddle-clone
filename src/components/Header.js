import { Container } from './styles/Container.styled'
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"
import { Flex } from "./styles/Flex.styled"

export default function Header() {
  return (
    <StyledHeader>
        <Container>
            <Nav>
                <Logo src="./images/logo.svg" alt="" />
                <Button>Try It Free</Button>
            </Nav>

            <Flex>
                <div>
                    <h1>Build A Skrrt Your Fans Will Love</h1>

                    <p>
                        Damn dis ting crazy. Damn dis ting crazy. 
                        Damn dis ting crazy. Damn dis ting crazy. 
                        Damn dis ting crazy. Damn dis ting crazy.
                    </p>

                    <Button bg="#ff0099" color="#fff"  >
                        Get Started For Free
                    </Button>
                </div>

                <Image src="./images/illustration-mockups.svg" />
            </Flex>
        </Container>
    </StyledHeader>
  )
}
