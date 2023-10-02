import '../styles/components/socialNetworks.sass'
import { SlSocialLinkedin, SlSocialGithub, SlSocialInstagram } from 'react-icons/sl'

const socialNetworks = [
  { name: 'linkedin', icon: <SlSocialLinkedin /> },
  { name: 'github', icon: <SlSocialGithub /> },
  { name: 'instagram', icon: <SlSocialInstagram /> }
]
const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href="#" className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks