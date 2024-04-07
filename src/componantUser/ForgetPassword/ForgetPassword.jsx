import {React,useContext} from "react";
import style from "../RegisterUser/RegisterUser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { ContextUser } from "../../context/Context";
export default function ForgetPassword() {

  const {openAuth, setOpenAuth}= useContext(ContextUser)

  
  return (
    <div className={style.RegisterUser}>
      <form className={style.formsForget}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          style={{
            marginRight: "15px",
            marginTop: "10px",
            color: "red",
            cursor: "pointer",
          }}
          onClick={()=> setOpenAuth('')}
        />
        <div
          className={style.headForm}
          style={{ width: "80%", marginTop: "-20px" }}
        >
          <h6> نسيت كلمة المرور</h6>

          <hr />
        </div>
        <div className={style.inform1}>
          <div className={style.inpi2}>
            <label htmlFor="">ادخل رمز الدخول  </label>
            <input
              type="text"
              className="form-control"
              placeholder="  رمز الدخول"
            />
          </div>
          <div className={style.btnInpu1}>
            <button onClick={()=>setOpenAuth('rest')}>   تعيين كلمة المرور </button>

            <button
              style={{
                backgroundColor: "transparent",
                              border: "1px solid #3035A1",
                color:'#3035A1'
                          } }
                          onClick={ ()=>setOpenAuth('') }
            >
              رجوع
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
