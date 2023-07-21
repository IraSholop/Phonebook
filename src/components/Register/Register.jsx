import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from 'redux/user/operations';
import css from './Register.module.css';


export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(addUser({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
       <div className={css.loginbox}>
      <h2>Register</h2>
      <form onSubmit={formSubmitHandler}>
        <div className={css.userbox}>
          <input type="text" name="name" required="" onChange={handleChange} value={name}/>
          <label>Username</label>
        </div>
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
          Submit
        </button>
      </form>
    </div>
  );
}
