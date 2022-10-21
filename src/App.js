import { useState } from 'react';
import { Badge, Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';

function App() {
  const [number, setNumber] = useState(1)
  const [names, setNames] = useState('')
  const [arrNames, setArrNames] = useState([])
  const [groups, setGroups] = useState([])

  const changeNumber = e => setNumber(e.target.value)
  const changeNames = e => setNames(e.target.value)

  const resetNames = () => {
    setNumber(1)
    setNames('')
    setArrNames([])
  }

  const acak = e => {
    e.preventDefault();
    const grp = []
    let data = names.split('\n').filter(item => item !== '')
    setArrNames(names.split('\n').filter(item => item !== ''))

    let activeGrp = 0
    while (data.length > 0) {
      data = data.sort((a, b) => 0.5 - Math.random())
      const d = data.shift()
      grp[activeGrp] = grp[activeGrp] ?? []
      grp[activeGrp].push(d)

      if (activeGrp < (number - 1)) {
        activeGrp++
      } else {
        activeGrp = 0
      }
    }
    setGroups(grp)

    console.log(grp)
  }

  return (
    <Container>
      <Row className='my-5'>
        <Col sm='12'>
          <h1 className='text-center'>Random Team Generator</h1>
        </Col>
        <Col sm='12' md='6' className='p-5'>
          <Form onSubmit={acak}>
            <Form.Group className='mb-3'>
              <Form.Label><h5>Jumlah Tim</h5></Form.Label>
              <Form.Control type="number" value={number} onChange={changeNumber} placeholder="Masukkan jumlah Tim" min='1' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><h5>Nama Anggota</h5></Form.Label>
              <Form.Control as="textarea" value={names} onChange={changeNames} placeholder="Masukkan nama anggota" style={{ height: '200px' }} />
              <Form.Text className="text-muted">
                Pisahkan nama dengan enter (baris baru)
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" className='me-3'>
              ACAK
            </Button>
            <Button variant="secondary" type="button" onClick={resetNames}>
              RESET
            </Button>
          </Form>
        </Col>
        <Col sm='12' md='6' className='p-5'>
          <h5>Daftar Anggota :</h5>
          {arrNames.length > 0 ? arrNames.map((item, index) => (
            <Badge key={index} bg='secondary' className='me-2'>{item}</Badge>
          )) : '-'}
        </Col>
      </Row>
      <hr />
      <Row>
        {groups.length > 0 ? groups.map((item, index) => (
          <Col key={index} sm='6' md='4' className='mb-4'>
            <ListGroup>
              <ListGroup.Item className='fw-bold'>Tim { index + 1 }</ListGroup.Item>
              {item.map((name, i) => (
                <ListGroup.Item key={i}>{ i + 1 }. { name }</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        )) : <Col className='text-center'>Belum ada data</Col>}
      </Row>
    </Container>
  );
}

export default App;
