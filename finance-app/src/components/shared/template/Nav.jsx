import React from 'react'
import Menu from './Menu'
import MenuItem from './MenuItem'

const Nav = (props) => {
    return (
        <nav>
            <Menu>
                <MenuItem to="/" label="Dashboard" icon="home" />
                <MenuItem to="/finances" label="Minhas Finanças"
                    icon="usd" />
            </Menu>
        </nav>
    )
}

export default Nav
