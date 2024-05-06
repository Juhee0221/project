import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

const Login = () =>{
    const navigator = useNavigate();

    const memberVo = {
        memberId : '',
        memberPw : ''
    }
    const [memberList , setMemberLsit] = useState(memberVo)

    const login = (e) =>{
        setMemberLsit({...memberList , [e.target.name] : e.target.value})
    }

    const goLogin = () => {
        if(memberList.memberId == ''){
            alert("아이디를 입력해주세요")
            return;
        }
        if(memberList.memberPw == ''){
            alert("아이디를 입력해주세요")
            return;
        }
        
        axios.post("/member/memberLogin" , memberList)
        .then(response =>{
            console.log(response.data)
            alert(response.data.memberId + "님 반갑습니다.")
            navigator("/")
        })
        .catch(error => {
            console.log(error)
        })
    }
    return(
        <>
            <div className="login-container">
                <div className="login-header">
                    <h3>Login</h3>
                </div>
                <div className="login-content">
                    <input type="text" name="memberId" onChange={login} placeholder="  아이디"/>
                    <input type="password" name="memberPw" onChange={login} placeholder="  비밀번호"/>
                </div>
                <div className="login-footer">
                    <button type="button" onClick={goLogin}>로그인</button>
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