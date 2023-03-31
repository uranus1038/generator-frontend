import { Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import '../yumi_assets/navbar/navbar.css'
import '../yumi_assets/umi-god-main.css'
import '../yumi_assets/umi-special.css'
export default function FormCreation() {
    let gender;
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [nameStar, setNameStar] = useState('');
    const [passWord, setPassWord] = useState('');
    const [birthday, setBirthday] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [userNameError, setuserNameError] = useState('');
    const [passWordError, setpassWordError] = useState('');
    const [birthdayError, setBirthdayError] = useState('');
    const [error, setError] = useState('');
    const [isEmailValidate, setIsEmailValidate] = useState(false);
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        //regular expression validate email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setIsEmailValidate(emailRegex.test(event.target.value));
    }
    // func check birthday
    const validDate = (dateString) => {
        // regular expression validate 
        let regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (!regex.test(dateString)) {
            return false;
        }
        let parts = dateString.split("/");
        let day = parseInt(parts[0], 10);
        let month = parseInt(parts[1], 10);
        let year = parseInt(parts[2], 10);
        // Object date check valiDate
        let date = new Date(year, month - 1, day);
        if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
            return false;
        }
        return true;
    }
    // check length Name
    const handlenameStarChange = () => {
        const starInput = document.getElementsByName("nameStar")[0].value.length  ;
        if (starInput < 4 || starInput > 10) setNameError('nameStar must be between 4-12 characters');
        else setNameError('');
    }
    // check length User
    const handleuserNameChange = () => {
        const usernameInput = document.getElementsByName("userName")[0].value.length  ;
        if (usernameInput < 4 || usernameInput > 18) setuserNameError('Username must be between 4-20 characters');
        else setuserNameError('');
    }
    // check length passWord
    const handlepassWordChange = () => {
        const passWordInput = passWord.length;
        if (passWordInput < 8) setpassWordError('passWord must be at least 8 characters');
        else setpassWordError('');

    }
    // check length Birthday
    const handlebirthdayChang = () => {
        const birthday = document.getElementsByName("birthday")[0].value  ;
        if (!validDate(birthday)) {
            setBirthdayError('Please enter a valid date in the format dd/mm/yyyy');
        } else {
            setBirthdayError('');
        }
    }
    const OnSubmit = async (event) => {
        event.preventDefault();
        // array check err
        let pushErr = [];
        gender = document.getElementsByName('gender')[0].value;
        if (!isEmailValidate)  pushErr.push("err");
        if (nameStar.length > 12 || nameStar.length < 4) pushErr.push("err");
        if (userName.length > 20 || userName.length < 4) pushErr.push("err");
        if (passWord.length < 8) pushErr.push("err");
        if (!validDate(birthday)) pushErr.push("err");
        if (pushErr.length === 0) {
            await axios.post("http://localhost:8000/api/creation/submit", {
                email: email,
                nametag: nameStar,
                userName: userName,
                passWord: passWord,
                birthday: birthday,
                gender: gender
            }).then(respon => {
                let status = respon.data.status ; 
                if(status === "email-active")
                {
                    setEmailError("#This email is already in use.!");
                }else if(status === "name-active")
                {
                    setuserNameError("#This username is already in use.!");
                }else if(status === "successed")
                {
                    return  window.location.replace('/');
                }
            })
        }

    }
    const navigation = useNavigate();
    return (
        <section>
            <form className="umi-form-control">
                <div className="umi-rows umi-rows-s umi-justify-center ">
                    <div className="umi-col ">
                        <p className="umi-form-label fw-normal f-momo fs-medium mt-2 " >{emailError}</p>
                        <input 
                            onChange={(event) => {
                                setEmail(event.target.value);
                                handleEmailChange(event);
                            }}
                            className=" umi-form-tx-outness-haiiro pl-2 mt-1" placeholder="Enter your email"
                            name="email" type="email" required />
                        <p className="umi-form-label fw-normal f-shiro fs-medium mt-2">
                            *This name is used to display on the application.</p>
                        <p className="umi-form-label fw-normal f-momo fs-medium  " >{nameError}</p>
                        <input 
                            onChange={(event) => {
                                setNameStar(event.target.value);
                                handlenameStarChange();
                            }}
                            className=" umi-form-tx-outness-haiiro pl-2 mt-1" placeholder="Enter name star"
                            name="nameStar" type="text" pattern="[a-zA-Z]+" required />
                        <p className="umi-form-label fw-normal f-momo fs-medium  mt-1 " >{userNameError}</p>
                        <input
                            onChange={(event) => {
                                setUserName(event.target.value);
                                handleuserNameChange();
                            }}
                            className=" umi-form-tx-outness-haiiro pl-2 mt-1" placeholder="Enter username"
                            name="userName" type="text" pattern="[a-zA-Z0-9]+" required />
                        <p className="umi-form-label fw-normal f-momo fs-medium  mt-1 " >{passWordError}</p>
                        <input
                            value={passWord} onChange={(event) => {
                                setPassWord(event.target.value);
                                handlepassWordChange();
                            }}
                            className=" umi-form-tx-outness-haiiro pl-2 mt-1" placeholder="Enter your password"
                            name="passWord" type="passWord" pattern="[a-zA-Z0-9]+" required />
                        <p className="umi-form-label fw-normal f-momo fs-medium  mt-1 " >{birthdayError}</p>
                        <input
                            onChange={(event) => {
                                setBirthday(event.target.value);
                                handlebirthdayChang();
                            }} placeholder="01/01/2023"
                            className=" umi-form-tx-outness-haiiro pl-2 mt-1 mr-2"
                            name="birthday" type="text" required />
                        <select
                            name="gender" className="pl-2 umi-form-selector mt-2 umi-form-tx-outness-haiiro mb-1" required>
                            <option className="p-3 f-dark-blue" value="male">Male</option>
                            <option className="f-dark-blue" value="female" selected>Female</option>
                        </select>
                        <button className="w-25 mt-1  btn umi-btn-sora umi-rounded-1 umi--sora"
                            onClick={() => { navigation("/") }} type="button"><i className="fas fa-caret-left">
                            </i> Back</button>
                        <button id="btn-next" onClick={OnSubmit} className=" w-35 w-35-s ml-2 mt-1 btn umi-btn-sora umi-rounded-1"
                            type="button">Next Register <i className="fas fa-caret-right">
                            </i></button>
                    </div>
                </div>
            </form>
        </section>
    )
}
