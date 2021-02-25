import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuItemContent = styled.div`
    flex: 1;
    display: flex;
`

const MenuItemIcon = styled.div`
    display: flex;
    flex-basis: 30px;
    justify-content: center;
    align-items: center;
`

const MenuItemLabel = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
`

const MenuItem = (props) => {
    return (
        <li>
            <Link to={props.to}>
                <MenuItemContent>
                    <MenuItemIcon>
                        <i className={`fa fa-${props.icon}`}></i>
                    </MenuItemIcon>
                    <MenuItemLabel>{props.label}</MenuItemLabel>
                </MenuItemContent>
            </Link>
        </li>
    )
}

export default MenuItem
