import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AquaFooter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      // Calculate the threshold where the footer should become visible
      const threshold = fullHeight - windowHeight - 200;

      setIsVisible(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <Container>
        <Row>
          <Col>
            {/* Footer content */}
            <p>&copy; {new Date().getFullYear()} Aquakart. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default AquaFooter;
