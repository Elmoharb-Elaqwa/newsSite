import React from 'react'
import style from '../RegisterUser/RegisterUser.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useUser } from '../../context/Context';
export default function LoginUser() {
    const { closeAuth, Forget, openRegister } = useUser();
  return (
    <div className={style.RegisterUser}>
      <form className={style.formsLogin}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          style={{
            marginRight: "15px",
            marginTop: "10px",
            color: "red",
            cursor: "pointer",
          }}
          onClick={closeAuth}
        />
        <div
          className={style.headForm}
          style={{ width: "60%", marginTop: "-20px" }}
        >
          <h6> تسجيل الدخول</h6>

          <hr />
        </div>
        <div className={style.inform}>
          <div className={style.inpi2}>
            <label htmlFor=""> البريد الالكتروني </label>
            <input
              type="text"
              className="form-control"
              placeholder="البريد الالكتروني"
            />
          </div>
          <div className={style.inpi2}>
            <label htmlFor=""> كلمة المرور </label>
            <input
              type="text"
              className="form-control"
              placeholder="كلمة المرور"
            />
            <p onClick={Forget} style={{ cursor: "pointer" }}>
              هل نسيت كلمة المرور
            </p>
          </div>

          <div className={style.btnInpu}>
            <button> تسجيل الدخول</button>
            <button onClick={(e)=>e.preventDefault()}>
              {" "}
              ليس لدي حساب . <span onClick={openRegister}>انشاء حساب</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
