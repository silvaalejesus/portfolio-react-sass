import Avatar from "../img/ale.jpg"
import "../styles/components/sidebar.sass"
import InformationContainer from "./InformationContainer"
import SocialNetworks from "./SocialNetworks"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="eu" />
      <p className="title">Desenvolvedora Front-end</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn">
        download do curriculo
      </a>
    </aside>
  )
}

export default Sidebar