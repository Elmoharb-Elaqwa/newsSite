import React from 'react'
import styles from '../styleDashboard/Archief.module.css'
import { useNavigate } from 'react-router-dom';
export default function Kanaas() {
    const navigate = useNavigate();
  return (
    <div className={styles.informLastNews}>
      <div className={styles.input}>
        <div className={styles.inp1}>
          <label htmlFor=""> الاسم</label>
          <input type="text" className="form-control" placeholder=" الاسم " />
        </div>
        <div className={styles.inp1}>
          <label htmlFor=""> الصورة الشخصية</label>
          <input
            type="file"
            className="form-control"
            placeholder=" الوثائق والملفات"
          />
        </div>
      </div>
      <div className={styles.inp2}>
        <label htmlFor=""> المحتوي <small>سيرة ذاتية عنة واهم الجرائم اللتي قام بارتكابها</small></label>
        <textarea
          name=""
          id=""
          placeholder="المحتوي "
          className="form-control"
        ></textarea>
      </div>
      <div className={styles.inp3}>
        <label htmlFor="">روابط خاريجية(يوتيوب)-اختياري</label>
        <input type="text" className="form-control" />
      </div>
      <div className={styles.btnbottom}>
        <button
          className={`add`}
          style={{ color: "white", backgroundColor: "green" }}
        >
          اضافة
        </button>
        <button
          className={`add`}
          style={{ border: "1px solid red", color: "red" }}
          onClick={() => navigate("/dashboard")}
        >
          الغاء
        </button>
      </div>
    </div>
  );
}
