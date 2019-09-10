import React from 'react';
import CountUp from 'react-countup';
import { Button, Icon } from 'antd';


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
    insurable,
    calculationId,
  } = data;

  if(step !== 2) {
    return null;
  }

  const url = `https://tulpenfonds.nl/offerte/?b=${bucket}&i=${startDate}&gb=${birthDate}&g=${gender}&r1=${r1}&r42=${r42}&r7=${r1}&premie=${premie}&w=${profession}&utm_source=tochmaareenaov.nl`;

  return(
    <div className="results">
      <h2>
        Jouw risico op arbeidsongeschiktheid
      </h2>
      <p className="description">
        Percentages gelden voor de komende 12 maanden
      </p>

      <div className="risk-container">
        <p className="description">
          <strong>42 dagen</strong> of langer
        </p>
        <CountUp
          end={r42}
          duration={5}
          decimals={2}
          suffix="%"
          className="percentage"
        />
      </div>

      <div className="risk-container">
        <p className="description">
          <strong>7 jaar</strong> of langer
        </p>

        <CountUp
          end={r7}
          duration={5}
          decimals={2}
          suffix="%"
          className="percentage"
        />
      </div>

      <p>
        Met dit profiel ben je bij het Tulpenfonds voor <strong>€{premie} per maand</strong> verzekerd voor arbeidsongeschiktheid.
      </p>

      <div className="buttons">
        <Button
          type="primary"
          size="large"
          className="offerte"
          href={url}
        >
          <Icon type="file-text" />
          Vraag offerte aan
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
