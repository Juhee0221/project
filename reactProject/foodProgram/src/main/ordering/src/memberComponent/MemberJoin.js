import { useEffect, useRef, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import Post from "./Post";
import axios from "axios";
import "./MemberJoin.css";
import { type } from "@testing-library/user-event/dist/type";
import { useNavigate } from "react-router-dom";

const MemberJoin = () =>{
    const navigator = useNavigate();
    // 주소창 띄우기
    const [enroll_company, setEnroll_company] = useState({
        memberAddr:'',
    });
    
    const [popup, setPopup] = useState(false);
    
    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
    }
    
    const handleComplete = (data) => {
        setPopup(!popup);
    }
    const memberList = {
        memberId : '',
        memberPw : '',
        memberName : '',
        memberTel : '' ,
        memberEmail : '',
        memberAddr : '',
        addrDetail : ''
    }

   const [checkCode , setCheckCode] = useState('')

    // sms 보내기
    const [memberTel , setMemberTel] = useState()
    const [memberVO , setMemberVo] = useState(memberList)

   
    const sendSms = (e) =>{
        axios.post("/sendSms", memberVO)
        .then(response =>{
            console.log("@@@@" + response.data)
            setCheckCode(response.data)
            console.log(checkCode)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    // 인증번호 받아오기
    
    const [randCode, setRandCode] = useState('')
    const [password , setPassword] = useState('')
    console.log("!!!!" + checkCode)
   
    const memberJoin = (e) =>{
        setMemberVo({...memberVO , [e.target.name] : e.target.value})
        console.log(e.target.value)
    }
    const memberRef = useRef();

    const JoinMember = () =>{
        if(memberVO.memberName == ''){
            alert("이름은 필수입력 사항입니다.")
            // memberRef.current.focus();
            return;
        }
        if(memberVO.memberId == ''){
            alert("아이디는 필수입력 사항입니다.")
            // memberRef.current.focus();
            return;
        }
        if(memberVO.memberPw == ''){
            alert("비밀번호는 필수입력 사항입니다.")
            // memberRef.current.focus();
            return;
        }
        if(memberVO.memberEmail == ''){
            alert("이메일은 필수입력 사항입니다.")
            // memberRef.current.focus();
            return;
        }
        // if(memberVO.memberAddr == ''){
        //     alert("주소를 입력해주세요.")
        //     // memberRef.current.focus();
        //     return;
        // }
        if(randCode == ''){
            alert("휴대폰 인증을 해주세요.")
            // memberRef.current.focus();
            return;
        }

        axios.post("/member/memberJoin" ,memberVO)
        .then(response => {
            navigator('/successJoin')
        }).catch(error =>{
            console.log(error)
        })
    }
   
    return(
        <>
            <div className="join-container">
                <div className="join-content">
                    <div className="join-header">
                        <span className="join-icon"><img src={process.env.PUBLIC_URL + '/images/usericon.png'}/></span>
                        <input type="text" name="memberId" placeholder=" 아이디" onChange={memberJoin} className="join-input"></input>
                    </div>
                    <div className="join-middle">
                        <span className="join-icon"><img src={process.env.PUBLIC_URL + '/images/pwicon.png'}/></span>
                        <input type="password" name="memberPw" placeholder=" 비밀번호"  onChange={memberJoin} className="join-input"></input>
                    </div>
                    <div className="join-middle">
                        <span className="join-icon"><img src={process.env.PUBLIC_URL + '/images/pwicon.png'}/></span>
                        <input type="password"  placeholder=" 비밀번호확인" value={password} className="join-input" onChange={e =>{
                            setPassword(e.target.value);
                            console.log(e.target.value)
                        }}/>
                        <button type="button" className="join-btn" onClick={(e) =>{
                            if(memberVO.memberPw != password){
                                setPassword('')
                                // console.log(e.target.closest("input"))
                                // memberRef.current.focus();
                                alert("입력하신 비밀번호가 맞지 않습니다.")
                                return;
                            } 
                            }}>비밀번호 확인</button>
                    </div>
                    <div className="join-footer">
                        <span className="join-icon"><img src={process.env.PUBLIC_URL + '/images/emailIcon.png'}/></span>
                        <input type="text" name="memberEmail" placeholder=" 이메일(비밀번호 등 본인확인용)" className="join-input"
                               onChange={memberJoin}
                        />
                    </div>

                    <div className="join-header">
                        <span className="join-icon"><img src={process.env.PUBLIC_URL + '/images/usericon.png'}/></span>
                        <input  className="join-input" type="text" name="memberName" placeholder=" 이름"  onChange={memberJoin}></input>
                    </div>
                    <div className="join-middle">
                        <span  className="join-icon"><img src={process.env.PUBLIC_URL + '/images/addressIcon.png'}/></span>
                        <input className="join-input" placeholder="주소"  type="text" 
                               required={true} name="memberAddr" onChange={memberJoin} value={enroll_company.address}/>
                        <button onClick={handleComplete} className="join-btn"  onChange={memberJoin}>우편번호 찾기</button>
                    </div>
                    <div className="join-middle">
                        <span className="join-icon"></span>
                        <input type="text" placeholder="상세주소" name="addrDetail" className="join-input"  onChange={memberJoin}></input>
                        {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
                    </div>
                    <div className="join-middle">
                        <span className="join-icon"><img src={process.env.PUBLIC_URL + '/images/telIcon.png'}/></span>
                        <input className="join-input" type="text" name="memberTel" onChange={memberJoin} placeholder="전화번호" />
                        <button type="button" onClick={() => {sendSms()
                            alert("입력해주신 전화번호로 인증번호를 발송하였습니다.")
                        }} className="join-btn">인증번호받기</button>
                    </div>
                    <div className="join-footer">
                            <div className="join-icon"></div>
                            <input type="text" className="join-input" onChange={e => {
                                setRandCode(e.target.value)
                            }} placeholder="인증번호를 입력해주세요."></input>
                            <button className="join-btn" type="button" onClick={(e) => {
                                if(checkCode == randCode){
                                    // alert(checkCode)
                                    alert("휴대폰 인증이 정상적으로 완료 되었습니다.")
                                    e.target.disabled = true;
                                    e.target.innerText = '인증완료';
                                    }else{
                                    alert("인증번호가 올바르지 않습니다.")
                                    }
                            }}>인증</button>
                    </div>
                    
                    <div className="joinFooter">
                         <button type="button" className="join-button" onClick={JoinMember}>회원가입</button>
                    </div>
                </div>
            </div>
        </>
    )
}
//사람 아이콘 제작자: Muhammad Yafinuha - Flaticon
export default MemberJoin;