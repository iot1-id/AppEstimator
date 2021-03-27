import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
// import BasicElements from "./index-sections/BasicElements.js";
// import Navbars from "./index-sections/Navbars.js";
// import Tabs from "./index-sections/Tabs.js";
// import Pagination from "./index-sections/Pagination.js";
// import Notifications from "./index-sections/Notifications.js";
// import Typography from "./index-sections/Typography.js";
// import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
// import NucleoIcons from "./index-sections/NucleoIcons.js";
// import CompleteExamples from "./index-sections/CompleteExamples.js";
// import SignUp from "./index-sections/SignUp.js";
// import Examples from "./index-sections/Examples.js";
// import Download from "./index-sections/Download.js";
// import Tasks from "components/Features/Tasks.js";
// import Grids from "../views/index-sections/CheckList/elements"
import Estimator from "./index-sections/Estimator.js";
import Estimate from "./index-sections/Estimate.js";
import BasicTable from "../components/Table/tables";
import Platform from "components/Estimator/Platform.js";
import Pages from "components/Estimator/Pages.js";
import Database from "components/Estimator/Database.js";
import Users from "components/Estimator/Users.js";
import Features from "components/Estimator/Features.js";
import Customization from "components/Estimator/Customization.js";
import Security from "components/Estimator/Security.js";
import Squad from "components/Estimator/Squad.js";
import FloatingActionButtons from "components/Estimator/FloatingButton.js";
import Contact from "components/ContactUs/Contact.js";
import carouselSlidesData from "../views/index-sections/Sliderdata"

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  
  

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Images />

          {/*<Platform
            minHours={minHours}
            setMinHours={setMinHours}
            maxHours={maxHours}
            SetMaxhours={SetMaxhours}
          />

          <Pages
            minHours={minHours}
            setMinHours={setMinHours}
            maxHours={maxHours}
            SetMaxhours={SetMaxhours}
          />
          <Database
            minHours={minHours}
            setMinHours={setMinHours}
            maxHours={maxHours}
            SetMaxhours={SetMaxhours}
          />
          <Users
            minHours={minHours}
            setMinHours={setMinHours}
            maxHours={maxHours}
            SetMaxhours={SetMaxhours}
          />
          <Features
            minHours={minHours}
            setMinHours={setMinHours}
            maxHours={maxHours}
            SetMaxhours={SetMaxhours}
          />
          <Customization
            minHours={minHours}
            setMinHours={setMinHours}
            maxHours={maxHours}
            SetMaxhours={SetMaxhours}
          />
          <Security
            minHours={minHours}
            setMinHours={setMinHours}
            maxHours={maxHours}
            SetMaxhours={SetMaxhours}
          />
          <Squad
            minHours={minHours}
            setMinHours={setMinHours}
            maxHours={maxHours}
            SetMaxhours={SetMaxhours}
          />
          <FloatingActionButtons
            minHours={minHours}
            setMinHours={setMinHours}
            maxHours={maxHours}
            SetMaxhours={SetMaxhours}
          /> */}
          {/* <BasicElements />
          <Navbars /> */}
          {/* <Tasks/> */}
          {/* <Carousel slides={carouselSlidesData}   /> */}
          <Estimator />
          {/* <Estimate /> */}
          {/* <BasicTable /> */}
          {/* <Grids /> */}
          {/* <Tabs /> */}
          {/* <Pagination /> */}
          {/* <Notifications /> */}
          {/* <Typography /> */}
          {/* <Javascript /> */}
          {/* <NucleoIcons /> */}
          {/* <CompleteExamples /> */}
          {/* <SignUp /> */}
          {/* <Examples /> */}
          {/* <Download /> */}
        </div>

        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
