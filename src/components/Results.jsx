import React from 'react';
import { Button, Icon } from 'antd';
import tagManager from '../lib/googleTagManager'


function Results(props) {
  const {
    step,
    setStep,
    data,
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

  if(step !== 2) {
    return null;
  }

  let risk;

  switch (bucket) {
    case 'Blauw':
      risk = 'laag';
      break;
    case 'Groen':
      risk = 'licht';
      break;
    case 'Paars':
      risk = 'gemiddeld';
      break;
    case 'Oranje':
      risk = 'hoog';
      break;
    default:
      risk = 'onbekend';
  }

  const url = `https://tulpenfonds.nl/offerte/?b=${bucket}&i=${startDate}&gb=${birthDate}&g=${gender === 'male' ? 'Man' : 'Vrouw'}&r1=${r1}&r42=${r42}&r7=${r7}&premie=${premie}&w=${profession}&utm_source=tochmaareenaov.nl`;

  return(
    <div className="results">

      <img src={`/img/${bucket}.png`} alt="solidariteitsgroep" className="bucket" />

      <h2>
        Jouw risico op arbeidsongeschiktheid is <strong>{risk}</strong>.
      </h2>

      <p>
        Met dit profiel ben je bij het Tulpenfonds voor <strong>€{premie} per maand</strong> verzekerd bij arbeidsongeschiktheid.
      </p>

      <div className="buttons">
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
          onClick={() => setStep(1)}
        >
          <Icon type="left" />
          Terug
        </Button>
      </div>




    </div>
  );
}

export default Results;
