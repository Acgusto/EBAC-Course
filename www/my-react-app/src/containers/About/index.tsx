import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GitHubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>About Me</Title>
    <Paragraph type="primary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi
      libero dignissimos minima eius officia at temporibus ad tempore
      consequatur error, asperiores reiciendis ratione! Eaque distinctio laborum
      officiis minus molestiae?
    </Paragraph>
    <GitHubSection>
      <img
        src="https://github-readme-stats.vercel.app/api?username=aogosto&show_icons=true&theme=github_dark&include_all_commits=true&count_private=true"
        alt=""
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=aogosto&layout=compact&langs_count=16&theme=github_dark"
        alt=""
      />
    </GitHubSection>
  </section>
)

export default About
