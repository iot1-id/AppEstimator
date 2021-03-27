/*eslint-disable*/
import React from "react";
import '../../assets/css/header.css'

// reactstrap components
import { Container } from "reactstrap";
// core components
// import { Link } from "react-router-dom";
// import video from "../../assets/img/video.mp4";

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/logo.png")}
            ></img>
            <h1 className="h1-seo">DEVELOPMENT ESTIMATOR</h1>
            <h5>
              Whatever your needs in development services, Imbuedesk has your
              back on the technical side of your business. Experienced teams.
              Flexible workflow. On-schedule delivery.
            </h5>

            
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
