import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'
import { useAppSelector} from "../../redux/hooks";

export const Navbar = () => {
    const id = useAppSelector(state => state.authentication.id)
    return (
        <div>
            <div>
                <NavLink className={NavLink => NavLink.isActive
                    ? s.active
                    : s.item}
                         to={'/profile/' + id}>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink className={NavLink => NavLink.isActive
                    ? s.active
                    : s.item}
                         to='/dialogs'>Messages</NavLink>
            </div>
            <div>
                <NavLink className={NavLink => NavLink.isActive ? s.active : s.item} to='/news'>News</NavLink>
            </div>
            <div>
                <NavLink className={NavLink => NavLink.isActive ? s.active : s.item} to='/music'>Music</NavLink>
            </div>
            <div>
                <NavLink className={NavLink => NavLink.isActive ? s.active : s.item} to='/settings'>Settings</NavLink>
            </div>
            <div>
                <NavLink className={NavLink => NavLink.isActive ? s.active : s.item} to='/users'>Users</NavLink>
            </div>
        </div>
    );
};

export default Navbar;