import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import isEmpty from 'validator/lib/isEmpty';

import { login } from '../api/auth';
import { showErrorMessage } from '../utilities/messages';
import { showLoadingButton } from '../utilities/loading';
import { setAuthentication, isAuthenticated } from '../utilities/auth';

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      history.push('/admin/dashboard');
    } else if (isAuthenticated() && isAuthenticated().role === 0) {
      history.push('/user/dashboard');
    }
  }, [history]);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    errorMessage: false,
    loading: false,
  });

  const { username, password, errorMessage, loading } = formData;

  // EVENT HANDLERS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, errorMessage: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(username) || isEmpty(password)) {
      setFormData({ ...formData, errorMessage: 'Sva polja moraju biti popunjena!' });
    } else {
      setFormData({ ...formData, loading: true });

      login(formData)
        .then((response) => {
          setAuthentication(response.data.token, response.data.user);

          if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin/dashboard');
          } else {
            history.push('/user/dashboard');
          }
        })
        .catch((error) => {
          setFormData({ ...formData, errorMessage: error.response.data.errorMessage });
        });
    }
  };

  // VIEWS
  const showLoginForm = () => (
    <form className='login-form mt-2' autoComplete='off' noValidate onSubmit={handleSubmit}>
      <h3 className='text-center my-4'>Prijava korisnika</h3>
      {errorMessage && showErrorMessage(errorMessage)}
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
      {/* button */}
      <div className='form-gorup my-4'>
        {loading ? (
          showLoadingButton()
        ) : (
          <button type='submit' className='btn btn-primary btn-block w-100'>
            Prijavi se
          </button>
        )}
      </div>
      <p className='text-center text-black'>
        Nemaš nalog? <Link to='/register'>Registruj se</Link>
      </p>
    </form>
  );

  // RENDER
  return (
    <div className='login-container'>
      <div className='row px-3 vw-100'>
        <div className='col-md-5 mx-auto align-self-center'>{showLoginForm()}</div>
      </div>
    </div>
  );
};

export default Login;
