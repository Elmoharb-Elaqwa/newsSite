import React from "react";
import styles from "../styleDashboard/LastNew.module.css";
import { useNavigate } from "react-router-dom";
export default function LastNewsDash() {
    const navigate = useNavigate()
  return (
    <div className={styles.LastNewsDash}>
      <div className={`headDashboard`}>
        <p>ادخال البيانات / اخر الاخبار</p>
      </div>
      <div className={styles.informLastNews}>
        <div className={styles.input}>
          <div className={styles.inp1}>
            <label htmlFor="">عنوان الخبر</label>
            <input
              type="text"
              className="form-control"
              placeholder="عنوان الخبر"
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
          <label htmlFor="">عنوان الخبر</label>
          <textarea name="" id="" placeholder="محتوي الخبر" className="form-control"></textarea>
        </div>
        <div className={styles.inp3}>
          <label htmlFor="">روابط خاريجية(يوتيوب)-اختياري</label>
          <input type="text" className="form-control"/>
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
            onClick={() => navigate('/dashboard')}
          >
            الغاء
          </button>
        </div>
      </div>
    </div>
  );
}
