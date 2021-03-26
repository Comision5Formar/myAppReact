import React from 'react'

function Action(props) {
    return (
        <li className="nav-item">
            <a className="nav-link collapsed" href="/">
                <i className={`fas fa-fw ${props.icon}`}></i>
                <span>{props.item}</span>
            </a>
        </li>
    )
}

export default Action
