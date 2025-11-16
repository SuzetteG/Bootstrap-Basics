import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted! This is just a demo.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-4 text-center">Contact Us</h1>
          <p className="lead text-center mb-5">
            Get in touch with us for your next project
          </p>
        </Col>
      </Row>
      
      <Row>
        <Col md={8} className="mx-auto">
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                  />
                </Form.Group>
                
                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mt-5">
        <Col md={4} className="text-center">
          <h5>📍 Address</h5>
          <p>123 React Street<br/>Bootstrap City, BS 12345</p>
        </Col>
        <Col md={4} className="text-center">
          <h5>📧 Email</h5>
          <p>contact@bootstrap-spa.com</p>
        </Col>
        <Col md={4} className="text-center">
          <h5>📞 Phone</h5>
          <p>(555) 123-4567</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact