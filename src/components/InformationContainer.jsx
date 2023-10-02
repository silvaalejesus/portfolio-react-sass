import '../styles/components/informationContainer.sass'
import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment } from 'react-icons/ai'

const InformationContainer = () => {
  return (
    <section id="information-container">
      <div className="info-card">
        <AiOutlinePhone id='phone-icon' />
        <div>
          <h3>Telefone</h3>
          <p>(48) 99999-9999</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id='email-icon' />
        <div>
          <h3>E-mail</h3>
          <p>silvaalejesus@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineEnvironment id='pin-icon' />
        <div>
          <h3>Localização</h3>
          <p>Salvador / Ba</p>
        </div>
      </div>

    </section>
  )
}

export default InformationContainer