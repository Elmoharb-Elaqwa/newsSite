import React from 'react'
import styles from '../styleDashboard/Archief.module.css'
import { useNavigate } from 'react-router-dom';
export default function AddAMassacre() {
    const navigate = useNavigate();
  return (
    <div className={styles.informLastNews}>
      <div className={styles.input}>
        <div className={styles.inp1}>
          <label htmlFor=""> عنوان المجزرة</label>
          <input
            type="text"
            className="form-control"
            placeholder="  عنزان المجزرة"
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
        <label htmlFor=""> تفاصيل المجزرة</label>
        <textarea
          name=""
          id=""
          placeholder=" تفاصيل المجزرة"
          className="form-control"
        ></textarea>
      </div>
      <div className={styles.inp1}>
        <label htmlFor=""> الجهة المسؤولة</label>
        <select name="" id="" className="form-control">
          <option value="">النظام</option>
          <option value="">داعش</option>
          <option value="">قسد</option>
        </select>
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
