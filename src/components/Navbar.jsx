import React from 'react';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <h1><img src="../images/logo.svg" alt="" style={{width: "10rem"}}/></h1>
      </Link>
      <nav className='flex items-center gap-5 font-semibold'>
        <Link to='/products'>상품</Link>
        {user && (<Link to='/carts'><CartStatus /></Link>)}
        {user /* && user.isAdmin */ && (
          <Link to='/products/new' className='text-2xl'>
            <BsPencilSquare/>
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'로그인'} onClick={login} />}
        {user && <Button text={'로그아웃'} onClick={logout} />}
      </nav>
    </header>
  );
}
