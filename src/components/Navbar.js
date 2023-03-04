import React, { useState } from 'react'
import './style.css'
import { FiMenu } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
    const [menu, setMenu] = useState('show')
    console.log(menu)
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container">
                    <div className='logo'>Logo</div>
                    {
                        menu === 'hide' ? (
                            <div className={menu == 'show' ? 'nav-items' : 'hide-items'}>
                                <li className="nav-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href='#'>About</a>
                                </li>
                                <li className="nav-item">
                                    <a href='#'>Service</a>
                                </li>
                            </div>
                        ) : (
                            <div className='item-show'>
                            <div className='nav-items'>
                                <li className="nav-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href='#'>About</a>
                                </li>
                                <li className="nav-item">
                                    <a href='#'>Service</a>
                                </li>
                            </div>
                            </div>
                        )
                    }

                    {
                        menu === 'show' ? (
                            <div onClick={() => setMenu('hide')} className={menu}>
                                <FiMenu size={40} />
                            </div>
                        ) : (
                            <div onClick={() => setMenu('show')} className={menu}>
                                <ImCross size={40} />
                            </div>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar