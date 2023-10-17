
import React, { useEffect, useState } from 'react';

const Page3 = () => {


    const [userData, setUserData] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }

        const storedPhoneNumber = localStorage.getItem('phoneNumber');
        if (storedPhoneNumber) {
          setPhoneNumber(storedPhoneNumber);
        }

      }, []);

    return (
      <div>
       <h1>Result</h1>

       {userData && (
        <div>
          <h2>User Data</h2>
          <p>Name: {userData.name}</p>
          <p>Birthday: {userData.day}/{userData.month}/{userData.year}</p>
          <p>Email: {userData.email}</p>
          {phoneNumber && (
        <div>
          <p>Phone Number: +60{phoneNumber}</p>
        </div>
      )}
        </div>
      )}

      </div>
    );
  };
  
  export default Page3;