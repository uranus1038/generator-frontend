import { Navigate, useNavigate } from "react-router-dom";
import '../yumi_assets/navbar/navbar.css'
import '../yumi_assets/umi-god-main.css'
import '../yumi_assets/umi-special.css'
export default function FormCreation() {
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
    const OnBirthDay = () => {
        var birthdayInput = document.getElementsByName("birthday")[0];
        var birthday = birthdayInput.value;
        if (!isValidDate(birthday)) {
            alert("กรุณากรอกวันที่ในรูปแบบ dd/mm/yyyy");
            return false;
        } else {
            alert("successfully");
        }
    }

    const navigation = useNavigate();
    return (
        <section>
            <form className="umi-form-control">
                <div className="umi-rows umi-justify-center mt-5">
                    <div className="umi-col ">
                        <input className=" umi-form-tx-outness-haiiro pl-2 " placeholder="Enter your email"
                            type="email" />
                        <p className="umi-form-label fw-normal f-shiro fs-medium mt-2">
                            *This name is used to display on the application.</p>
                        <input className=" umi-form-tx-outness-haiiro pl-2 mt-1" placeholder="Enter Name-tag"
                            type="text" />
                        <input className=" umi-form-tx-outness-haiiro pl-2 mt-2" placeholder="Enter username"
                            type="text" />
                        <input className=" umi-form-tx-outness-haiiro pl-2 mt-2" placeholder="Enter your password"
                            type="password" />
                        <input className=" umi-form-tx-outness-haiiro pl-2 mt-2 mr-2" value="01/01/2023"
                            name="birthday" type="text" />
                        <select className="pl-2 umi-form-selector mt-2 umi-form-tx-outness-haiiro mb-2" name="" id="">
                            <option className="p-3 f-dark-blue" value="">Male</option>
                            <option className="f-dark-blue" value="">Female</option>
                        </select>
                        <button className="w-25  btn umi-btn-shiro"
                            onClick={() => { navigation("/") }} type="button"><i className="fas fa-caret-left">
                            </i> Back</button>
                        <button className="w-25 ml-2 btn umi-btn-shiro"
                            onClick={() => { OnBirthDay() }} type="button">Next Register <i className="fas fa-caret-right">
                            </i></button>   
                    </div>
                </div>
            </form>
        </section>
    )
}
