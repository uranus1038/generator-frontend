import { Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import '../yumi_assets/navbar/navbar.css'
import '../yumi_assets/umi-god-main.css'
import '../yumi_assets/umi-special.css'
export default function FormCreation() {
    let email, namestar;
    const [isValidEmail, setIsValidEmail] = useState(false);
    // array check err
    let psuhErr = [];
    const verify = (params, data, id) => {
        let status
        axios({
            method: 'POST', url: 'http://localhost:8000/api/creation/verify-' + params,
            data: {
                data: data
            }
        }).then((respon) => {
            status = respon.data.statusMessage;
            console.log(status);

            if (isValidEmail)
                if (status === "ok")
                    document.querySelector(id).innerHTML = "#Not available";
                    // document.querySelector('input[name="email"]').style.outline = "pink solid 3px";
                else verifyNameStar();
        }
        )
    }
    const isVlidEmail = async (event) => {
        const emailValue = event.target.value;
        // regular expression validate 
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        setIsValidEmail(emailRegex.test(emailValue));
    }
    // func check birthday
    const isValidDate = (dateString) => {
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
    const verifyNameStar = () => {
        const nameStarInput = document.getElementsByName("namestar")[0].value.length;
        if (nameStarInput < 4 || nameStarInput > 12)
            document.querySelector("#err-02").innerHTML = "#Enter 4-20 characters only.";
        else document.querySelector("#err-02").innerHTML = "";
    }


    const navigation = useNavigate();
    return (
        <section>
            <form className="umi-form-control">
                <div className="umi-rows umi-justify-center mt-5">
                    <div className="umi-col ">
                        <p id="err-01" className="umi-form-label fw-normal f-momo fs-medium mt-2 " ></p>
                        <input
                            value={email} onChange={(event) => {
                                email = event.target.value;
                                isVlidEmail(event);
                                verify("email", email, "#err-01");
                            }}
                            className=" umi-form-tx-outness-haiiro pl-2 mt-1" placeholder="Enter your email"
                            name="email" type="email" />
                        <p className="umi-form-label fw-normal f-shiro fs-medium mt-2">
                            *This name is used to display on the application.</p>
                        <p id="err-02" className="umi-form-label fw-normal f-momo fs-medium  " ></p>
                        <input
                            value={namestar} onChange={(event) => {
                                namestar = event.target.value;
                                verify("namestar", namestar, "#err-02");
                            }}
                            className=" umi-form-tx-outness-haiiro pl-2 mt-1" placeholder="Enter Name Star"
                            name="namestar" type="text" />
                        <input className=" umi-form-tx-outness-haiiro pl-2 mt-2" placeholder="Enter username"
                            name="userName" type="text" />
                        <input className=" umi-form-tx-outness-haiiro pl-2 mt-2" placeholder="Enter your password"
                            name="passWord" type="password" />
                        <input className=" umi-form-tx-outness-haiiro pl-2 mt-2 mr-2" value="01/01/2023"
                            name="birthday" type="text" />
                        <select name="gender" className="pl-2 umi-form-selector mt-2 umi-form-tx-outness-haiiro mb-2" >
                            <option className="p-3 f-dark-blue" value="male">Male</option>
                            <option className="f-dark-blue" value="female">Female</option>
                        </select>
                        <button className="w-25  btn umi-btn-sora umi-rounded-1 umi--sora"
                            onClick={() => { navigation("/") }} type="button"><i className="fas fa-caret-left">
                            </i> Back</button>
                        <button className="w-25 ml-2 btn umi-btn-sora umi-rounded-1"
                            type="button">Next Register <i className="fas fa-caret-right">
                            </i></button>
                    </div>
                </div>
            </form>
        </section>
    )
}
