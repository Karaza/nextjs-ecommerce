import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Merriweather:wght@400;700&display=swap');

  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
  font-family: 'Lato', sans-serif;
  color: #333;
  min-height: 100vh;
`;

const Page = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Normalize />
      <Navbar />
      <Page>
        <Component {...pageProps} />
      </Page>
    </Container>
  );
}

export default MyApp;
