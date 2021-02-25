import styled from 'styled-components'

export default styled.ul`
    list-style: none;
    padding: 0;

    li {
        a {
            display: block;
            text-decoration: none;
            color: #b4bcc8;
        }
    }

    li:hover {
        background-color: #2eb7e5;
        a {
            color: #fff;
        }
    }
`