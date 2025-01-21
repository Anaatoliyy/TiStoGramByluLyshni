import React from 'react'
import {Outlet} from 'react-router-dom';

const BaseLayout = () => {
  return (
    <main>
        <header>Home</header>
        <Outlet/>
        <nav>
asdasd
        </nav>
    </main>
  )
}

export default BaseLayout