import React from 'react'
import {Outlet} from 'react-router-dom';

const BaseLayout = () => {
  return (
    <main>
        <header></header>
        <Outlet/>
        <nav>

        </nav>
    </main>
  )
}

export default BaseLayout