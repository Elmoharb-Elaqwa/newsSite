import React from "react";
import style from "../RegisterUser/RegisterUser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../context/Context";
export default function ForgetPassword() {
  const { closeAuth } = useUser();
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
          onClick={closeAuth}
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
            <label htmlFor="">ادخل البريد الالكتروني </label>
            <input
              type="text"
              className="form-control"
              placeholder=" البريد الالكتروني"
            />
          </div>
          <div className={style.btnInpu1}>
            <button> ارسل رسالة تاكيد</button>
            <button
              style={{
                backgroundColor: "transparent",
                              border: "1px solid #3035A1",
                color:'#3035A1'
                          } }
                          onClick={closeAuth}
            >
              رجوع
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
