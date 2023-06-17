import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import './Registration.css'
const Registration = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        gender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        const formUser = { ...formData };

        console.log(formUser);

        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: '',
            gender: ''
        });
        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formUser),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged === true) {
                    toast.success("Account created", {
                        style: {
                            border: "1px solid #713200",
                            padding: "16px",
                            color: "#713200",
                        },
                        iconTheme: {
                            primary: "#713200",
                            secondary: "#FFFAEE",
                        },
                    });
                }
                console.log(data)
            })
            .catch((error) => console.error(error));
    };


    return (
        <div className=' bg-[url(/src/assets/login.jpg)] bg-cover bg-center bg-no-repeat min-h-screen'>
            <h1>Registration Form</h1>
            <form className='form' onSubmit={handleSubmit}>
                <label for="username">Username</label>
                <input id="username"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange} required />
                <label for="email">Email</label>
                <input id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange} required />
                <label for="password">Password</label>
                <input id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange} required />
                <label for="confirm-password">Confirm Password</label>
                <input id="confirm-password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange} required />
                <label for="phone">Phone Number</label>
                <input id="phone"
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange} required />
                <label for="food">Which type of food do you like to have the most?</label>
                <select id="gen"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required>
                    <option value="">Select Food type</option>
                    <option value="male">Grameen</option>
                    <option value="female">Indian</option>
                    <option value="other">Thai</option>
                    <option value="other">Chineese</option>
                    <option value="other">Korean</option>
                    <option value="other">Italian</option>
                    <option value="other">Continental</option>
                </select>
                <button type="submit" className='text-yellow-500 px-4 border border-yellow-500 mx-4 hover:bg-yellow-500 hover:text-black'> Register</button>
                <p class="already">Already Registered? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default Registration;