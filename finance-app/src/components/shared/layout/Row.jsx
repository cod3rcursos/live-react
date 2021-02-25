import styled from 'styled-components'

export default styled.div`
    display: flex;
    ${(props) => props.x && `flex-basis: ${props.x};`}
    ${(props) => props.wrap && 'flex-wrap: wrap;'}
    ${(props) => (props.ycenter || props.center) && 'align-items: center;'}
    ${(props) => (props.xcenter || props.center) && 'justify-content: center;'}
    ${(props) => props.xright && 'justify-content: flex-end;'}
`
