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
      <div className="space"></div>
      <div className="section section-pagination">
        <Container>
          <Row>
            <Col md="6">
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
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    5
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    6
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    7
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    
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
            </Col>
          </Row>

          <div className="space"></div>
        </Container>
      </div>
    </>
  );
}

export default PaginationSection;
