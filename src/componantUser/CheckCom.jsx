import React, { useEffect, useState } from 'react';
import axios from 'axios';
const CheckCom = () => {
  const [usersData, setUsersData] = useState([]);
  const getAllUsers = async () => {
    await axios
      .get('http://localhost:4500/users/')
      .then((data) => {
        setUsersData(data.data.data);
        console.log(data.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      {usersData.map((user) => {
        return (
          <img
            src={`https://syrianrevolution1.com/images/${user.selfImg}`}
            alt="JLK"
          />
        );
      })}
    </div>
  );
};

export default CheckCom;
