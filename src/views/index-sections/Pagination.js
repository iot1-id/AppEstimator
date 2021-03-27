import React from "react";

// reactstrap components
import {
 
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function PaginationSection() {
  const [pills, setPills] = React.useState("2");
  return (
    <>
      <div className="section section-pagination">
        <Container>
          <Row>
            <Col md="6">
              <h4>Progress Bars</h4>
              <div className="progress-container">
                <span className="progress-badge">Default</span>
                <Progress max="100" value="25">
                  <span className="progress-value">25%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">Info</span>
                <Progress max="100" value="60">
                  <span className="progress-value">60%</span>
                </Progress>
              </div>
              <br></br>
              
            </Col>
            <Col sm="6">
              <h4>Pagination</h4>
             <Pagination>
                <PaginationItem>
                  <PaginationLink
                    aria-label="Previous"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span aria-hidden={true}>
                      <i
                        aria-hidden={true}
                        className="fa fa-angle-double-left"
                      ></i>
                    </span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="active">
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    aria-label="Next"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span aria-hidden={true}>
                      <i
                        aria-hidden={true}
                        className="fa fa-angle-double-right"
                      ></i>
                    </span>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
              <br></br>
              <h4>Labels</h4>
             
            </Col>
          </Row>
          <br></br>
          <div className="space"></div>
          <h4>Notifications</h4>
        </Container>
      </div>
    </>
  );
}

export default PaginationSection;
