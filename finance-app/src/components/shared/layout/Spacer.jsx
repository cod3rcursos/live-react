import styled from 'styled-components'

export default styled.span`
    display: inline-block;
    ${(props) => props.x && `width: ${props.x}px;`}
    ${(props) => props.y && `height: ${props.y}px;`}
`
