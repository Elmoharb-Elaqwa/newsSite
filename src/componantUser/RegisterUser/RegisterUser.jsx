import React, { useState } from 'react'
import style from './RegisterUser.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../../context/Context';
export default function RegisterUser() {
    const [ open, setOpen ] = useState( false );
    const { closeAuth,successRegister ,openLogin} = useUser();
  return (
    <>
      <div className={style.RegisterUser}>
        <form className={style.forms}>
          <div className={style.headForm}>
            <p>انشاء حساب</p>
            <FontAwesomeIcon
              icon={faCircleXmark}
              style={{
                position: "absolute",
                top: "-20%",
                right: 0,
                color: "red",
                cursor: "pointer",
              }}
              onClick={closeAuth}
            />
            <hr />
          </div>
          <div className={style.inform}>
            <div className={style.input}>
              <div className={style.inpi}>
                <label htmlFor="">اسم المستخدم</label>
                <input type="text" className="form-control" />
              </div>
              <div className={style.inpi}>
                <label htmlFor="">رقم الهاتف </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className={style.input}>
              <div className={style.inpi}>
                <label htmlFor="">(ثلاثي) الاسم بالكامل</label>
                <input type="text" className="form-control" />
              </div>
              <div className={style.inpi}>
                <label htmlFor=""> المحافظة </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className={style.input}>
              <div className={style.inpi}>
                <label htmlFor="">البريد الالكتروني </label>
                <input type="text" className="form-control" />
              </div>
              <div className={style.inpi}>
                <label htmlFor=""> تاكيد البريد الالكتروني </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className={style.input}>
              <div className={style.inpi}>
                <label htmlFor="">كلمة المرور </label>
                <input type="text" className="form-control" />
              </div>
              <div className={style.inpi}>
                <label htmlFor=""> تاكيد كلمة المرور </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className={style.wateca}>
              <div className={style.watecaText}>
                <p>
                  تحميل صورة الوثيقة الشخصية ( اختياري:للحسابات
                  الموثوقة..للاطلاع علي التفاصيل{" "}
                  <span onClick={() => setOpen((e) => !e)}>اضغط هنا</span>)
                </p>
                {open && (
                  <p>
                    الحساب الموثق يتيح لك العديد من المميزات والتي تتمثل في
                    إمكانية إدخال بيانات على الموقع ، سواء كانت هذه البيانات هي
                    ( شهداء - معتقلين - مفقودين - مجرمي الحرب - خونة ) ، كما
                    تتيح لك ميزة توثيق الحساب الحصول على شارة التوثيق المميزة{" "}
                  </p>
                )}
                <p>
                  <span>ملحوظة : </span> هذة الوثيقة مطلوبة لانك تعد من
                  المشاركين في الموقع وليست لاغراض سياسية
                </p>
              </div>
              <div className={style.watecaInput}>
                <label htmlFor="file-upload" className={style.customfileupload}>
                  ارفع الملف
                </label>
                <input type="file" className="form-control" id="file-upload" />
              </div>
            </div>
            <div className={style.picture}>
              <div className={style.pictureText}>
                <p>تحميل صورة الملف الشخصي (اختياري)</p>
              </div>
              <div className={style.pictureInput}>
                <label
                  htmlFor="file-upload1"
                  className={style.customfileupload}
                >
                  ارفع الملف
                </label>

                <input type="file" className="form-control" id="file-upload1" />
              </div>
            </div>
            <div className={style.btnInpu}>
              <button onClick={successRegister}>انشاء حساب</button>
              <button onClick={openLogin}>لدي حساب بالفعل</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
