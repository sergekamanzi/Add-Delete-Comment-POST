import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  useEffect(() => {
    // Create the main div container
    const mainRegister = document.createElement('div');
    mainRegister.classList.add('main-register');

    // Create the logo div
    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');
    const logoLink = document.createElement('a');
    logoLink.href = '/';
    const logoTitle = document.createElement('h2');
    logoTitle.innerHTML = 'Blog <span>App.</span>';
    logoLink.appendChild(logoTitle);
    logoDiv.appendChild(logoLink);
    mainRegister.appendChild(logoDiv);

    // Create the register content container
    const registerContent = document.createElement('div');
    registerContent.classList.add('register-content');
    
    // Create and add the title
    const title = document.createElement('h1');
    title.textContent = 'Create an Account Here';
    registerContent.appendChild(title);

    // Create full names label and input
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'FullNames';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Name');
    registerContent.appendChild(nameLabel);
    registerContent.appendChild(nameInput);

    // Create email label and input
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'Email');
    registerContent.appendChild(emailLabel);
    registerContent.appendChild(emailInput);

    // Create password label and input
    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Password';
    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('placeholder', 'Password');
    registerContent.appendChild(passwordLabel);
    registerContent.appendChild(passwordInput);

    // Create confirm password label and input
    const confirmPasswordLabel = document.createElement('label');
    confirmPasswordLabel.textContent = 'Confirm Password';
    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.setAttribute('type', 'password');
    confirmPasswordInput.setAttribute('placeholder', 'Confirm Password');
    registerContent.appendChild(confirmPasswordLabel);
    registerContent.appendChild(confirmPasswordInput);

    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Create an Account';
    registerContent.appendChild(submitButton);

    // Create login prompt
    const loginPrompt = document.createElement('p');
    loginPrompt.textContent = 'Already have an account? ';
    const loginLink = document.createElement('a');
    loginLink.href = '/login';
    loginLink.textContent = 'Login';
    loginPrompt.appendChild(loginLink);
    registerContent.appendChild(loginPrompt);

    // Append everything to the main register container
    mainRegister.appendChild(registerContent);

    // Add the created content to the body or a specific element in the DOM
    document.body.appendChild(mainRegister);

    // Cleanup the content on component unmount
    return () => {
      document.body.removeChild(mainRegister);
    };
  }, []);

  return null;
};

export default Register;
