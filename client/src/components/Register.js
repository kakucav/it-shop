import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import isMobilePhone from 'validator/lib/isMobilePhone';
import equals from 'validator/lib/equals';

import { showErrorMessage, showSuccessMessage } from '../utilities/messages';
import { showLoadingButton } from '../utilities/loading';
import { register } from '../api/auth';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    name: '',
    city: '',
    street: '',
    phone: '',
    successMessage: false,
    errorMessage: false,
    loading: false,
  });

  const { username, email, password, password2, name, city, street, phone, successMessage, errorMessage, loading } =
    formData;

  // EVENT HANDLERS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      errorMessage: false,
      successMessage: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(password2) ||
      isEmpty(name) ||
      isEmpty(city) ||
      isEmpty(street) ||
      isEmpty(phone)
    ) {
      setFormData({
        ...formData,
        errorMessage: 'Sva polja moraju biti popunjena!',
      });
    } else if (!isEmail(email)) {
      setFormData({ ...formData, errorMessage: 'Email adresa nije validna!' });
    } else if (!equals(password, password2)) {
      setFormData({ ...formData, errorMessage: 'Lozinke se ne podudaraju!' });
    } else if (!isMobilePhone(phone)) {
      setFormData({ ...formData, errorMessage: 'Broj telefona nije validan!' });
    } else {
      const data = {
        username,
        email,
        password,
        address: { city, street, name, phone },
      };
      setFormData({
        ...formData,
        loading: true,
      });

      register(data)
        .then((response) => {
          setFormData({
            username: '',
            email: '',
            password: '',
            password2: '',
            name: '',
            city: '',
            street: '',
            phone: '',
            errorMessage: false,
            successMessage: response.data.successMessage,
            loading: false,
          });
        })
        .catch((error) => {
          setFormData({
            ...formData,
            errorMessage: error.response.data.errorMessage,
            loading: false,
          });
        });
    }
  };

  // VIEWS
  const showRegisterForm = () => (
    <form className='register-form mt-2' autoComplete='off' noValidate onSubmit={handleSubmit}>
      <h3 className='text-center my-4'>Registracija novog korisnika</h3>
      {errorMessage && showErrorMessage(errorMessage)}
      {successMessage && showSuccessMessage(successMessage)}
      {/* username */}
      <div className='input-group my-4'>
        <span className='input-group-text'>
          <i className='fas fa-user fa-fw'></i>
        </span>
        <input
          name='username'
          className='form-control'
          placeholder='Korisničko ime'
          type='text'
          value={username}
          onChange={handleChange}
        />
      </div>
      {/* email */}
      <div className='input-group my-4'>
        <span className='input-group-text'>
          <i className='fas fa-envelope fa-fw'></i>
        </span>
        <input
          name='email'
          className='form-control'
          placeholder='Email adresa'
          type='email'
          value={email}
          onChange={handleChange}
        />
      </div>
      {/* password */}
      <div className='input-group my-4'>
        <span className='input-group-text'>
          <i className='fas fa-lock fa-fw'></i>
        </span>
        <input
          name='password'
          className='form-control'
          placeholder='Lozinka'
          type='password'
          value={password}
          onChange={handleChange}
        />
      </div>
      {/* confirm password */}
      <div className='input-group my-4'>
        <span className='input-group-text'>
          <i className='fas fa-lock fa-fw'></i>
        </span>
        <input
          name='password2'
          className='form-control'
          placeholder='Potvrdi lozinku'
          type='password'
          value={password2}
          onChange={handleChange}
        />
      </div>
      {/* name */}
      <div className='input-group my-4'>
        <span className='input-group-text'>
          <i className='fas fa-user fa-fw'></i>
        </span>
        <input
          name='name'
          className='form-control'
          placeholder='Ime i prezime'
          type='text'
          value={name}
          onChange={handleChange}
        />
      </div>
      {/* city */}
      <div className='input-group my-4'>
        <span className='input-group-text'>
          <i className='fas fa-city fa-fw'></i>
        </span>
        <input
          name='city'
          className='form-control'
          placeholder='Grad'
          type='text'
          value={city}
          onChange={handleChange}
        />
      </div>
      {/* street */}
      <div className='input-group my-4'>
        <span className='input-group-text'>
          <i className='fas fa-map-marker fa-fw'></i>
        </span>
        <input
          name='street'
          className='form-control'
          placeholder='Ulica'
          type='text'
          value={street}
          onChange={handleChange}
        />
      </div>
      {/* phone */}
      <div className='input-group my-4'>
        <span className='input-group-text'>
          <i className='fas fa-phone fa-fw'></i>
        </span>
        <input
          name='phone'
          className='form-control'
          placeholder='Kontakt telefon'
          type='text'
          value={phone}
          onChange={handleChange}
        />
      </div>
      {/* button */}
      <div className='form-gorup my-4'>
        {loading ? (
          showLoadingButton()
        ) : (
          <button type='submit' className='btn btn-primary btn-block w-100'>
            Kreiraj nalog
          </button>
        )}
      </div>
      <p className='text-center text-black'>
        Registrovan si? <Link to='/login'>Prijavi se</Link>
      </p>
    </form>
  );

  // RENDER
  return (
    <div className='register-container'>
      <div className='row px-3 vw-100'>
        <div className='col-md-5 mx-auto align-self-center'>{showRegisterForm()}</div>
      </div>
    </div>
  );
};

export default Register;
