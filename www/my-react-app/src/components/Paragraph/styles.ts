import styled from 'styled-components'

import { type Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.type === 'primary'
      ? props.theme.colorPrimary
      : props.theme.colorSecondary};
  line-height: 22px;
`
