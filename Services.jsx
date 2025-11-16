import { Container, Row, Col, Card, Badge } from 'react-bootstrap'

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom React applications with modern design principles",
      price: "$999+",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized"]
    },
    {
      title: "UI/UX Design", 
      description: "Beautiful and intuitive user interface design",
      price: "$799+",
      features: ["User Research", "Prototyping", "Design Systems"]
    },
    {
      title: "Consultation",
      description: "Technical consulting for your development projects",
      price: "$199/hr",
      features: ["Architecture Planning", "Code Review", "Best Practices"]
    }
  ]

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-4 text-center">Our Services</h1>
          <p className="lead text-center mb-5">
            We offer a range of services to help bring your digital vision to life
          </p>
        </Col>
      </Row>
      
      <Row>
        {services.map((service, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{service.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {service.description}
                </Card.Text>
                <div className="mb-3">
                  {service.features.map((feature, idx) => (
                    <Badge bg="secondary" className="me-1 mb-1" key={idx}>
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto">
                  <h4 className="text-primary">{service.price}</h4>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Services