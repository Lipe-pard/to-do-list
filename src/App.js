import './App.css';
import {
  Card,
  Container,
  Form,
  Button,
  Row,
  Col,
} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import Table from './Table'
function App() {

  const [titulo, setTitulo] = useState('')
  const [prazo, setPrazo] = useState('')
  const [image, setImage] = useState(null)
  const [urlImage, setUrlImage] = useState('')

  const tratarSubmit = (event) => {
    event.preventDefault()
    console.log(titulo)
  }

  return (
    <div className="d-block d-lg-flex">
      <Container className="p-4" fluid="md">
        <h1 className="p-4"> To do List </h1> 
          <Form onSubmit={tratarSubmit}>
            <Card className="p-4 mx-auto">
            <Row className="gy-2">
              <Col xs={12} md={6} lg={9}>
                <Form.Group controlId='titulo'>
                  <Form.Label> Titulo </Form.Label>
                  <Form.Control 
                  placeholder='Titulo' 
                  onChange={(event) => setTitulo(event.target.value)}
                  value={titulo}
                  />
               </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Form.Group controlId='prazo'>
                  <Form.Label> Prazo </Form.Label>
                  <Form.Control 
                  type="date"
                  onChange={(event) => setPrazo(event.target.value)}
                  value={prazo}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group controlId='Capa'>
                  <Form.Label> Capa </Form.Label>
                  <Form.Control 
                  type="file"
                  onChange={(event) => setImage(event.target.file)}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} className="text-center">
                  <Button variant="dark" className="w-75 mt-4 p-2" type="submit"> Salvar </Button>
              </Col>
            </Row>
            </Card>
          </Form>
      </Container>
      <Table/>
    </div>
  );
}

export default App;
