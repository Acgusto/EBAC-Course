import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.colorBorderCard};
  padding: 16px;
`

export const LinkButton = styled.a`
  color: ${(props) => props.theme.colorBackground};
  font-size: 14px;
  background-color: ${(props) => props.theme.colorBackgroundButton};
  text-decoration: none;
  cursor: pointer;
  padding: 8px;
  display: inline-block;
  margin: 24px 0 0 0;
`
