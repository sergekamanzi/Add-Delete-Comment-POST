import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Creating elements dynamically using JavaScript
    const mainDiv = document.createElement('div');
    mainDiv.className = 'main-register';

    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';
    
    const logoLink = document.createElement('a');
    logoLink.href = '/';
    
    const logoTitle = document.createElement('h2');
    logoTitle.innerHTML = 'Blog <span>App.</span>';
    
    logoLink.appendChild(logoTitle);
    logoDiv.appendChild(logoLink);

    const registerContentDiv = document.createElement('div');
    registerContentDiv.className = 'register-content';

    const heading = document.createElement('h1');
    heading.textContent = 'Log-in Here';

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Email';

    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Password';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';

    const loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    loginButton.onclick = () => {
      navigate('/post');
    };

    const registerParagraph = document.createElement('p');
    registerParagraph.textContent = "Don't have an account? ";

    const registerLink = document.createElement('a');
    registerLink.href = '/register';
    registerLink.textContent = 'Register';

    registerParagraph.appendChild(registerLink);

    // Appending all elements to the register content
    registerContentDiv.appendChild(heading);
    registerContentDiv.appendChild(emailLabel);
    registerContentDiv.appendChild(emailInput);
    registerContentDiv.appendChild(passwordLabel);
    registerContentDiv.appendChild(passwordInput);
    registerContentDiv.appendChild(loginButton);
    registerContentDiv.appendChild(registerParagraph);

    // Appending everything to the main div
    mainDiv.appendChild(logoDiv);
    mainDiv.appendChild(registerContentDiv);

    // Appending the main div to the root element
    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = ''; // Clear existing content
      root.appendChild(mainDiv);
    }
  }, [navigate]);

  return null;
};

export default Register;
