import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () =>{
    const navigator = useNavigate();
    return(
        <>
            <div className="login-container">
                <div className="login-header">
                    <h3>Login</h3>
                </div>
                <div className="login-content">
                    <input type="text" placeholder="  아이디"/>
                    <input type="password" placeholder="  비밀번호"/>
                </div>
                <div className="login-footer">
                    <button type="button">로그인</button>
                    <ul className="member-join">
                        <li><a>아이디 찾기</a></li>
                        <li><a>비밀번호 찾기</a></li>
                        <li><a onClick={() => navigator("/memberJoin")}>회원가입</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Login;