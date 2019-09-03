import React, { useState } from 'react';
import Footer from './components/Footer';
import Metrics from './components/Metrics';
import Results from './components/Results';
import getProfessionsJSON from './lib/getProfessionsJSON';
import professionJSON from './lib/professionJSON';

import 'antd/dist/antd.css';
import './scss/app.scss';

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    profession: {},
    bucket: '',
    birthDate: '1990-04-28',
    startDate: '',
    gender: '',
    premie: '',
    r1: '',
    r42: 0.56,
    r7: 0.05,
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
