
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const Home = () => {

    const num_regex = /^[0-9]+$/;
    const allowedPhoneNumber = 173527250;

    const [num,setNum]=useState('');
    const [isValid, setIsValid] = useState(true);
    const [iconValid, setIconValid] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const url = num_regex.test(num) && num === allowedPhoneNumber ? '#' : '/register';

    useEffect(() => {
        if (num_regex.test(num)) {
          setIsValid(true);
          setErrMsg('');
        } else {
          setIsValid(false);
          setErrMsg('Invalid input. Please enter numeric characters only.');
        }
      }, [num]);


      const handleInputChange = (event) => {
        setNum(event.target.value);
        
      };

      const handleButtonClick = () => {
        
          localStorage.setItem('phoneNumber', num.toString());
          console.log(num.toString());
        
      };
    

   
    return (
    <div className="home">
        <h2>MULAH</h2>
        <h1>Hello,</h1>
        <h1>Welcome !</h1>
        
        <h4>Check Your Loyatly Points & Rewards</h4>

        <div className='phone'>
        
        <div id='country'>
            <form>
            
                <select id="phoneNumbers" name="phoneNumber">
                 <option value="60">60+</option>
                </select>
        </form>
        </div>

            
            <input
            className='phoneNum'
            type="text"
            value={num}
            onChange={handleInputChange}
            placeholder='Enter your mobile number'
      />
            <FontAwesomeIcon icon={faCircleCheck} className={isValid ? "valid" : "invalid"}/>
            
        </div>


        <div className='buttonbox'>
        
        <Link to='/register'>
                 <button onClick={handleButtonClick}>Check Loyalty Points</button>
             </Link>
      
        </div>
        

        <footer>
            <div>
            Powered by <a href="https://www.mulahrewards.com/" target="_blank"> MulahRewards.com</a>
            </div>
        </footer>
        
    </div>
    )
}

export default Home;
