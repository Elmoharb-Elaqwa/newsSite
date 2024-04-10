import { React, useContext, useState } from 'react';
import style from '../RegisterUser/RegisterUser.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { ContextUser } from '../../context/Context';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function UpdatedPassword() {
  let { id } = useParams();
  const [password, setUserPassword] = useState('');
  const navigate = useNavigate();
  console.log(password);

  const updatePass = async (e) => {
    e.preventDefault();
    await axios
      .patch(`http://localhost:4500/users/success/${id}`, {
        password: password,
      })
      .then((data) => {
        console.log(data);
        alert('userupdate');
        navigate('/');
      })
      .catch((error) => {
        alert(error);
      });
  };
  console.log(id);
  return (
    <div className={style.RegisterUser}>
      <form
        className={style.formsSuccessRegister}
        onSubmit={(e) => updatePass(e)}
      >
        <div className={style.informSuccess}>
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: 'green', fontSize: '40px', marginBottom: '20px' }}
          />

          <input
            type="text"
            name="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button type="submit"> submit</button>
        </div>
      </form>
    </div>
  );
}
