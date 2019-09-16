import React from 'react';
import { Button, Icon } from 'antd';
import tagManager from '../lib/googleTagManager'


function InfoPage(props) {
  const {
    data,
    step,
    setStep,
  } = props;

  const {
    profession,
    bucket,
    birthDate,
    startDate,
    gender,
    premie,
    r1,
    r42,
    r7,
  } = data;

  if(step !== 3) {
    return null;
  }

  const url = `https://tulpenfonds.nl/offerte/?b=${bucket}&i=${startDate}&gb=${birthDate}&g=${gender === 'male' ? 'Man' : 'Vrouw'}&r1=${r1.toFixed(2)}&r42=${r42.toFixed(2)}&r7=${r7.toFixed(2)}&premie=${premie}&w=${profession.name}&utm_source=tochmaareenaov.nl`;

  return (
    <div className="info-page">
      <img src="/img/logo.svg" className="logo" alt="tulpenfonds logo" />
      <div>
        <div className="intro">
          <h2>Alles op een rijtje</h2>
          <p>
            Tulpenfonds is een <strong>betaalbare arbeidsongeschiktheidsverzekering</strong>.

            Voor €{premie} per maand krijg jij het volgende van ons:
          </p>
        </div>

        <ul>
          <li>
            <span className="list-title">Verzekerd voor een basisinkomen</span>
            <br/>
            Bij arbeidsongeschiktheid vullen we je inkomen aan tot €21.197,- bruto per jaar
          </li>
          <li>
            <span className="list-title">Hulp bij herstel en re-integratie</span>
            <br/>
            Vanaf dag 1 dat je niet kan werken krijg je een persoonlijk aanspreekpunt met relevante ervaring. Ons team heeft 500.000 re-integratietrajecten begeleid over de afgelopen 10 jaar.
          </li>
          <li>
            <span className="list-title">6 weken eigen risico</span>
            <br/>
            Na 6 weken arbeidsongeschiktheid heb je recht op de uitkering
          </li>
          <li>
            <span className="list-title">Uitkering van maximaal 7 jaar</span>
            <br/>
            Hiermee bieden we voldoende ruimte voor herstel voor bijna alle gevallen en kunnen we de premies laag houden.
          </li>
          <li>
            <span className="list-title">Beoordeeld door onafhankelijke arts op eigen beroep</span>
            <br/>
            Na 1 jaar arbeidsongeschiktheid word je beoordeeld op basis van al het werk dat je zou kunnen doen
          </li>
          <li>
            <span className="list-title">Maandelijks opzegbaar na het eerste jaar</span>
            </li>
          <li>
            <span className="list-title">Fiscaal aftrekbaar</span>
            </li>
        </ul>
      </div>

      <p>
        Zo, dat is een hele berg informatie.
        We begrijpen dat je er nog even over na moet denken.
        Met een offerte kan je op elk moment weer verder met deze gegevens.
      </p>

      <Button
        type="primary"
        size="large"
        className="offerte"
        onClick={() => {
          tagManager({ event: 'tochMaarEenAovOfferte' });
          window.open(url);
        }}
      >
        <Icon type="file-text" />
        Mail offerte
      </Button>

      <Button
        type="secondary"
        size="large"
        className="back"
        onClick={() => setStep(2)}
      >
        <Icon type="left" />
        Terug
      </Button>
    </div>
  )
}

export default InfoPage;
