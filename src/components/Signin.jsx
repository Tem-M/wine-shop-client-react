import { useDispatch } from "react-redux"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const Signin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = useState({ userName: "", password: "" });
    const users = useSelector(s => s.users);
    const signIn = () => {
        if (users.findIndex(u => u.userName === user.userName) !== -1
            || user.userName === "admin") {
            const name = document.getElementById("username-signin")
            const password = document.getElementById("password-signin")
            name.value = ""
            password.value = ""
            alert("User Name Taken")
        }
        else if (!user.userName || !user.password) {
            debugger
            alert("Missing Required Information")
        }
        else {
            dispatch(signIn(user))
            navigate("../")
        }
    }
    return <>
        <form className="login">
            <input id="username-signin" type="text" placeholder="שם משתמש" onChange={(e) => setUser({ ...user, userName: e.target.value })}></input>
            <br />
            <br />
            <input id="password-signin" type="password" placeholder="סיסמא" onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
            <br />
            <br />
            <button onClick={(e) => {
                e.preventDefault() 
                signIn()
            }}>הרשמה</button>
            <br />
            <br />
            <Link to={"../Login"}><span>יש לכם חשבון?</span></Link>
        </form>
    </>
}