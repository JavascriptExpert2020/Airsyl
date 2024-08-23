import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { useRef } from 'react';
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Flights from "./pages/Flights";
import Signin from "./pages/Sign-in";
import Signup from "./pages/Sign-up";
import Editprofile from "./pages/Editprofile";
import Guides from "./pages/Guides";
import Checkout from "./pages/Checkout";
import PaymentComp from "./components/PaymentComp";
import SignUpManager from "./components/Sign-up-manager";
import AdminSignupcomp from "./components/AdminSignupcomp";
import Adminusers from "./components/Adminusers";
import AdminContactUs from "./components/AdminContactUs";
import Bookingcompadmin from "./components/Bookingcompadmin";
import Bookingdetailscomp from "./components/Bookingdetailscomp";
import ForgotPasswordComp from "./components/ForgotPasswordComp";
import ResetPassword from "./components/ResetPassword";
import VerificationComp from "./components/VerificationComp";
import VerifyUser from "./components/VerifyUser";
import VerifyAgents from "./components/VerifyAgents";
import NewCheckoutComp from "./components/NewCheckoutComp";
import Stats from "./components/stats";
import Adminpayments from "./components/Adminpayments";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/Terms&Condition";
import ReturnRefundPolicy from "./pages/Return&RefundPolicy";

//import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
function App() {
  // const tawkMessengerRef = useRef();

  // function handleMinimize(){
  //      tawkMessengerRef.current.minimize();
  //  };

  return (
    <Router>
      {/*http://3.231.39.116:3001
     <button onClick={handleMinimize}> Minimize the Chat </button>
     <TawkMessengerReact
                propertyId="626a46d87b967b11798ce5fc"
                widgetId="1g1ni9g9u"
                useRef={tawkMessengerRef}/>*/}
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Homepage></Homepage>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/flights/:flyingobj">
          <Flights></Flights>
        </Route>
        <Route exact path="/sign-in">
          <Signin></Signin>
        </Route>
        <Route exact path="/sign-up">
          <Signup></Signup>
        </Route>
        <Route exact path="/sign-up-manager">
          <SignUpManager></SignUpManager>
        </Route>
        <Route exact path="/sign-up-admin">
          <AdminSignupcomp></AdminSignupcomp>
        </Route>
        <Route exact path="/edit-profile">
          <Editprofile></Editprofile>
        </Route>
        <Route exact path="/guides">
          <Guides></Guides>
        </Route>
        <Route exact path="/checkout/:flyObj">
          <Checkout></Checkout>
        </Route>
        <Route exact path="/payment">
          <PaymentComp></PaymentComp>
        </Route>
        <Route exact path="/admin-users">
          <Adminusers></Adminusers>
        </Route>
        <Route exact path="/admin-agents">
          <VerifyAgents></VerifyAgents>
        </Route>
        <Route exact path="/admin-contactus">
          <AdminContactUs></AdminContactUs>
        </Route>
        <Route exact path="/admin-booking">
          <Bookingcompadmin></Bookingcompadmin>
        </Route>
        <Route exact path="/admin-payment">
          <Adminpayments></Adminpayments>
          {/* <Bookingcompadmin></Bookingcompadmin> */}
        </Route>
        <Route exact path="/bookingdetails/preview/:id/:bookingId">
          <Bookingdetailscomp></Bookingdetailscomp>
        </Route>
        <Route exact path="/bookingdetails/:id/:bookingId">
          <Bookingdetailscomp></Bookingdetailscomp>
        </Route>
        <Route exact path="/forget-password">
          <ForgotPasswordComp></ForgotPasswordComp>
        </Route>
        <Route exact path="/reset-password">
          <ResetPassword></ResetPassword>
        </Route>
        <Route exact path="/verificationpage">
          <VerificationComp></VerificationComp>
        </Route>
        <Route exact path="/verifyuser/:id/:otp">
          <VerifyUser></VerifyUser>
        </Route>
        <Route exact path="/admin-stats">
          <Stats></Stats>
        </Route>
        <Route exact path="/privacypolicy">
          <PrivacyPolicy></PrivacyPolicy>
        </Route>
        <Route exact path="/termscondition">
          <TermsCondition></TermsCondition>
        </Route>
        <Route exact path="/returnpolicy">
          <ReturnRefundPolicy></ReturnRefundPolicy>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
