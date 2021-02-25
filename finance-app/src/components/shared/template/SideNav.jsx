import styled from 'styled-components'

export default styled.aside`
    grid-area: sidenav;
    background-color: #253545;

    @media (max-width: 800px) {
        display: none;
    }


    li {
        a {
            padding: 11px 15px;
        }
    }
`