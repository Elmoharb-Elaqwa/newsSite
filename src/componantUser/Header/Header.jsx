import {React,useContext} from 'react';
import image1 from '../../assests/photo_2024-04-03_23-07-55.jpg';
import './Header.css';
import { useUser,ContextUser } from '../../context/Context';
import EnterInformUser from '../EnterInformUser/EnterInformUser';
import SuccessAddInform from '../SuccessAddInform/SuccessAddInform';
import FaildAddInform from '../FaildAddForm/FaildAddForm';
export default function Header() {
  const {openAuth, setOpenAuth}= useContext(ContextUser)

  // const { openInform, openAuth,openFaild } = useUser();
  return (
    <>
      <div className="header-container overflow-hidden perantHeader">
        <div className=" perantparhead">
          <p className=" perantpar">
            أهلا بك في موقعنا الرسمي ، حيث ستجد هنا كل ما تريد معرفته عن سوريا
            بداية من آخر الأخبار والتغطية المستمرة ، كما نحرص جاهدين أن يكون
            موقعنا بمثابة ملف توثيق لكل الأحداث والجرائم التي حدثت ولا زالت تحدث
            ويتم حذفها من وسائل التواصل والمنصات المختلفة ..
            <br />
            نحن لتوثيق الحدث ، كن شريكا معنا وسجل الآن لتحصل على ميزة التوثيق
          </p>
          <button className="head-btn" onClick={()=>setOpenAuth('enterinform')}>
            أدخل بيانات{' '}
          </button>
          
        </div>
        
        <button className="head-btn" onClick={()=>setOpenAuth('faild')}>
             فشل{' '}
          </button>
        <img src={image1} alt="mainpicture" className="head-img" />
      </div>
      {openAuth === 'enterinform' && <EnterInformUser />}
      {openAuth === 'successaddinform' && <SuccessAddInform />}
      {openAuth === 'faild' && <FaildAddInform />}
      
    </>
  );
}
