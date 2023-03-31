import { Form, Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import '../yumi_assets/navbar/navbar.css'
import '../yumi_assets/umi-god-main.css'
import '../yumi_assets/umi-special.css'

export default function FormLoginEng() {
    const navigation = useNavigate();
    return (
        <section>
            <form className="umi-form-control">
                <div className="umi-rows umi-rows-s umi-justify-center ">
                    <div className="umi-col ">
                        <input
                            className=" umi-form-tx-outness-haiiro pl-2 mt-2" placeholder="Enter username"
                            name="userName" type="text" pattern="[a-zA-Z]+" required />
                        <input
                            className=" umi-form-tx-outness-haiiro pl-2 mt-2  mb-2" placeholder="Enter password"
                            name="passWord" type="text" pattern="[a-zA-Z]+" required />
                        <hr />
                        <p className="umi-form-label fw-normal f-shiro fs-medium mt-1 ">
                            *Apply for an account<span className="btn f-momo umi-underline  "
                            onClick={() => { navigation("/en/creation") }} >Create</span>
                            or <span className="umi-underline f-haiiro">Forgot your password?</span></p>
                        <button className="w-25 mt-1  btn umi-btn-sora umi-rounded-1 umi--sora "
                            onClick={() => { navigation("/") }} type="button"><i className="fas fa-caret-left">
                            </i> Back</button>
                        <button id="btn-next" className=" w-35 w-35-s ml-2 mt-1 btn umi-btn-sora umi-rounded-1"
                            type="button">Login <i className="far fa-paper-plane">
                            </i></button>
                    </div>
                </div>
            </form>
        </section>
    )
}