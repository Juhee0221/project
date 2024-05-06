import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () =>{
    const navigator = useNavigate();
    return(
        <>
        <div className="main-header">
            <div className="side-menu">
                <h3>=</h3>
            </div>
            <div className="main_title">
                <h2 onClick={() => navigator('/')}>Ordering</h2>
            </div>
            <div className="spot-menu cuser">
                <h4 onClick={() => navigator('/login')}>로그인</h4>
            </div>   
        </div>

        
        </>
    )
}
export default Header;