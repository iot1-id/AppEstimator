
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "../../assets/scss/estimator.scss"
import React, { useState } from "react";

// import "../../assets/scss/estimate.scss";
import {
  Button,
  Col,
  UncontrolledTooltip,
  Card,
  CardBody,
  Row,
  Modal,
  ModalBody,

  
} from "reactstrap";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";


import Grid from "@material-ui/core/Grid";

import minData from "../../components/json/min";
import maxData from "../../components/json/max";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import CustomButton from "components/Custom-button/custom-button.component";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RemoveIcon from "@material-ui/icons/Remove";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import {
  socials,
  general1,
  general2,
  media,
  ecommerce,
  authentication,
} from "../../components/Features/general";
import FloatingActionButtons from "components/Estimator/FloatingButton";

function printDiv(printableArea) {
  var printContents = document.getElementById("printableArea").innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}

function createData(name, calories) {
  return { name, calories };
}
const useStyles1 = makeStyles({
  table: {
    // minWidth: 650,

    background: "linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)",
    border: 1,
    borderRadius: 3,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    // height: 48,
    padding: "0 30px",
  },
});
const useStyles2 = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

function calculatePrice(
  minHours,
  maxHours,
  isFresherCount,
  isSeniorCount,
  isJuniorCount
) {
  var fresherPrice = 8;
  var juniorPrice = 12;
  var seniorPrice = 20;
  // console.log(isFresherCount, isJuniorCount, isSeniorCount);

  var totalDevs = 0.1;
  if (isFresherCount && isSeniorCount && isJuniorCount)
    totalDevs = isFresherCount + isSeniorCount + isJuniorCount;

  var averageMinHours = Math.ceil(minHours / totalDevs);
  var averageMaxHours = Math.ceil(maxHours / totalDevs);
  // console.log(averageMinHours, averageMaxHours);
  var minPrice =
    isFresherCount * fresherPrice * averageMinHours +
    isJuniorCount * juniorPrice * averageMinHours +
    isSeniorCount * seniorPrice * averageMinHours;
  var maxPrice =
    isFresherCount * fresherPrice * averageMaxHours +
    isJuniorCount * juniorPrice * averageMaxHours +
    isSeniorCount * seniorPrice * averageMaxHours;

  return { minPrice, maxPrice };
}
export default function SimpleContainer() {

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

 const [isTen, setIsTen] = React.useState(true);
 const [isFifty, setIsFifty] = React.useState(true);
 const [isHundred, setIsHundred] = React.useState(true);

 const [is100, setIs100] = React.useState(true);
 const [is1k, setIs1k] = React.useState(true);
 const [is10k, setIs10k] = React.useState(true);

 const [isFresherCount, setFresherCount] = React.useState(0);
 const [isJuniorCount, setJuniorCount] = React.useState(0);
 const [isSeniorCount, setSeniorCount] = React.useState(0);

 const [modal1, setModal1] = React.useState(false);

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");
 const [contactNumber, setcontactNumber] = useState("");
 const [loader, setLoader] = useState(false);

 const classes2 = useStyles2();

function sendEmail(e) {
  e.preventDefault();

  // $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
  //   type: "POST",
  //   data: JSON.stringify(data),
  //   contentType: "application/json",
  // })
  //   .done(function () {
  //     alert("Your mail is sent!");
  //   })
  //   .fail(function (error) {
  //     alert("Oops... " + JSON.stringify(error));
  //   });

  emailjs
    .sendForm(
      "service_frba6h7",
      "template_30z0wle",
      e.target,
      "user_mN45nmQKfQrjwE6HJ9BIi"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  console.log(templateParams);
  e.target.reset();
  setModal1(false);
}

const classes1 = useStyles1();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));
const handleSaveToPDF = (event) => {
  event.preventDefault();
  var printContents = document.getElementById("printableArea").innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
  // window.print();
};
const [state, setState] = React.useState({});
const [platforms, setPlatforms] = useState([]);
const [pages, setpages] = useState("");
const [database, setdatabase] = useState("");
const [customize, setcustomize] = useState("");
const [security, setsecurity] = useState("");
const [users, setusers] = useState("");
// const [general, setgeneral] = useState([])
// const [admin, setadmin] = useState([])
// const [social, setsocial] = useState([])
// const [ecommerces, setecommerces] = useState([])
// const [medias, setmedias] = useState([])
const [features, setfeatures] = useState([]);

// const [fresher, setfresher] = useState(0);
// const [junior, setjunior] = useState(0);
// const [senior, setsenior] = useState(0);
// console.log(platforms);

//

const { minPrice, maxPrice } = calculatePrice(
  minHours,
  maxHours,
  isFresherCount,
  isSeniorCount,
  isJuniorCount
);
//   const { gilad, jason, antoine } = state;
let i = 0;
const classes = useStyles();
const handleChange = (event) => {
  setState({ ...state, [event.target.name]: event.target.checked });
  if (event.target.checked) {
    setMinHours(minHours + minData[event.target.name]);
    SetMaxhours(maxHours + maxData[event.target.name]);
    var x = event.target.name;
    // console.log(x);
    features.push(x);
    features.push(", ")
  } else if (!event.target.checked) {
    setMinHours(minHours - minData[event.target.name]);
    SetMaxhours(maxHours - maxData[event.target.name]);
    for (var i = 0; i < features.length; i++) {
      if (features[i] === event.target.name) {
        features.splice(i, 2);
      }
    }
  }
};

const socialIterate = socials.map((socials) => {
  return (
    <FormControlLabel
      key={i++}
      control={<Checkbox onChange={handleChange} name={socials} />}
      label={socials}
    />
  );
});
const authIterate = authentication.map((authentication) => {
  return (
    <FormControlLabel
      key={i++}
      control={<Checkbox onChange={handleChange} name={authentication} />}
      label={authentication}
    />
  );
});
const general1Iterate = general1.map((general1) => {
  return (
    <FormControlLabel
      key={i++}
      control={<Checkbox onChange={handleChange} name={general1} />}
      label={general1}
    />
  );
});
const general2Iterate = general2.map((general2) => {
  return (
    <FormControlLabel
      key={i++}
      control={<Checkbox onChange={handleChange} name={general2} />}
      label={general2}
    />
  );
});
const mediaIterate = media.map((media) => {
  return (
    <FormControlLabel
      key={i++}
      control={<Checkbox onChange={handleChange} name={media} />}
      label={media}
    />
  );
});
const ecommerceIterate = ecommerce.map((ecommerce) => {
  return (
    <FormControlLabel
      key={i++}
      control={<Checkbox onChange={handleChange} name={ecommerce} />}
      label={ecommerce}
    />
  );
});
const rows = [
  createData("Platforms: ", platforms),
  createData("Pages: ", pages),
  createData("Database: ", database),
  createData("Number of Users: ", users),
  createData("Features: ", features),
  // createData("Admin Features", 356),
  // createData("Authentication Features", 356),
  // createData("Media Features", 356),
  // createData("Ecommerce Features", 356),
  // createData("Social Features", 356),
  createData("Customization Level: ", customize),
  createData("Level of Security: ", security),
  createData(
    "Squad Members: ",
    `Fresher Devs: ${isFresherCount}, 
      Junior  Devs:  ${isJuniorCount}, 
      Senior Devs: ${isSeniorCount}`
  ),
  createData(
    "Estimated Hours: ",
    `Mimimum Hours: ${minHours},
       Maximum Hours: ${maxHours}`
  ),
  createData(
    "Estimated Price: ",
    `Mimimum Price: $${minPrice}, Maximum Price: $${maxPrice}`
  ),
];

var templateParams = {
  name: name,
  email: email,
  message: message,
  contactNumber: contactNumber,
  maxHours: maxHours,
  maxPrice: maxPrice,
  minPrice: minPrice,
  minhours: minHours,
  isSeniorCount: isSeniorCount,
  isJuniorCount: isJuniorCount,
  isFresherCount: isFresherCount,
  security: security,
  customize: customize,
  features: features,
  users: users,
  database: database,
  platforms: platforms,
};



  return (
    <React.Fragment>
      <CssBaseline />
      <FloatingActionButtons minHours={minHours} maxHours={maxHours} />
      <Container maxWidth="md">
        <Typography className="container1" component="div">
          <br />
          <span className="btn0">1. Your Required Platform </span>
          <br />

          <Col className="ml-auto mr-auto center">
            <CustomButton
              onClick={() => {
                if (isAndroidBC) {
                  setIsAndroidBC(false);
                  setMinHours(minHours + 48);
                  SetMaxhours(maxHours + 75);
                  platforms.push("Android ");
                } else {
                  setIsAndroidBC(true);
                  setMinHours(minHours - 48);
                  SetMaxhours(maxHours - 75);
                  for (var i = 0; i < platforms.length; i++) {
                    if (platforms[i] === "Android") {
                      platforms.splice(i, 1);
                    }
                  }
                }
              }}
            >
              Android&nbsp;&nbsp;
              <i className="fab fa-android"></i>
            </CustomButton>
            <CustomButton
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
                  platforms.push("IOS");
                } else {
                  setIsAppleBC(true);
                  setMinHours(minHours - 48);
                  SetMaxhours(maxHours - 75);
                  for (var i = 0; i < platforms.length; i++) {
                    if (platforms[i] === "IOS ") {
                      platforms.splice(i, 1);
                    }
                  }
                }
              }}
            >
              IOS&nbsp;&nbsp;
              <i class="fab fa-apple"></i>
            </CustomButton>
            <CustomButton
              onClick={() => {
                if (isWebBC) {
                  setIsWebBC(false);
                  setMinHours(minHours + 48);
                  SetMaxhours(maxHours + 75);
                  platforms.push("Web");
                } else {
                  setIsWebBC(true);
                  setMinHours(minHours - 48);
                  SetMaxhours(maxHours - 75);
                  for (var i = 0; i < platforms.length; i++) {
                    if (platforms[i] === "Web ") {
                      platforms.splice(i, 1);
                    }
                  }
                }
              }}
            >
              Web&nbsp;&nbsp;
              <i class="fas fa-file-code"></i>
            </CustomButton>
          </Col>
        </Typography>
      </Container>
      <br />
      <br />
      <Container maxWidth="md">
        <Typography className="container2" component="div">
          <br />
          <span className="btn0">
            2. Minimum Number of Pages in your Application
          </span>
          <br />

          <Col className="ml-auto mr-auto center">
            <CustomButton
              onClick={() => {
                if (isTen) {
                  setIsTen(false);
                  setMinHours(minHours + 5);
                  SetMaxhours(maxHours + 10);
                  setpages("10+");
                  // setIsFifty(true);
                  // setIsHundred(true);
                } else {
                  setIsTen(true);
                  setMinHours(minHours - 5);
                  SetMaxhours(maxHours - 10);
                  setpages("");
                  // setIsFifty(false);
                  // setIsHundred(false);
                }
              }}
              disabled={!isFifty || !isHundred}
            >
              10+
            </CustomButton>
            <CustomButton
              onClick={() => {
                // if (isAppleBC && isAndroidBC) {
                //   setIsAppleBC(false);
                //   setMinHours(minHours + 32);
                //   SetMaxhours(maxHours + 35);
                // }
                if (isFifty) {
                  setIsFifty(false);
                  setMinHours(minHours + 30);
                  SetMaxhours(maxHours + 50);
                  setpages("50+");
                  // setIsTen(true);
                  // setIsHundred(true);
                } else {
                  setIsFifty(true);
                  setMinHours(minHours - 30);
                  SetMaxhours(maxHours - 50);
                  setpages("");
                }
              }}
              disabled={!isTen || !isHundred}
            >
              50+
            </CustomButton>
            <CustomButton
              onClick={() => {
                if (isHundred) {
                  setIsHundred(false);
                  setMinHours(minHours + 60);
                  SetMaxhours(maxHours + 80);
                  setpages("100+");
                  // setIsFifty(true);
                  // setIsHundred(true);
                } else {
                  setIsHundred(true);
                  setMinHours(minHours - 60);
                  SetMaxhours(maxHours - 80);
                  setpages("");
                }
              }}
              disabled={!isFifty || !isTen}
            >
              100+
            </CustomButton>
          </Col>
        </Typography>
      </Container>
      <br />
      <br />
      <Container maxWidth="md">
        <Typography className="container3" component="div">
          <br />
          <span className="btn0">3. Your Required Database</span>
          <br />

          <Col className="ml-auto mr-auto center">
            <CustomButton
              onClick={() => {
                if (isCloudBC) {
                  setIsCloudbBC(false);
                  setMinHours(minHours + 30);
                  SetMaxhours(maxHours + 45);
                  setdatabase("Cloud Database");
                } else {
                  setIsCloudbBC(true);
                  setMinHours(minHours - 30);
                  SetMaxhours(maxHours - 45);
                  setdatabase("");
                }
              }}
              disabled={!isIDBBC || !isEDBBC}
            >
              Cloud&nbsp;&nbsp;
              <i class="fas fa-cloud-upload-alt"></i>
            </CustomButton>

            <CustomButton
              onClick={() => {
                if (isIDBBC) {
                  setIsIDBBC(false);
                  setMinHours(minHours + 50);
                  SetMaxhours(maxHours + 75);
                  setdatabase("Internal Database");
                } else {
                  setIsIDBBC(true);
                  setMinHours(minHours - 50);
                  SetMaxhours(maxHours - 75);
                  setdatabase("");
                }
              }}
              disabled={!isCloudBC || !isEDBBC}
            >
              Internal DB&nbsp;&nbsp;
              <i class="fas fa-database"></i>
            </CustomButton>
            <CustomButton
              onClick={() => {
                if (isEDBBC) {
                  setIsEDBBC(false);
                  setMinHours(minHours + 20);
                  SetMaxhours(maxHours + 35);
                  setdatabase("Existing Database");
                } else {
                  setIsEDBBC(true);
                  setMinHours(minHours - 20);
                  SetMaxhours(maxHours - 35);
                  setdatabase("");
                }
              }}
              disabled={!isIDBBC || !isCloudBC}
            >
              Existing DB&nbsp;&nbsp;
              <i class="fas fa-server"></i>
            </CustomButton>
          </Col>
        </Typography>
      </Container>
      <br />
      <br />
      <Container maxWidth="md">
        <Typography className="container4" component="div">
          <br />
          <span className="btn0">4. Number of Expected Users</span>
          <br />

          <Col className="ml-auto mr-auto center">
            <CustomButton
              onClick={() => {
                if (is100) {
                  setIs100(false);
                  setMinHours(minHours + 5);
                  SetMaxhours(maxHours + 10);
                  setusers("100+");
                } else {
                  setIs100(true);
                  setMinHours(minHours - 5);
                  SetMaxhours(maxHours - 10);
                  setusers("");
                }
              }}
              disabled={!is1k || !is10k}
            >
              Less than 100
            </CustomButton>
            <CustomButton
              onClick={() => {
                if (is1k) {
                  setIs1k(false);
                  setMinHours(minHours + 25);
                  SetMaxhours(maxHours + 40);
                  setusers("1,000+");
                } else {
                  setIs1k(true);
                  setMinHours(minHours - 25);
                  SetMaxhours(maxHours - 40);
                  setusers("");
                }
              }}
              disabled={!is100 || !is10k}
            >
              1,000 to 10,000
            </CustomButton>
            <CustomButton
              onClick={() => {
                if (is10k) {
                  setIs10k(false);
                  setMinHours(minHours + 50);
                  SetMaxhours(maxHours + 75);
                  setusers("10,000+");
                } else {
                  setIs10k(true);
                  setMinHours(minHours - 50);
                  SetMaxhours(maxHours - 75);
                  setusers("");
                }
              }}
              disabled={!is1k || !is100}
            >
              More than 10,000
            </CustomButton>
          </Col>
        </Typography>
      </Container>
      <br />
      <br />
      <Container maxWidth="md">
        <Typography className="container5" component="div">
          <span className="btn0">5A. Required Features</span>
          <Col className="ml-auto mr-auto center">
            <div className={classes.root}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">General</FormLabel>
                <FormGroup>{general1Iterate}</FormGroup>
              </FormControl>

              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Admin</FormLabel>
                <FormGroup>{general2Iterate}</FormGroup>
              </FormControl>

              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Authentication</FormLabel>
                <FormGroup>{authIterate}</FormGroup>
              </FormControl>
            </div>
          </Col>
        </Typography>
      </Container>
      <br />
      <br />
      <Container maxWidth="md">
        <Typography className="container5" component="div">
          <br />
          <span className="btn0">5B. Required Features</span>

          <Col className="ml-auto mr-auto center">
            <div className={classes.root}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Media</FormLabel>
                <FormGroup>{mediaIterate}</FormGroup>
              </FormControl>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Ecommerce</FormLabel>
                <FormGroup>{ecommerceIterate}</FormGroup>
              </FormControl>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Socials</FormLabel>
                <FormGroup>{socialIterate}</FormGroup>
              </FormControl>
            </div>
          </Col>
        </Typography>
      </Container>
      <br />
      <br />
      <Container maxWidth="md">
        <Typography className="container6" component="div">
          <br />
          <span className="btn0">6. Level of Customization</span>
          <br />

          <Col className="ml-auto mr-auto center">
            <Button
              id="ui1"
              className="btn1"
              onClick={() => {
                if (isMinimal) {
                  setIsMinimal(false);
                  setMinHours(minHours + 10);
                  SetMaxhours(maxHours + 25);
                  setcustomize("Minimal UI");
                } else {
                  setIsMinimal(true);
                  setMinHours(minHours - 10);
                  SetMaxhours(maxHours - 25);
                  setcustomize("");
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
            <UncontrolledTooltip delay={0} placement="bottom" target="ui1">
              Minimalistic User Interface
            </UncontrolledTooltip>
            <Button
              id="ui2"
              className="btn1"
              onClick={() => {
                if (isBasic) {
                  setIsBasic(false);
                  setMinHours(minHours + 35);
                  SetMaxhours(maxHours + 50);
                  setcustomize("Vibrant UI");
                } else {
                  setIsBasic(true);
                  setMinHours(minHours - 35);
                  SetMaxhours(maxHours - 50);
                  setcustomize("");
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
            <UncontrolledTooltip delay={0} placement="bottom" target="ui2">
              Vibrant User Interface
            </UncontrolledTooltip>
            <Button
              id="ui3"
              className="btn1"
              onClick={() => {
                if (isPolished) {
                  setIsPolished(false);
                  setMinHours(minHours + 50);
                  SetMaxhours(maxHours + 75);
                  setcustomize("Polished UI");
                } else {
                  setIsPolished(true);
                  setMinHours(minHours - 50);
                  SetMaxhours(maxHours - 75);
                  setcustomize("");
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
            <UncontrolledTooltip delay={0} placement="bottom" target="ui3">
              Highly Polished User Interface
            </UncontrolledTooltip>
          </Col>
        </Typography>
      </Container>
      <br />
      <br />
      <Container maxWidth="md">
        <Typography className="container7" component="div">
          <br />
          <span className="btn0">7. Required level of Security</span>
          <br />

          <Col className="ml-auto mr-auto center">
            <Button
              id="security1"
              className="btn1"
              onClick={() => {
                if (isBase) {
                  setIsBase(false);
                  setMinHours(minHours + 5);
                  SetMaxhours(maxHours + 10);
                  setsecurity("Basic Security");
                } else {
                  setIsBase(true);
                  setMinHours(minHours - 5);
                  SetMaxhours(maxHours - 10);
                  setsecurity("");
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
            <UncontrolledTooltip
              delay={0}
              placement="bottom"
              target="security1"
            >
              Lite Security
            </UncontrolledTooltip>
            <Button
              id="security2"
              className="btn1"
              onClick={() => {
                if (isHigh) {
                  setIsHigh(false);
                  setMinHours(minHours + 25);
                  SetMaxhours(maxHours + 40);
                  setsecurity("High Security");
                } else {
                  setIsHigh(true);
                  setMinHours(minHours - 25);
                  SetMaxhours(maxHours - 40);
                  setsecurity("");
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
            <UncontrolledTooltip
              delay={0}
              placement="bottom"
              target="security2"
            >
              High Security
            </UncontrolledTooltip>
            <Button
              className="btn1"
              id="security3"
              onClick={() => {
                if (isAdvance) {
                  setIsAdvance(false);
                  setMinHours(minHours + 45);
                  SetMaxhours(maxHours + 60);
                  setsecurity("Advanced Security");
                } else {
                  setIsAdvance(true);
                  setMinHours(minHours - 45);
                  SetMaxhours(maxHours - 60);
                  setsecurity("");
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
            <UncontrolledTooltip
              delay={0}
              placement="bottom"
              target="security3"
            >
              Advanced Security
            </UncontrolledTooltip>
          </Col>
        </Typography>
      </Container>
      <br />
      <br />
      <Container maxWidth="md">
        <Typography className="container8" component="div">
          <br />
          <span className="btn0">Select your squad</span>

          <div className="center">
            <Col>
              <button
                className="btn3"
                onClick={() => {
                  if (isFresherCount >= 1) {
                    setFresherCount(isFresherCount - 1);
                  }
                }}
                disabled={!isFresherCount}
              >
                <RemoveIcon />
              </button>
              <button className="btn2" id="tooltip1">
                Fresher Devs: {isFresherCount}
              </button>
              <UncontrolledTooltip delay={0} placement="top" target="tooltip1">
                Freshers are developers with little to no Experience.
              </UncontrolledTooltip>
              <button
                className="btn4"
                onClick={() => {
                  if (isFresherCount < 8) {
                    setFresherCount(isFresherCount + 1);
                  }
                }}
              >
                <AddIcon />
              </button>
            </Col>
            <br />
            {/* <hr className="style2" /> */}
            <Col>
              <button
                className="btn3"
                onClick={() => {
                  if (isJuniorCount >= 1) {
                    setJuniorCount(isJuniorCount - 1);
                  }
                }}
                disabled={!isJuniorCount}
              >
                <RemoveIcon />
              </button>
              <button className="btn2" id="tooltip2">
                Junior Devs: {isJuniorCount}
              </button>
              <UncontrolledTooltip delay={0} placement="top" target="tooltip2">
                Junior Developers have mid to high tier Experience.
              </UncontrolledTooltip>
              <button
                className="btn4"
                onClick={() => {
                  if (isJuniorCount < 8) {
                    setJuniorCount(isJuniorCount + 1);
                  }
                }}
              >
                <AddIcon />
              </button>
            </Col>
            <br />
            {/* <hr className="style2" /> */}
            <Col>
              <button
                className="btn3"
                onClick={() => {
                  if (isSeniorCount >= 1) {
                    setSeniorCount(isSeniorCount - 1);
                  }
                }}
                disabled={!isSeniorCount}
              >
                <RemoveIcon />
              </button>
              <button className="btn2" id="tooltip3">
                Senior Devs: {isSeniorCount}
              </button>
              <UncontrolledTooltip
                delay={0}
                placement="bottom"
                target="tooltip3"
              >
                Senior Developers have expert or advanced level of Experience.
              </UncontrolledTooltip>
              <button
                className="btn4"
                onClick={() => {
                  if (isSeniorCount < 5) {
                    setSeniorCount(isSeniorCount + 1);
                  }
                }}
              >
                <AddIcon />
              </button>
            </Col>
          </div>
        </Typography>
      </Container>
      <br />
      <br />
      <hr className="style1" />
      <br />
      <br />
      <Col className="ml-auto mr-auto center" md="10" xl="8">
        <p className="category">
          Your Selections
          <Link href="#" onClick={handleSaveToPDF}>
            <Tooltip title="Save to PDF" placement="right">
              <PictureAsPdfIcon />
            </Tooltip>
          </Link>
        </p>
        <div id="printableArea">
          <Card>
            {/* <CardHeader>
            <div className="content-center">
              <img
                alt="..."
                className="n-logo"
                src={require("assets/img/logo.png")}
              ></img>
              
            </div>
          </CardHeader> */}
            <CardBody>
              <Row>
                <Col align="left">
                  <img
                    src={require("../../assets/img/imbuelogo.png")}
                    alt="Imbuedesk"
                    className="logo"
                  />
                </Col>
                <Col className="right">
                  <div align="right">
                    <h6>Phone: 8985752891</h6>
                    Email: imbuedesk1@gmail.com
                  </div>
                </Col>
              </Row>
              <TableContainer component={Paper}>
                <Table className={classes1.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <b>Components</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>Selections</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="left">{row.calories}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Button className="btn5" onClick={() => setModal1(true)}>
                  Submit Your Selections
                </Button>
                <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                  <div className="modal-header justify-content-center">
                    <button
                      className="close"
                      type="button"
                      onClick={() => setModal1(false)}
                    >
                      <i className="now-ui-icons ui-1_simple-remove"></i>
                    </button>
                    <h4 className="title">Contact Imbuedesk</h4>
                  </div>
                  <ModalBody>
                    {/* <form className="form" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                    />
                    <label>Email</label>
                    <input
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                    />
                    <label>Contact Number</label>
                    <input
                      placeholder="Contact Number"
                      value={contactNumber}
                      onChange={(e) => setcontactNumber(e.target.value)}
                      name="number"
                    />
                    <label>Message</label>
                    <textarea
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                    ></textarea>
                    <button
                      type="submit"
                      style={{
                        background: loader ? "#ccc" : " rgb(2, 2, 110)",
                      }}
                    >
                      Submit
                    </button>
                  </form> */}
                    <Container component="main" maxWidth="xs">
                      <CssBaseline />
                      <div className={classes2.paper}>
                        {/* <Typography component="h1" variant="h5">
                        Contact Us
                      </Typography> */}

                        <form
                          className={classes2.form}
                          noValidate
                          onSubmit={sendEmail}
                        >
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Name"
                                autoFocus
                                // onChange={(e) => setName(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Contact Number"
                                name="contactNumber"
                                autoComplete="number"
                                // onChange={(e) =>
                                //   setcontactNumber(e.target.value)
                                // }
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                // onChange={(e) => setEmail(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="message"
                                label="message"
                                type="message"
                                id="message"
                                autoComplete="message"
                                // onChange={(e) => setMessage(e.target.value)}
                              />
                            </Grid>
                          </Grid>
                          <input
                            type="hidden"
                            name="minHours"
                            value={JSON.stringify(minHours)}
                          ></input>

                          <input
                            type="hidden"
                            name="maxHours"
                            value={JSON.stringify(maxHours)}
                          ></input>
                          <input
                            type="hidden"
                            name="minPrice"
                            value={JSON.stringify(minPrice)}
                          ></input>
                          <input
                            type="hidden"
                            name="maxPrice"
                            value={JSON.stringify(maxPrice)}
                          ></input>
                          <input
                            type="hidden"
                            name="platforms"
                            value={JSON.stringify(platforms)}
                          ></input>
                          <input
                            type="hidden"
                            name="users"
                            value={JSON.stringify(users)}
                          ></input>
                          <input
                            type="hidden"
                            name="database"
                            value={JSON.stringify(database)}
                          ></input>
                          <input
                            type="hidden"
                            name="pages"
                            value={JSON.stringify(pages)}
                          ></input>
                          <input
                            type="hidden"
                            name="features"
                            value={JSON.stringify(features)}
                          ></input>
                          <input
                            type="hidden"
                            name="customize"
                            value={JSON.stringify(customize)}
                          ></input>
                          <input
                            type="hidden"
                            name="security"
                            value={JSON.stringify(security)}
                          ></input>
                          <input
                            type="hidden"
                            name="isJuniorCount"
                            value={JSON.stringify(isJuniorCount)}
                          ></input>
                          <input
                            type="hidden"
                            name="isFresherCount"
                            value={JSON.stringify(isFresherCount)}
                          ></input>
                          <input
                            type="hidden"
                            name="isSeniorCount"
                            value={JSON.stringify(isSeniorCount)}
                          ></input>

                          <Button
                            type="submit"
                            // fullWidth
                            align="center"
                            // variant="contained"
                            // color="primary"
                            className="btn5"
                          >
                            Submit
                          </Button>
                        </form>
                      </div>
                    </Container>
                  </ModalBody>
                </Modal>
              </TableContainer>
            </CardBody>
          </Card>
        </div>
      </Col>
    </React.Fragment>
  );
}
