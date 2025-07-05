import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin: 24px 0 40px 0;
`
export const ThemeButton = styled.button`
  color: ${(props) => props.theme.colorBackground};
  background-color: ${(props) => props.theme.colorPrimary};
  border-radius: 12px;
  padding: 8px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  border: none;
`

export const AsideContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin: 0 0 40px 0;
    text-align: center;
  }
`
