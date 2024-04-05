import React from 'react'
import styles from '../styleDashboard/Archief.module.css';
import { useNavigate } from 'react-router-dom';
export default function Maarek() {
    const navigate = useNavigate();
  return (
    <div className={styles.informLastNews}>
      <div className={styles.input}>
        <div className={styles.inp1}>
          <label htmlFor=""> اسم المعركة</label>
          <input
            type="text"
            className="form-control"
            placeholder=" اسم المعركة"
          />
        </div>
        <div className={styles.inp1}>
          <label htmlFor=""> الملفات المرفقة</label>
          <input
            type="file"
            className="form-control"
            placeholder=" الوثائق والملفات"
          />
        </div>
      </div>
      <div className={styles.inp2}>
        <label htmlFor=""> محتوي المعركة</label>
        <textarea
          name=""
          id=""
          placeholder="محتوي المعركة"
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
