import { DiReact, DiMysql, DiJsBadge, DiAngularSimple, DiNodejsSmall, DiHtml5, DiCss3 } from "react-icons/di"
import { BiLogoTypescript } from "react-icons/bi"
import "../styles/components/technologies.sass"

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "angular", name: "Angular", icon: <DiAngularSimple /> },
  { id: "typescript", name: "Typescript", icon: <BiLogoTypescript /> },
];

const Technologies = () => {
  return (
    <section className="technologies">
      <h2>Skills</h2>
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div className="tech-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tech-info">
              <h3>{tech.name}</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies