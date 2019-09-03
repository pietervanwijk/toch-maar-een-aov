import React, { useState } from 'react';
import Footer from './components/Footer';
import Metrics from './components/Metrics';
import Results from './components/Results';
import getProfessionsJSON from './lib/getProfessionsJSON';
import professionList from './lib/professionList';

import 'antd/dist/antd.css';
import './scss/app.scss';

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    profession: '',
    bucket: '',
    birthDate: '28-04-1990',
    gender: '',
    premie: '',
    professionCode: '',
    r1: '',
    r42: 0.56,
    r7: 0.05,
  })

  function getProfessions() {
    const professionNames = [];

    for(let i = 0; i < professionList.length; i += 1) {
      professionNames.push(professionList[i].Name)
    }

    return professionNames.sort();
  }

  const professionNames = getProfessions()

  return (
    <div className="app">
      <Metrics
        step={step}
        setStep={setStep}
        data={data}
        setData={setData}
        professionNames={professionNames}
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
