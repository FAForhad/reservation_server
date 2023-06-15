import React from 'react';
import './Registration.css'
const Registration = () => {
    return (
        <div className=' bg-[url(/src/assets/login.jpg)] bg-cover bg-center bg-no-repeat min-h-screen'>
            <h1>Registration Form</h1>
            <form className='form'>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required />
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{11}" required />
                <label for="food">Which type of food do you like to have the most?</label>
                <select id="gen" name="gender" required>
                    <option value="">Select Food type</option>
                    <option value="male">Grameen</option>
                    <option value="female">Indian</option>
                    <option value="other">Thai</option>
                    <option value="other">Chineese</option>
                    <option value="other">Korean</option>
                    <option value="other">Italian</option>
                    <option value="other">Continental</option>
                </select>
                <input type="submit" value="Register" />
                <p class="already">Already Registered? <a href="login.html">Login</a></p>
            </form>
        </div>
    );
};

export default Registration;