import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { ROUTES } from '../router/router';

const EntryRouter = () => {
  const {pathname} = useLocation();
  
  if (!localStorage.getItem('user') && pathname !== ROUTES.LOGIN) {
      return <Navigate to={ROUTES.LOGIN}/>;
  }
  return (
    <Outlet/>
  )
}

export default EntryRouter