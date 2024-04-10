import {React,useContext, useState} from 'react'
import style from '../RegisterUser/RegisterUser.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { ContextUser} from '../../context/Context';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginUser() {

  const {openAuth, setOpenAuth}= useContext(ContextUser)
  const [errorMsg, setErrorMsg]= useState('')
  const [isLoading, setIsLoading]= useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const validationSchema = Yup.object({
    // password: Yup.string().required('كلمة المرور مطلوبة').matches(/^\d{2}$/, 'كلمة المرور يجب أن تحتوي على 6 أرقام'),
    email: Yup.string().required('البريد الإلكتروني مطلوب').email('من فضلك أدخل بريد إلكتروني صحيح'),
});
  

const userLogin = async (e) => {
    e.preventDefault();
    await fetch
      .post('https://syrianrevolution1.com/users/login', { email, password })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
const{values,handleSubmit,handleChange,handleBlur,errors,touched, isValid}= useFormik({
  initialValues:{
    password:'',
    email:'',
 },
  // onSubmit:async ()=>{
  //   setErrorMsg('')
  //   setIsLoading('true')
  //    try{
  //     let response= await axios.post('https://syrianrevolution1.com/user/login', {email,password}).then(()=>{setOpenAuth('')
  //     navigate('/')})
  //    console.log(response)
     
  //   }
  //    catch(error){
  //        console.log(error)
  //        setErrorMsg(error.response.data)
  //    }

  //    setIsLoading('false')
  // },
  // validationSchema

 })


  return (
    <div className={style.RegisterUser}>
      <form className={style.formsLogin} onSubmit={(e)=>userLogin(e)}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          style={{
            marginRight: "15px",
            marginTop: "10px",
            color: "red",
            cursor: "pointer",
          }}
          onClick={()=>setOpenAuth('')}
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
              type="text" className="form-control" name="email"   onChange={(e)=>setEmail(e.target.value)} onBlur={handleBlur}
              placeholder="البريد الالكتروني"
            />
            {errors.email && touched.email && <p className={`alert alert-danger p-1 fw-1 ${style.alert}`}>{errors.email}</p>}
          </div>

          <div className={style.inpi2}>
            <label htmlFor=""> كلمة المرور </label>
            <input
             type="text" className="form-control" name="password" onChange={(e)=>setPassword(e.target.value)} onBlur={handleBlur}
              placeholder="كلمة المرور"
            />
             {errors.password && touched.password && <p className={`alert alert-danger p-1 fw-1 ${style.alert}`}>{errors.password}</p>}
            <p onClick={()=>setOpenAuth('forget')} style={{ cursor: "pointer" }}>
              هل نسيت كلمة المرور
            </p>
          </div>
          {errorMsg && <div className={`form-control  alert alert-danger m-3 p-1 w-75 text-center ${style.alert}`}>{errorMsg}</div>}

          <div className={style.btnInpu}>
            <button type='submit' > تسجيل الدخول</button>
            <button onClick={(e)=>e.preventDefault()}>
              {" "}
              ليس لدي حساب . <span onClick={()=>setOpenAuth('register')}>انشاء حساب</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
