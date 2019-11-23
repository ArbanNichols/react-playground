import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';

import logo from '../../../static/android-chrome-512x512.png';

export default function Loading() {
  return (
    <Container>
      <Row>
        <Image src={logo} fluid />
      </Row>
    </Container>
  );
}
