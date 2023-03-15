import './reset.css'
import { useEffect, useState } from 'react';
import Header from './Header';
import BackgroundShape from './BackgroundShape';
import styled from 'styled-components';
import { colors, links } from './global';
import { BsGooglePlay, BsApple } from 'react-icons/bs';


function App() {

  // Mobile detection
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  const isMobile = width <= 768;

  return (
    <>
      <Header isMobile={isMobile} />

      <BodyBackground>
        <BodyContainer>
          <Col gap={16}>
            <Col gap={8}>
              <Title>
                A beleza de Lisboa acessível a <span style={{ color: colors.secondary }}>todos.</span>
              </Title>
              <Slogan>
                Mais de 50 localidades mapeadas pensando em você.
              </Slogan>
            </Col>
            <Col gap={8}>
              <Row gap={8}>
                <DownloadButton href={links.playStore} target="_blank">
                  <BsGooglePlay size={"24px"} />
                  <ButtonLabelGroup>
                    <ButtonLabel weight={500} size={9}>Get it on</ButtonLabel>
                    <ButtonLabel weight={500} size={13}>Google Play</ButtonLabel>
                  </ButtonLabelGroup>
                </DownloadButton>
                <DownloadButton href={links.appStore} target="_blank">
                  <BsApple size={"24px"} />
                  <ButtonLabelGroup>
                    <ButtonLabel weight={500} size={9}>Get it on</ButtonLabel>
                    <ButtonLabel weight={500} size={16}>App Store</ButtonLabel>
                  </ButtonLabelGroup>
                </DownloadButton>
              </Row>
            </Col>
          </Col>
        </BodyContainer>
      </BodyBackground>

      {!isMobile && <BackgroundShape />}
    </>
  );
}

const BodyBackground = styled.div`
background-color: ${colors.primary};
width: 100%;
`
const BodyContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
`
const Col = styled.div`
display: flex;
flex-direction: column;
gap: ${props => props.gap + "px"};
padding: 8px;
background-color: transparent;
justify-content: center;
align-items: center;
`
const Row = styled.div`
display: flex;
flex-direction: row;
gap: ${props => props.gap + "px"};
background-color: transparent;
justify-content: center;
align-items: center;
`
const Title = styled.div`
max-width: 500px;
font-weight: 700;
font-size: 50px;
text-align: center;
color: #FFFFFF;
line-height: 59px;
letter-spacing: -0.03em;
`
const Slogan = styled.div`

font-size: 18px;
text-align: center;
color: #FFFFFF;
`

const DownloadButton = styled.a`
text-decoration: none;
display: flex;
flex-direction: row;
padding: 6px 12px;
background-color: ${colors.secondary};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
color: ${colors.onSecondary};
gap: 8px;
height: 30px;
align-items: center;
-webkit-filter: brightness(100%);
&:hover,
:focus{
  -webkit-filter: brightness(85%);
  transition: all 0.3s ease;
  cursor: pointer;
}
&:active{
  -webkit-filter: brightness(50%);
  transition: all 0.1s ease;
}
`
const ButtonLabel = styled.span`
font-weight: ${props => props.weight};
font-size: ${props => props.size + "px"};
vertical-align: middle;
letter-spacing: -0.03em;
`
const ButtonLabelGroup = styled.span`
display: flex;
flex-direction: column;
min-width: 80px;
`
export default App;
