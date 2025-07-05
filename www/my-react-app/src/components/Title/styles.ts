import styled from 'styled-components'

import { type Props } from '.'

export const Title = styled.h3<Props>`
  margin: 0 0 16px 0;
  color: ${(props) => props.theme.colorPrimary};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
`
