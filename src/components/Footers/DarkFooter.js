/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href=""
                target="_blank"
              >
                Development Estimator
              </a>
            </li>
            <li>
              <a
                href="https://www.imbuedesk.com/index.html"
                target="_blank"
              >
                About Us
              </a>
            </li>
            
          </ul>
        </nav>
        <div className="copyright" id="copyright">
                    <a
            href="https://www.imbuedesk.com/contact-single-office.html"
            target="_blank"
          >
            CONTACT US
          </a>
          
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
