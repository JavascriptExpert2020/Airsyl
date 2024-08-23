import React, {useState} from 'react'
import Axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Footer from './Footer'

toast.configure()
function ResetPassword() {
    const [userProfile, setUserProfile] = useState(JSON.parse(localStorage.getItem('blogUser')));
    const [user, setUserState] = useState({oldPassword:'',newPassword:'',confirmPassword:'',id:0});
    const [loading,setloading] =useState(false);
    const [message, setMessage] = useState({whiteSpace:false,specialCharacter:false,numberPresent:false,
        lengthGreaterthen8:false,UpperCase:false});
   const [showPassword,setShowPassword] =useState(false);
   const history = useHistory();
    function componentDidMount(e) {
        e.preventDefault();
        setloading(true);
        debugger
        if(message.whiteSpace === true && message.specialCharacter === true && message.numberPresent === true
            && message.lengthGreaterthen8 === true && message.UpperCase === true)
         {

            if(user.newPassword.length>8)
            {
                if(user.newPassword  === user.confirmPassword)
                {
                    Axios.post(`${process.env.React_App_Api_Url}/api/user/resetpassword`,{user}).then(res=>{
                        toast.success('Password Updated.');
                        setloading(false);
                        history.replace("/edit-profile");
                    }).catch(err=>{
                        toast.error(`${err.response.data.message}`);
                        setloading(false);
                    })
                }
                else{
                    toast.error('Password and Confirm Password mismatch.');
                    setloading(false);
                }
            }
            else{
                toast.error('Password length should be greater than 8.');
                setloading(false);
            }
        }
        else
        {
           toast.error('Password not valid.');
           setloading(false);
        }
    }
    function onChange(e)
    {
        const newUser = {...user};
        newUser.id = userProfile.id;
        if(e.target.id==='oldPassword')
        {
            newUser[e.target.id] = e.target.value
        }
        if(e.target.id==='newPassword')
        {
            newUser[e.target.id] = e.target.value
            checkWhiteSpace(e.target.value)
            checkNumber(e.target.value)
            checkUpperCase(e.target.value)
            checkSymbol(e.target.value)
            checkLength(e.target.value)
        }
        if(e.target.id==='confirmPassword')
        {
            newUser[e.target.id] = e.target.value
        }
        setUserState(newUser);

    }
    function checkWhiteSpace(value)
    {
        let newUser = message;
        const isNonWhiteSpace = /^\S*$/;
        if (isNonWhiteSpace.test(value)) {
            newUser.whiteSpace=true
          //return "Password must not contain Whitespaces.";
        }
        else
        {
            newUser.whiteSpace=false
        }
        setMessage(newUser);
    }
    function checkNumber(value)
    {
        let newUser = message;
        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (isContainsNumber.test(value)) {
            newUser.numberPresent=true
           //          return "Password must contain at least one Digit.";
        }
        else
        {
            newUser.numberPresent=false
        }
        setMessage(newUser);
    }
    function checkUpperCase(value)
    {
        const newUser = message;
        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (isContainsUppercase.test(value)) {
            newUser.UpperCase=true
//          return "Password must have at least one Uppercase Character.";
        }
        else
        {
            newUser.UpperCase=false
        }
        setMessage(newUser);
    }
    function checkSymbol(value)
    {
        const newUser = message;
        const isContainsSymbol =
        /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
      if (isContainsSymbol.test(value)) {
        newUser.specialCharacter=true
//          return "Password must contain at least one Special Symbol.";
      }
      else
      {
        newUser.specialCharacter=false   
      }
      setMessage(newUser);
    }
    function checkLength(value)
    {
        const newUser = message;
        const isValidLength = /^.{9,16}$/;
        if (isValidLength.test(value)) {
            newUser.lengthGreaterthen8=true;
          //return "Password must be 9-16 Characters Long.";
        }
        else
        {
            newUser.lengthGreaterthen8=false;
        }
        setMessage(newUser);
    }

    return (
        <>
     <section className="section-sign" style={{"marginTop":"10%","marginBottom":"10%"}}>
     {loading?<div className="loading"></div>:''} 

        <div className="container sign-container">
    
            <div className="row sign">
    
                <div className="col-12 col-lg-6 sign-left">
    
                    <div className="sign-title">
                    <h2>Reset Password</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
    
    
                    <form onSubmit={(e)=>{componentDidMount(e)}}>
    
                        <div className="form-field">
                            <label>Old Password *</label>
                            <input type={showPassword?"text":"password"} placeholder="*****" required id="oldPassword" onChange={onChange}/>
                            {!showPassword?(<i className="fa fa-eye-slash mr-3" onClick={(e)=>{setShowPassword(!showPassword)}}></i>):
                            (<i className="fa fa-eye mr-3" onClick={(e)=>{setShowPassword(!showPassword)}}></i>)}
                        </div>

                        <div className="form-field">
                            <label>New Password *</label>
                            <input type={showPassword?"text":"password"} placeholder="min 8 Characters" required id="newPassword" onChange={onChange}/>
                            {!showPassword?(<i className="fa fa-eye-slash mr-3" onClick={(e)=>{setShowPassword(!showPassword)}}></i>):
                            (<i className="fa fa-eye mr-3" onClick={(e)=>{setShowPassword(!showPassword)}}></i>)}
                            {
                                message?message.numberPresent?
                                <p style={{"color":"green"}}>- Must contain number.</p>:
                                <p style={{"color":"red"}}>- Must contain number.</p>:''
                            }
                            {
                                message?message.UpperCase?
                                <p style={{"color":"green"}}>- Must contain capital letter.</p>:
                                <p style={{"color":"red"}}>- Must contain capital letter.</p>:''
                            }
                            {
                                message?message.specialCharacter?
                                <p style={{"color":"green"}}>- Must contain special character.</p>:
                                <p style={{"color":"red"}}>- Must contain special character.</p>:''
                            }
                            {
                                message?message.lengthGreaterthen8?
                                <p style={{"color":"green"}}>- Password length should be greater then 8.</p>:
                                <p style={{"color":"red"}}>- Password length should be greater then 8.</p>:''
                            }
                            {
                                message?message.whiteSpace?
                                <p style={{"color":"green"}}>- Password must not contain Whitespaces.</p>:
                                <p style={{"color":"red"}}>- Password must not contain Whitespaces.</p>:''
                            }
                         </div>
    
                        <div className="form-field">
                            <label>Confirm Password *</label>
                            <input type={showPassword?"text":"password"} placeholder="min 8 Characters" required id="confirmPassword" onChange={onChange}/>
                            {!showPassword?(<i className="fa fa-eye-slash mr-3" onClick={(e)=>{setShowPassword(!showPassword)}}></i>):
                            (<i className="fa fa-eye mr-3" onClick={(e)=>{setShowPassword(!showPassword)}}></i>)}
                        </div>
                    
    
                        <div className="field-button field-button-full">
                        <input type="submit" value="Reset Password" className="button-green-full" />
                        <i className="fa-solid fa-paper-plane" style={{marginLeft:"-10%"}}></i>
                        </div>
    
    
                        
                    </form>
    
                </div>
    
    
                <div className="col-12 col-lg-6 sign-right">
                    
                </div>
    
            </div>
    
        </div>
    
    </section>
<Footer></Footer>
    </>
    )
}

export default ResetPassword
