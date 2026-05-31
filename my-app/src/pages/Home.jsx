import { Link } from "react-router-dom";
import profilePicture from "../assets/profile_picture.jpg";

export default function Home() {
  return (
    <>
      <body>
        <header>
          <div id="header_text_container">
            <section id="header_text">
              <h1>
                Tuva Marie Andersen
                <br />
                <em>
                  Nyutdannet <span style={{ color: "#a03e06" }}>designer</span>{" "}
                  og <span style={{ color: "#a03e06" }}>utvikler</span>
                </em>
              </h1>
            </section>
            <img
              src={profilePicture}
              alt="Tuva Marie Andersen portrett bilde"
              id="profile_picture"
            />
            <section id="header_subtext">
              <a
                id="cv_button"
                href="/CV-portefolje-Tuva-Marie-Andersen.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Se CV
              </a>
              <a
                id="contact_button"
                href="mailto:tuva.tma@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mail meg
              </a>
            </section>
          </div>
        </header>
        <main>
          <div id="about_me">
            <section id="about_me_text">
              <h2>Hei!</h2>
              <p>
                Jeg er en 23 år gammel nyutdannet designer og utvikler. Jeg
                trives best i skjæringspunktet mellom design og utvikling, og
                har en stor interesse for både frontend og backend. Jeg brenner
                for å utvikle og forbedre nye og eksisterende digitale produkter
                med fokus på brukerne.
              </p>
              <p>
                Jeg er komfortabel med både frontend- og backend-utvikling, men
                har hovedsakelig hatt fokus på frontend-utvikling og UI/UX
                design det siste året. Jeg ønsker alltid å bygge på kompetansen
                min og møter nye utfordringer med en positiv holdning.
              </p>
            </section>
            <section id="about_me_info">
              <ul id="about_me_info_list">
                <li id="title">Bosted</li>
                <li id="info">Båstad, Indre Østfold, Norge</li>
                <li id="title">Utdanning</li>
                <li id="info">
                  Bachelor i Informatikk: Design og Utvikling av IT-systemer @
                  HIOF
                </li>
                <li id="title">Språk</li>
                <li id="info">Norsk (morsmål), engelsk (flytende)</li>
              </ul>
            </section>
          </div>
          <div id="experience_container">
            <section id="experience">
              <h2>Erfaring og ferdigheter</h2>
              <ul id="experience_list">
                <ul id="design_skills">
                  <li id="skills_header">Design</li>
                  <li id="skills_point">Figma</li>
                  <li id="skills_point">Design Thinking</li>
                  <li id="skills_point">Prototyping</li>
                  <li id="skills_point">Brukertesting</li>
                </ul>
                <ul id="frontend_skills">
                  <li id="skills_header">Frontend</li>
                  <li id="skills_point">React</li>
                  <li id="skills_point">JavaScript</li>
                  <li id="skills_point">Typescript</li>
                </ul>
                <ul id="backend_skills">
                  <li id="skills_header">Backend</li>
                  <li id="skills_point">Python</li>
                  <li id="skills_point">Java</li>
                  <li id="skills_point">SQL</li>
                </ul>
              </ul>
            </section>
          </div>
          <section id="projects">
            <h2>Prosjekter</h2>
            <div className="project-container">
              <article className="project">
                <h2>Food-E</h2>
                <p>
                  Food-E er en matvare app laget for å minske matsvinn på en
                  enkel og billig måte. Vi ønsker å gjøre det lett for folk å ha
                  en bærekraftlig livsstil.
                  <br />
                  Jeg har stått for UI og UX design og implementering.
                </p>
                {/* 
                <p className="project_tags">
                  UI, UX, Prototyping, Universell utforming, Brukertesting, KI
                </p>
                */}
                <Link to="/projects/foode">Les mer her</Link>
              </article>
            </div>
          </section>
        </main>
      </body>
    </>
  );
}
