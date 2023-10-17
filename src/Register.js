import React, { useEffect, useState,useRef } from 'react';
import { Link } from 'react-router-dom';

const Register=()=>{

    const user_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [mail, setMail] = useState(''); 
    const [validMail, setValidMail]= useState(false);
    const [validName, setValidName] = useState(false); 
    
    
    useEffect(() => {
        setValidMail(user_regex.test(mail));
    }, [mail])


    const [formData, setFormData] = useState({
        name: '',
        day: '',
        month: '',
        year: '',
        email: '',
        
      });


      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name: formData.name,
            day: formData.day,
            month: formData.month,
            year: formData.year,
            email: mail,
          };
          localStorage.setItem('userData', JSON.stringify(userData));
        console.log('Form submitted:', formData);
      };



    

   
    useEffect(() => {
        setValidName(user_regex.test(mail));
    }, [mail])


   

    return (
        <div className="regsiter">
            <h2>MULAH</h2>
            <h1>Registration</h1>
     
            <h5><i>Please fill up your details.</i></h5>
    
            <form onSubmit={handleSubmit}>
        <div className='box'>
          <label htmlFor="name"
           className='name'>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
          {!validName && !formData.name && <p style={{ color: 'red' }}><i>*Please insert a name.</i></p>}
        </div>


        <h3>Birthday</h3>
        <div className='birthday'>
        <div className="birthday-dropdown">
          <label htmlFor="day"></label>
          <select
            id="day"
            name="day"
            value={formData.day}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>DD</option>
            {[...Array(31)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        

        <div className="birthday-dropdown">
          <label htmlFor="month"></label>
          <select
            id="month"
            name="month"
            value={formData.month}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>MM</option>
            {[
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ].map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>


        <div className="birthday-dropdown">
          <label htmlFor="year"></label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>YYYY</option>
            {[...Array(100)].map((_, index) => (
              <option key={index} value={2023 - index}>
                {2023 - index}
              </option>
            ))}
          </select>
        </div>

        </div>

        <div className='box'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
          {!validMail && <p style={{ color: 'red' }}><i>*Please insert a valid email.</i></p>}
        </div>
        <Link to='/page3'>
            <button type="submit">Continue</button>
        </Link>
      </form>

            <footer>
                <div>
                Powered by <a href="https://www.mulahrewards.com/" target="_blank"> MulahRewards.com</a>
                </div>
            </footer>
            
        </div>
        )
}
export default Register;