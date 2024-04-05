import React, { useEffect, useState } from 'react';
import style from '../styleDashboard/leftSideBar.module.css';
import imgAvatar from '../image/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowRightFromBracket,
  faOutdent,
  faReceipt,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
export default function LeftSideBar() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={style.LeftSideBar}>
      <div className={style.first}>
        {!isMobile ? <img src={imgAvatar} alt="Avatar" /> : ''}
        <p>admin</p>
      </div>
      <div className={style.second}>
        <div className={style.secondFirst}>
          <NavLink to="/dashboard/supervisor">
            <FontAwesomeIcon icon={faUserGroup} />
            {!isMobile ? <p>المشرفون</p> : ''}
          </NavLink>
        </div>
        <div className={style.secondsecond}>
          <div className={style.headsecondsecond}>
            <Link>
              <FontAwesomeIcon icon={faArrowDown} />

              {!isMobile ? <p>البيانات المستلمة</p> : ''}
            </Link>
          </div>

          <div className={style.listSecondSecond}>
            <NavLink to="/dashboard/martyrs">
              {isMobile ? 'ش' : ' شهداء'}
            </NavLink>
            <NavLink to="/dashboard/detaineesdash">
              {isMobile ? 'م' : 'معتقلين'}
            </NavLink>
            <NavLink to="/dashboard/missingdash">
              {isMobile ? 'مف' : 'مفقودين'}
            </NavLink>
            <NavLink to="/dashboard/warcriminals">
              {' '}
              {isMobile ? 'مح' : 'مجرمين حرب'}
            </NavLink>
            <NavLink to="/dashboard/traitors">
              {isMobile ? 'خ' : 'خونة'}
            </NavLink>
            <NavLink to="/dashboard/honorcard">
              {' '}
              {isMobile ? 'بط' : 'بطاقات تكريم'}
            </NavLink>
          </div>
        </div>
        <div className={style.secondsecond}>
          <div className={style.headsecondsecond}>
            <Link>
              <FontAwesomeIcon icon={faOutdent} />
              {!isMobile ? <p> ادخال البيانات</p> : ''}
            </Link>
          </div>

          <div className={style.listSecondSecond}>
            <NavLink to="/dashboard/lastnewsdash">
              {' '}
              {isMobile ? 'اخر' : 'اخر الاخبار'}
            </NavLink>
            <NavLink to="/dashboard/revolutionarchivedash">
              {isMobile ? 'اش' : 'ارشيف الثورة'}
            </NavLink>
            <NavLink to="/dashboard/symbolsoftherevolution">
              {isMobile ? 'رم' : 'رموز الثورة'}
            </NavLink>
            <NavLink to="/dashboard/blacklist">
              {' '}
              {isMobile ? 'سو' : 'القائمة السوداء'}
            </NavLink>
            <NavLink to="/dashboard/crimessystem">
              {' '}
              {isMobile ? 'جر' : 'جرائم النظام'}{' '}
            </NavLink>
          </div>
        </div>
        <div className={style.secondFourth}>
          <div className={style.headsecondsecond}>
            <NavLink to="/dashboard/userdash">
              <FontAwesomeIcon icon={faUserGroup} />
              {!isMobile ? <p> المستخدمين</p> : ''}
            </NavLink>
          </div>
        </div>
        <div className={style.secondFourth}>
          <div className={style.headsecondsecond}>
            <Link>
              <FontAwesomeIcon icon={faReceipt} />
              {!isMobile ? <p> البيانات المعروضة بالموقع</p> : ''}
            </Link>
          </div>
        </div>
        <div className={style.secondFourth}>
          <div className={style.headsecondsecond}>
            <NavLink to="/">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              {!isMobile ? <p> تسجيل الخروج</p> : ''}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
