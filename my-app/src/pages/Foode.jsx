import { Link } from "react-router-dom";

export default function Foode() {
  return (
    <>
      <header>
        <div id="header_text_container">
          <section id="header_text">
            <Link id="link" to="/">
              ← Tilbake til portefølje
            </Link>
            <img id="foode_logo" src="/foode_logo.png" alt="Food-e Logo" />
          </section>
        </div>
      </header>
      <main>
        <p>
          Food-e er en app som hjelper brukere med å finne oppskrifter basert på
          ingrediensene de har tilgjengelig hjemme. Appen bruker
          bildegjenkjenning for å analysere ingrediensene og foreslå oppskrifter
          som kan lages med det brukeren har. Med KI kan man få alternative
          forslag til oppskrifter, i tillegg til videre informasjon om
          tilberedninsmetoder. Jeg har stått for UI og UX design og
          implementering.
        </p>
        <p>
          Food-e startet som et innovativt bachelorprosjekt ved Høgskolen i
          Østfold, som vi gjennomførte gjennom Drivhuset i Østfold. Vi fikk
          stort eierskap til prosjektet gjennom bacheloren, og det var absolutt
          noe vi ville fortsette med etter selve bacheloroppgaven var levert.
          <br />
          Under Expo 2025 vant vi{" "}
          {
            <a
              id="expo_diplom_link"
              href="/expo_diplom_2025.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              NITO prisen
            </a>
          }{" "}
          som var en stor inspirasjon og ga oss et tydeligere inntrykk om at
          produktet vårt har et behov. Vi ønsker å gjøre det lett for folk å ha
          en bærekraftig livsstil, samtidig som middagsplanleggingen blir
          enklere.
        </p>
        <p>
          Jeg har hatt ansvar for UI og UX design, og har implementert appen i
          React Native. Jeg hadde tidligere kun erfaring med React og
          mobilutvikling gjennom Android Studio, men det var en gøy utfordring å
          lære seg React Native fortløpende under prosjektet. Jeg har lagd
          low-fidelity wireframes i startfasen av prosjektet, hvor vi valgte ut
          et par design vi likte best. Etter runder med brukertesting gikk vi
          videre med et spesifikt design, og jeg lagde high-fidelity prototyper
          i Figma sammen med et gruppemedlem. Vi har utviklet appen ut ifra
          disse prototypene, og har hatt flere runder med brukertesting
          underveis i utviklingen.
          <br />
          Samtidig ser vi kontinuerlig etter måter å forbedre designet og
          brukeropplevelsen på appen.
          <br />
          Appen er utviklet i React Native med Typescript.
        </p>
        <p>
          Vi har en nettside for Food-e mer mer informasjon om prosjektet og
          utviklerne, men appen er fortsatt under utvikling. Link vil bli
          tilgjengelig så fort den er lansert.
        </p>
        <br></br>
        <a target="_blank" rel="noreferrer" href="https://www.food-e.no/">
          Les mer på hjemmesiden til Food-e her
        </a>
      </main>
    </>
  );
}
