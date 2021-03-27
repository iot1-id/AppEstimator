import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Button,
  Label,
  Input,
  FormGroup,
  UncontrolledTooltip,
} from "reactstrap";
import DiscreteSlider from "./Slider";
import DiscreteSlider1 from "./UserSlider";
import SimpleAccordion from "./Accordian";
import NestedGrid from "../../components/Grid/Grid";
import CustomButton from "components/Custom-button/custom-button.component";
import CustomRadio from "components/Custom-Radio/custom-radio.component";

// import {minHours, maxHours} from '../../assets/vars/variables'
// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");

  const [minHours, setMinHours] = React.useState(0);
  const [maxHours, SetMaxhours] = React.useState(0);
  const [isAndroidBC, setIsAndroidBC] = React.useState(true);
  const [isAppleBC, setIsAppleBC] = React.useState(true);
  const [isWebBC, setIsWebBC] = React.useState(true);
  const [isCloudBC, setIsCloudbBC] = React.useState(true);
  const [isIDBBC, setIsIDBBC] = React.useState(true);
  const [isEDBBC, setIsEDBBC] = React.useState(true);
  const [isMinimal, setIsMinimal] = React.useState(true);
  const [isBasic, setIsBasic] = React.useState(true);
  const [isPolished, setIsPolished] = React.useState(true);
  const [isBase, setIsBase] = React.useState(true);
  const [isHigh, setIsHigh] = React.useState(true);
  const [isAdvance, setIsAdvance] = React.useState(true);


 

  return (


    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Select your needs</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills(e - 1);
                        }}
                      >
                        <span aria-hidden={true}>
                          <i
                            aria-hidden={true}
                            className="fa fa-angle-double-left"
                          ></i>
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        {/* <i className="now-ui-icons objects_umbrella-13"></i> */}
                        1
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        {/* <i className="now-ui-icons shopping_cart-simple"></i> */}
                        2
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        {/* <i className="now-ui-icons shopping_shop"></i> */}3
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        {/* <i className="now-ui-icons ui-2_settings-90"></i> */}
                        4
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "5" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("5");
                        }}
                      >
                        5
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "6" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("6");
                        }}
                      >
                        6
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "7" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("7");
                        }}
                      >
                        7
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "8" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("8");
                        }}
                      >
                        8
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills(e + 1);
                        }}
                      >
                        <span aria-hidden={true}>
                          <i
                            aria-hidden={true}
                            className="fa fa-angle-double-right"
                          ></i>
                        </span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <h4>Your Required Platform</h4>
                      <Col className="mb-4" lg="8" sm="6">
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          type="button"
                          size="lg"
                          onClick={() => {
                            if (isAndroidBC) {
                              setIsAndroidBC(false);
                              setMinHours(minHours + 48);
                              SetMaxhours(maxHours + 75);
                            } else {
                              setIsAndroidBC(true);
                              setMinHours(minHours - 48);
                              SetMaxhours(maxHours - 75);
                            }
                          }}
                        >
                          <i className="fab fa-android"></i>
                        </Button>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          type="button"
                          size="lg"
                          onClick={() => {
                            // if (isAppleBC && isAndroidBC) {
                            //   setIsAppleBC(false);
                            //   setMinHours(minHours + 32);
                            //   SetMaxhours(maxHours + 35);
                            // }
                            if (isAppleBC) {
                              setIsAppleBC(false);
                              setMinHours(minHours + 48);
                              SetMaxhours(maxHours + 75);
                            } else {
                              setIsAppleBC(true);
                              setMinHours(minHours - 48);
                              SetMaxhours(maxHours - 75);
                            }
                          }}
                        >
                          <i class="fab fa-apple"></i>
                        </Button>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          type="button"
                          size="lg"
                          onClick={() => {
                            if (isWebBC) {
                              setIsWebBC(false);
                              setMinHours(minHours + 48);
                              SetMaxhours(maxHours + 75);
                            } else {
                              setIsWebBC(true);
                              setMinHours(minHours - 48);
                              SetMaxhours(maxHours - 75);
                            }
                          }}
                        >
                          <i class="fas fa-file-code"></i>
                        </Button>
                      </Col>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <h4>Number of Pages in your Application</h4>
                      <DiscreteSlider />

                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <h4>Choose Your Database</h4>
                      <CustomButton
                        onClick={() => {
                          if (isCloudBC) {
                            setIsCloudbBC(false);
                            setMinHours(minHours + 30);
                            SetMaxhours(maxHours + 45);
                          } else {
                            setIsCloudbBC(true);
                            setMinHours(minHours - 30);
                            SetMaxhours(maxHours - 45);
                          }
                        }}
                        disabled={!isIDBBC || !isEDBBC}
                      >
                        Cloud
                        <i class="fas fa-cloud-upload-alt"></i>
                      </CustomButton>

                      <CustomButton
                        onClick={() => {
                          if (isIDBBC) {
                            setIsIDBBC(false);
                            setMinHours(minHours + 50);
                            SetMaxhours(maxHours + 75);
                          } else {
                            setIsIDBBC(true);
                            setMinHours(minHours - 50);
                            SetMaxhours(maxHours - 75);
                          }
                        }}
                        disabled={!isCloudBC || !isEDBBC}
                      >
                        Internal DB
                        <i class="fas fa-database"></i>
                      </CustomButton>
                      <CustomButton
                        onClick={() => {
                          if (isEDBBC) {
                            setIsEDBBC(false);
                            setMinHours(minHours + 20);
                            SetMaxhours(maxHours + 35);
                          } else {
                            setIsEDBBC(true);
                            setMinHours(minHours - 20);
                            SetMaxhours(maxHours - 35);
                          }
                        }}
                        disabled={!isIDBBC || !isCloudBC}
                      >
                        Existing DB
                        <i class="fas fa-server"></i>
                      </CustomButton>

                      {/* <FormControlLabelPlacement /> */}
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <h4>Level of Customization</h4>
                      <Col className="mb-4" lg="8" sm="6">
                        <Button
                          className="btn-icon btn-outline-info"
                          color="info"
                          type="button"
                          size="lg"
                          onClick={() => {
                            if (isMinimal) {
                              setIsMinimal(false);
                              setMinHours(minHours + 10);
                              SetMaxhours(maxHours + 25);
                            } else {
                              setIsMinimal(true);
                              setMinHours(minHours - 10);
                              SetMaxhours(maxHours - 25);
                            }
                          }}
                          disabled={!isBasic || !isPolished}
                        >
                          <img
                            alt="..."
                            // className="rounded-circle img-raised"
                            src={require("assets/img/minimal.png")}
                          ></img>
                        </Button>
                        <Button
                          className="btn-icon btn-outline-info"
                          color="info"
                          type="button"
                          size="lg"
                          onClick={() => {
                            if (isBasic) {
                              setIsBasic(false);
                              setMinHours(minHours + 35);
                              SetMaxhours(maxHours + 50);
                            } else {
                              setIsBasic(true);
                              setMinHours(minHours - 35);
                              SetMaxhours(maxHours - 50);
                            }
                          }}
                          disabled={!isPolished || !isMinimal}
                        >
                          <img
                            alt="..."
                            // className="rounded-circle img-raised"
                            src={require("assets/img/basic.png")}
                          ></img>
                        </Button>
                        <Button
                          className="btn-icon btn-outline-info"
                          color="info"
                          type="button"
                          size="lg"
                          label="Polished"
                          onClick={() => {
                            if (isPolished) {
                              setIsPolished(false);
                              setMinHours(minHours + 50);
                              SetMaxhours(maxHours + 75);
                            } else {
                              setIsPolished(true);
                              setMinHours(minHours - 50);
                              SetMaxhours(maxHours - 75);
                            }
                          }}
                          disabled={!isMinimal || !isBasic}
                        >
                          <img
                            alt="..."
                            // className="rounded-circle img-raised"
                            src={require("assets/img/polished.png")}
                          ></img>
                        </Button>
                      </Col>
                    </TabPane>
                    <TabPane tabId="iconPills5">
                      <h4>Number of Expected Users</h4>
                      <DiscreteSlider1 />
                    </TabPane>
                    <TabPane tabId="iconPills6">
                      <h4>Features</h4>
                      <Row id="checkRadios">
                        <Col className="mb-4" lg="5" sm="6">
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox"></Input>
                              <span className="form-check-sign"></span>
                              Unchecked
                            </Label>
                          </FormGroup>
                        </Col>
                      
                        <Col className="mb-4" lg="5" sm="6">
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox"></Input>
                              <span className="form-check-sign"></span>
                              Unchecked
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="iconPills7">
                      <h4>Security required</h4>
                      <Col className="mb-4" lg="8" sm="6">
                        <Button
                          className="btn-icon btn-outline-info"
                          color="info"
                          type="button"
                          size="lg"
                          onClick={() => {
                            if (isBase) {
                              setIsBase(false);
                              setMinHours(minHours + 5);
                              SetMaxhours(maxHours + 10);
                            } else {
                              setIsBase(true);
                              setMinHours(minHours - 5);
                              SetMaxhours(maxHours - 10);
                            }
                          }}
                          disabled={!isHigh || !isAdvance}
                        >
                          <img
                            alt="..."
                            // className="rounded-circle img-raised"
                            src={require("assets/img/base.png")}
                          ></img>
                        </Button>
                        <Button
                          className="btn-icon btn-outline-info"
                          color="info"
                          type="button"
                          size="lg"
                          onClick={() => {
                            if (isHigh) {
                              setIsHigh(false);
                              setMinHours(minHours + 25);
                              SetMaxhours(maxHours + 40);
                            } else {
                              setIsHigh(true);
                              setMinHours(minHours - 25);
                              SetMaxhours(maxHours - 40);
                            }
                          }}
                          disabled={!isBase || !isAdvance}
                        >
                          <img
                            alt="..."
                            // className="rounded-circle img-raised"
                            src={require("assets/img/high.png")}
                          ></img>
                        </Button>
                        <Button
                          className="btn-icon btn-outline-info"
                          color="info"
                          type="button"
                          size="lg"
                          onClick={() => {
                            if (isAdvance) {
                              setIsAdvance(false);
                              setMinHours(minHours + 45);
                              SetMaxhours(maxHours + 60);
                            } else {
                              setIsAdvance(true);
                              setMinHours(minHours - 45);
                              SetMaxhours(maxHours - 60);
                            }
                          }}
                          disabled={!isHigh || !isBase}
                        >
                          <img
                            alt="..."
                            // className="rounded-circle img-raised"
                            src={require("assets/img/advanced.png")}
                          ></img>
                        </Button>
                      </Col>
                    </TabPane>
                    <TabPane tabId="iconPills8">
                      <h4>Select your squad</h4>

                      <Button
                        className="btn-tooltip mr-1 xs-12"
                        color="default"
                        id="tooltip1"
                        type="button"
                      >
                        Freshers
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip1"
                      >
                        Freshers are developers with little or no Experience.
                      </UncontrolledTooltip>
                      <br />
                      <Button
                        className="btn-tooltip mr-1"
                        color="default"
                        id="tooltip2"
                        type="button"
                      >
                        Junior Developers
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip2"
                      >
                        Junior Developers have mid to high tier Experience.
                      </UncontrolledTooltip>
                      <br />
                      <Button
                        className="btn-tooltip mr-1"
                        color="default"
                        id="tooltip3"
                        type="button"
                      >
                        Senior Developers
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="bottom"
                        target="tooltip3"
                      >
                        Senior Developers have expert or advanced level of
                        Experience.
                      </UncontrolledTooltip>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>

            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Estimated Range of time</p>
              <Card>
                <CardHeader>
                  <h1> Min: {minHours}</h1>
                  <h1> Max: {maxHours}</h1>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
