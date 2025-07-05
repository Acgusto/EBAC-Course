import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ThemeButton, AsideContainer } from './styles'

type Props = {
  switchTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <AsideContainer>
      <Avatar></Avatar>
      <Title fontSize={20}>Aogosto</Title>
      <Paragraph type="secondary" fontSize={16}>
        aogosto
      </Paragraph>
      <Description type="primary" fontSize={12}>
        Frontend Engineer
      </Description>
      <ThemeButton onClick={props.switchTheme}>Switch Theme</ThemeButton>
    </AsideContainer>
  </aside>
)

export default Sidebar
