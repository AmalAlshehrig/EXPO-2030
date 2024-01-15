import React from 'react'
import { useState,useEffect } from 'react'
import Popup from 'reactjs-popup';
import '../App.css'
function NavBar() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [countries, setCountries] = useState([
    { id: 1, name: 'Saudi Arabia', regions: ['Abha', 'Dammam', 'Khobar', 'Medina','Mecca','Riyadh','Tabuk'] },
    { id: 2, name: 'Turkey', regions: ['Istanbul', 'Ankara','İzmir','Bursa','Adana'] },
    { id: 3, name:'Arab Emirates', regions:['Dubai','Abu Dhabi','Al Ain','Ajman','Ras AlKhaimah']}
  ]);
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');
    if (storedLoginStatus) {
      setLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);
  const handleLogin = (name, password) => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (storedUsername === name && storedPassword === password) {
      setLoggedIn(true);
      setUsername(storedUsername);
      localStorage.setItem('isLoggedIn', 'true');
    } 
    else {
      alert('Invalid username or password');
    }
  };
  
 const handleSignup = (name, password, email) => {
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('username', name);
  localStorage.setItem('password', password);
  localStorage.setItem('email', email);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (name === "" || password === "" || email === "") {
    alert("Your information is empty");
  }else if(name.length < 4){
    alert("Name must be less than 5 characters")
  }else if(!emailRegex.test(email)){
    alert("Email is not true")
  }else if(!passwordRegex.test(password)&& password.length < 6){
    alert("Password is not true")
  }
   else {
    setIsSignup(false);
    openSignupPopup();
    switchToSignup();
  }
};
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    setPopupOpen(false);
    setShowLogoutButton(false);
  };
  const switchToSignup = () => {
    setIsSignup(true);
  };
  const openSignupPopup = () => {
    document.getElementById('signup-popup-trigger').click();
  };
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const handleIconClick = () => {
    setPopupOpen(true);
    setShowLogoutButton(true);
  };
  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    setRegion('');
  };
  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
    setMaritalStatus('');
  };

  const handleMaritalStatusChange = (selectedMaritalStatus) => {
    setMaritalStatus(selectedMaritalStatus);
  };

  const handleAgeGroupChange = (selectedAgeGroup) => {
    setAgeGroup(selectedAgeGroup);
  };

  const handleSubmit = () => {
    return({
      username,
      email,
      password,
      country,
      region,
      gender,
      maritalStatus,
      ageGroup,
    });
  };

  return (
    <div className='flex justify-between p-4'>
        {/* <img src="https://riyadhexpo2030.sa/wp-content/uploads/2023/02/Riyadh_Expo_2030-Logo-Colored@2x-1.webp" className='w-20'/> */}
      <div className="p-2">
        {!isLoggedIn ? (
          <>
            <Popup trigger={<button data-text="Awesome" class="buttonpma">
    <span class="actual-text">&nbsp;New Account&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;New Account &nbsp;</span>
</button>} modal nested>
              {(close) => (
                <div className="bg-slate-100/75 flex flex-col items-center p-4 space-y-4 rounded-md">
                  <input placeholder="Name" className="border text-center rounded-md" id="login-name"/>
                  <input placeholder="Email" className="border text-center rounded-md" id="login-email"/>
                  <input placeholder="Password" className="border text-center rounded-md" type="password" id="login-password"/>
                  <label>Age</label>
      <select value={ageGroup} onChange={(e) => handleAgeGroupChange(e.target.value)}>
        <option value="Less then 18 year">Less then 18 year</option>
        <option value="18-40 year">18-40 year</option>
        <option value="More then 40 year">More then 40 year</option>
      </select>
      {gender && (
        <>
          <label>Status</label>
          <select value={maritalStatus} onChange={(e) => handleMaritalStatusChange(e.target.value)}>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </>
      )}
      <label>Gender</label>
      <select value={gender} onChange={(e) => handleGenderChange(e.target.value)}>
        <option value="male">male</option>
        <option value="female">Female</option>
      </select>
      <label>Country</label>
      <select value={country} onChange={(e) => handleCountryChange(e.target.value)}>
        {countries.map((c) => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      {country && (
        <>
          <label>City</label>
          <select value={region} onChange={(e) => setRegion(e.target.value)}>
            {countries
              .find((c) => c.name === country)
              ?.regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
          </select>
        </>
      )}
                  <br />
                  <div className="border text-center rounded-full px-8 border-cyan-950">
                    <button
                      onClick={() => {
                        const name = document.getElementById('login-name').value;
                        const password = document.getElementById('login-password').value;
                        const email =document.getElementById('login-email').value
                        handleSignup(name, password,email);
                        close();
                      }}
                    >
                      LogIn
                    </button>
                  </div>
                </div>
              )}
            </Popup>
            {/* End SingUp */}
            {/* <Popup trigger={<button id="signup-popup-trigger" className="text-sm text-center px-8" onClick={() => switchToSignup()}>LogIn</button>} modal nested>
              {(close) => (
                <div className="bg-slate-100/75 flex flex-col items-center p-8 space-y-4 rounded-md">
                  <input placeholder="Name" className="border text-center rounded-md" id='signup-name'/>
                  <input placeholder="Password" className="border text-center rounded-md" type="password" id='signup-password'/>
                  <br />
                  <div className="border text-center rounded-full px-8 border-cyan-950">
                    <button
                      onClick={() => {
                        const name = document.getElementById('signup-name').value;
                        const password = document.getElementById('signup-password').value;
                        handleLogin(name, password);
                        close();
                      }}
                    >
                      Registration
                    </button>
                  </div>
                </div>
              )}
            </Popup> */}
          </>
        ) : (
         <>
         {/* <button className="text-center px-8 text-sm w-20" onClick={handleIconClick}>
        <p>{"Welcom"+localStorage.getItem('username')}</p>
      </button> */}
      <div className='w-20 h-10'>
      <button data-text="Awesome" class="buttonpma" onClick={handleIconClick}>
    <span class="actual-text">&nbsp;{"Welcom "+localStorage.getItem('username')}&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;{"Welcom "+localStorage.getItem('username')}&nbsp;</span>
</button>
</div>
      <Popup trigger={<button id="signup-popup-trigger" className="text-sm text-center px-8 " onClick={handleLogout}></button>} modal nested open={isPopupOpen}>
        <div className='bg-slate-100/75 flex flex-col items-center p-8 space-y-4 rounded-md'>
          <p>{"Welcom : "+localStorage.getItem('username')}</p>
          <p>{"Email : "+localStorage.getItem('email')}</p>
          <p>{`Age: ${ageGroup}`}</p>
          <p>{`country: ${country}`}</p>
          <p>{`region: ${region}`}</p>
          <p>{`gender: ${gender}`}</p>
          <p>{`maritalStatus: ${maritalStatus}`}</p>
          {showLogoutButton && (
            <button className="text-sm border text-center rounded-full px-8 border-cyan-950" onClick={handleLogout}>LogOut</button>
          )}
        </div>
      </Popup>
         </>
        )}
      </div>
    </div>
    )}
export default NavBar