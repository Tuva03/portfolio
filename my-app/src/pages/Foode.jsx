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
          forslag til ingredienser, i tillegg til videre informasjon om
          tilberedningsmetoder. Jeg har stått for UI, UX design og
          implementering.
        </p>
        <p>
          Food-e startet som et innovativt bachelorprosjekt ved Høgskolen i
          Østfold, som vi gjennomførte gjennom Drivhuset Østfold. Drivhuset
          hjalp oss med rådgivning og støtte under utviklingen. Vi fikk stort
          eierskap til prosjektet gjennom bacheloren, og det var absolutt noe vi
          ville fortsette med etter selve bacheloroppgaven var levert.
          <br />
          Under Expo 2025 på Inspiria Science Center vant vi{" "}
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
          med Food-e som var en stor inspirasjon og ga oss et tydeligere
          inntrykk om at appen vår var et behov. Vi ønsker å gjøre det lett for
          folk å ha en bærekraftig livsstil, samtidig som middagsplanleggingen
          blir enklere.
        </p>
        <p>
          Jeg har hatt ansvar for UI og UX design, og har implementert appen med
          React Native og TypeScript. Jeg hadde tidligere kun erfaring med React
          og mobilutvikling gjennom Android Studio, men det var en gøy
          utfordring å lære seg React Native fortløpende under prosjektet. Vi
          startet opp med å gjennomføre ekspertintervjuer for å få et intrykk av
          hva slags forventninger ekspertene fikk ut ifra beskrivelsen av
          Food-e. Etter vi fikk tilbakemeldinger begynte jeg å lage low-fidelity
          wireframes hvor vi valgte ut et par design format vi likte best. Vi
          gjennomførte flere runder med brukertesting før vi gikk videre med et
          spesifikt design, hvor jeg og et gruppemedlem lagde high-fidelity
          prototyper i Figma ut ifra designet vi valgte. Vi har utviklet appen
          ut ifra disse prototypene og har hatt flere runder med brukertesting
          underveis i utviklingen.
          <br />
          Design Thinking har vært en stor del av prosessen og har blitt brukt
          gjennom hele prosjektet for å tilpasse appen til brukernes behov som
          ble oppdaget gjennom brukertesting og tilbakemeldinger internt i
          gruppen.
          <br />
          Vi jobber fortsatt med Food-e ved siden av jobb og skole. Vi ser
          kontinuerlig etter måter å forbedre design, funksjonalitet og
          brukeropplevelsen.
        </p>
        <p>
          Food-e er utviklet med React Native, Expo og Typescript. Vi bruker
          Expo som platform med React Native og Typescript. Vi valgte å bruke
          Expo med React Native for å lage en app tilpasset både iOS og Android
          uten at vi måtte skrive platformspesifikke kode. Vi ble også tipset å
          bruke denne kombinasjonen fra bekjente utviklere med erfaring fra
          mobilutvikling.
        </p>
        <p>
          Vi har en nettside for Food-e med mer informasjon om prosjektet, veien
          videre og utviklerne. Appen er fortsatt under utvikling, link til
          Apple Store og Google Play vil bli tilgjengelig så fort den er
          lansert.
        </p>
        <br />
        <a target="_blank" rel="noreferrer" href="https://www.food-e.no/">
          Les mer på hjemmesiden til Food-e her
        </a>
        <br />
      </main>
    </>
  );
}
