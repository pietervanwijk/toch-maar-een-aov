import React, { useState } from 'react';
import moment from 'moment';
import Footer from './components/Footer';
import Metrics from './components/Metrics';
import Results from './components/Results';
import getProfessionsJSON from './lib/getProfessionsJSON';
import professionJSON from './lib/professionJSON';

import './scss/app.scss';

const dateFormat = "YYYY-MM-DD";

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    profession: {},
    bucket: '',
    birthDate: moment().subtract(30,'years').format(dateFormat),
    startDate: moment().add(1,'days').format(dateFormat),
    gender: '',
    premie: '',
    r1: '',
    r42: '',
    r7: '',
    insurable: '',
    calculationId: '',
  })

  function getProfessions() {
    const professionNames = [];
    const professionList = {};

    for(let i = 0; i < professionJSON.length; i += 1) {
      professionNames.push(professionJSON[i].Name);
      professionList[professionJSON[i].Name] = {
        code: professionJSON[i].Code,
        name: professionJSON[i].Name,
      };
    }

    return { names: professionNames.sort(), list: professionList }
  }

  const professions = getProfessions();

  return (
    <div className="app">
      <Metrics
        step={step}
        setStep={setStep}
        data={data}
        setData={setData}
        professions={professions}
        dateFormat={dateFormat}
      />

      <Results
        step={step}
        setStep={setStep}
        data={data}
        setData={setData}
      />

      <Footer />

    </div>
  );
}

export default App;
