import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import UserLogin from './UserLogin';
import WorkerLogin from './WorkerLogin';
import WorkerRegistration from './WorkerRegistration';

export default function Registration() {
  return (
    <div>
        {/* <Container>
        <Row>
          <Col md={5}>
            <div className="App">
              <div className="outer">
                <div className="inner">
                  <UserLogin/>
                </div>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className="App">
              <div className="outer">
                <div className="inner">
                  <WorkerRegistration />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container> */}

<UserLogin/>
<hr></hr>
<WorkerLogin />
    </div>
  )
}

