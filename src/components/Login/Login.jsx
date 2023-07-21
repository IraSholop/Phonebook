import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/user/operations';
import css from './Login.module.css';


export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();


  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.loginbox}>
      <h2>LogIn</h2>
      <form onSubmit={formSubmitHandler}>
        <div className={css.userbox}>
          <input type="email" name="email" required="" onChange={handleChange} value={email}/>
          <label>Email</label>
        </div>
        <div className={css.userbox}>
          <input type="password" name="password" required="" onChange={handleChange} value={password}/>
          <label>Password</label>
        </div>
        <button type='submit'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </button>
      </form>
    </div>
  );
}
