import axios from "axios";
import Cookies from 'js-cookie';

function InserttoSql(dataemail, dataname, datapassword,rvdata) {

    const email = dataemail.current.value;
    const name = dataname.current.value;
    const password = datapassword.current.value;
    const RV = rvdata.current.value
    axios({
        url: "http://localhost/Prologin2/public/api/register",
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            email: email,
            name: name,
            password: password,
            captcha: Cookies.get("captcha"),
            rv: RV
        }
    })
        .then(function (response) {
            console.log(response.data);
            console.log("註冊成功");



        })
        .catch(function (error) {
            console.log("註冊失敗");


        });
}

function LoginFromSql(dataemail, datapassword,rvdata) {
    const email = dataemail.current.value;
    const password = datapassword.current.value;
    const RV = rvdata.current.value
// console.log(RV)

    axios({
        url: "http://localhost/Prologin2/public/api/login",
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            email: email,
            password: password,
            captcha: Cookies.get("captcha"),
            rv:RV,
        }
    })
        .then(function (response) {
            console.log(response.data);
            console.log('登入成功1');
            Cookies.set("token", response.data.authorization.token)
        })
        .catch(function (error) {
            console.log("密碼/使用者帳號輸入錯誤");
        });
}





export { InserttoSql, LoginFromSql, }
