import { Route, Routes } from 'react-router-dom';
import { Register } from './Register/Register';
import { HomePage } from './HomePage/HomePage';
import { Login } from './Login/Login';
import { Contacts } from './Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from 'redux/user/operations';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

export function App() {
 const dispatch = useDispatch();
 const isRefreshing = useSelector(state => state.user.isRefreshing);

 useEffect(()=>{
  dispatch(currentUser())
 },[dispatch])

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage />} />
      <Route path='/register'element={
        <RestrictedRoute redirectTo='/contacts' component={<Register/>}/>
      } />
      <Route path='/login' element={
        <RestrictedRoute redirectTo='/contacts' component={<Login/>}/>
      } />
      <Route  path='/contacts' element={
        <PrivateRoute redirectTo="/login" component={<Contacts/>}/>
      }/>
      </Route>
    </Routes>
  );
}
