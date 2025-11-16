import { Container, Row, Col } from 'react-bootstrap'

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-4">About Us</h1>
          <p className="lead">
            We are a modern web development company specializing in React applications with Bootstrap styling.
          </p>
          <p>
            Our team is passionate about creating beautiful, responsive, and user-friendly web applications. 
            We combine the power of React's component-based architecture with Bootstrap's responsive design 
            system to deliver exceptional user experiences.
          </p>
          <h3>Our Mission</h3>
          <p>
            To provide cutting-edge web solutions that help businesses thrive in the digital world. 
            We believe in clean code, modern design, and seamless user interactions.
          </p>
          <h3>Technologies We Use</h3>
          <ul>
            <li>React.js for dynamic user interfaces</li>
            <li>Bootstrap for responsive design</li>
            <li>React Router for seamless navigation</li>
            <li>Vite for fast development and builds</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default About