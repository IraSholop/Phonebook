import { useDispatch, useSelector } from 'react-redux'
import { logOut } from 'redux/user/operations';
import css from './UserMenu.module.css'

export function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(state => state.user.user.name)
   return(
    <>
    <div className={css.header}>
        {name}
        <button type='button' onClick={()=>dispatch(logOut())} className={css.btn}>LogOut</button>
    </div>
    </>
   )
}