import { lazy, Suspense } from 'react';
import { Container, Row } from 'react-bootstrap';

const Header = lazy(() => import('./components/Header'))
const FormTeam = lazy(() => import('./components/FormTeam'))
const ListName = lazy(() => import('./components/ListName'))
const ListTeam = lazy(() => import('./components/ListTeam'))

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Row className='my-5'>
          <Header />
          <FormTeam />
          <ListName />
        </Row>
        <hr />
        <ListTeam />
      </Container>
    </Suspense>
  );
}

export default App;
