import React, { useState } from 'react'
import styles from '../styleDashboard/RevolutionArchiveDash.module.css'
import Black from './Black';
import Kanaas from './Kanaas';
export default function BlackListDash() {
    const [ choiceArchife, setChoiceArchife ] = useState();
  return (
    <div>
      <div className={`headDashboard`}>
        <p>ادخال البيانات / ارشيف الثورة</p>
      </div>
      <div className={styles.filterAndDisplay}>
        <div className={styles.filter}>
          <span
            onClick={() => setChoiceArchife("black")}
            className={choiceArchife === "black" ? styles.active : ""}
          >
          القائمة السوداء
          </span>
          <span
            onClick={() => setChoiceArchife("khaan")}
            className={choiceArchife === "khaan" ? styles.active : ""}
          >
            الخونة
          </span>
    
        </div>
      </div>
      {choiceArchife === "black" && <Black />}
      {choiceArchife === "khaan" && <Kanaas />}
    </div>
  );
}
