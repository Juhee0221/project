import { useNavigate } from "react-router-dom";
import "./SuccessJoin.css";

const SuccessJoin = () =>{
    const navigator = useNavigate();
    return(
        <>
         <div className="success-header">
            <div className="header-text">
                <h2>Ordering 회원이 되어주셔서 감사합니다.</h2>
                <span>최고의 서비스를 선사하는 Ordering이 되겠습니다.</span>
            </div>
         </div>
         
         <div className="success-footer">
            <button>주문하러가기</button>
            <button onClick={() => navigator("/")}>홈</button>
         </div>
        </>
    )
}
export default SuccessJoin;