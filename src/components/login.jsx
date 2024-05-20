import { useDispatch } from "react-redux"
import { useState } from "react";
import { LogIn } from "../redux/dataActions";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = useState({ userName: "", password: "" });
    const users = useSelector(s => s.users)
    const admin = useSelector(s => s.admin)
    const logIn = () => {
        debugger
        if (users.findIndex(
            (u => u.userName === user.userName &&
                u.password === user.password) !== -1)
            ||
            (admin.userName === user.userName &&
            admin.password === user.password)) {
            dispatch(LogIn(user))
            navigate("../")
        }
        else {
            alert("Log In Failed")
        }
    }
    return <>
        <form className="login">
            <input type="text" placeholder="שם משתמש" onChange={(e) => setUser({ ...user, userName: e.target.value })}></input>
            <br />
            <br />
            <input type="password" placeholder="סיסמא" onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
            <br />
            <br />
            <button onClick={(e) => {
                e.preventDefault()
                logIn()
            }}>כניסה</button>
            <br />
            <br />
            <Link to={"../Signin"}><span>אין לכם חשבון?</span></Link>
        </form>
    </>
}