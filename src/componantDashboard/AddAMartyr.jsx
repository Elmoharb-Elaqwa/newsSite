import React from "react";
import styles from "../styleDashboard/AddSuperVisor.module.css";
import { useNavigate } from "react-router-dom";
export default function AddAMartyr() {
  const navigate = useNavigate();
  return (
    <div>
      <form action="" className={styles.form}>
        <div className={styles.headForm}>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor="">اسم الشهيد</label>
              <input
                type="text"
                placeholder="اسم الشهيد"
                className="form-control"
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> اسم الاب</label>
              <input
                type="text"
                placeholder="  اسم الاب"
                className="form-control"
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> كنية الشهيد</label>
              <input
                type="text"
                placeholder=" كنية الشهيد"
                className="form-control"
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> اسم الام</label>
              <input
                type="text"
                placeholder=" اسم الام "
                className="form-control"
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> المواليد</label>
              <input
                type="date"
                placeholder="  المواليد"
                className="form-control"
              />
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> مكان الخدث </label>
              <select name="" id="" className="form-control">
                <option value="">one</option>
                <option value="">two</option>

                <option value="">three</option>
              </select>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inp1}>
              <label htmlFor=""> الجهة المسؤولة</label>
              <select name="" id="" className="form-control">
                <option value="">النظام</option>
                <option value="">داعش</option>
                <option value="">قسد</option>
              </select>
            </div>
            <div className={styles.inp1}>
              <label htmlFor=""> الوثائق والملفات </label>
              <input type="file" />
            </div>
          </div>
          <div className={styles.input1}>
            <label htmlFor="">شرح مفصل</label>
            <textarea name="" id="" className="form-control"></textarea>
          </div>
        </div>
      </form>
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
          onClick={() => navigate(-1)}
        >
          الغاء
        </button>
      </div>
    </div>
  );
}
