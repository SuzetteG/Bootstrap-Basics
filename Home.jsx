import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Home() {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <div className="jumbotron bg-primary text-white p-5 rounded">
            <h1 className="display-4">Welcome to Bootstrap SPA!</h1>
            <p className="lead">
              This is a React Single Page Application with Bootstrap styling and React Router navigation.
            </p>
            <Button variant="light" size="lg">
              Get Started
            </Button>
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Feature One</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Feature Two</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="success">Explore</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Feature Three</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="info">Discover</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home