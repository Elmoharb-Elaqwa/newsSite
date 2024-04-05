import React from 'react';
import Liberated from '../SectionsUser/Liberated/Liberated';
import FlagsUser from '../SectionsUser/FlagsUser/FlagsUser';
import RegimeMassacres from '../SectionsUser/RegimeMassacres/RegimeMassacresUser';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <>
      <div className="container">
        <div className="header position-relative py-5">
          <h3 className=" text-danger"> آخر الأخبار </h3>
        </div>
      </div>
      <RegimeMassacres />
      <Liberated />
      <div className="container">
        <Link className=" nav-link d-inline-block" to={'/newsDetails'}>
          <FlagsUser />
        </Link>
      </div>
    </>
  );
}
