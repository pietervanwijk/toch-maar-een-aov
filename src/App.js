import React, { useState } from 'react';
import moment from 'moment';
import Footer from './components/Footer';
import Metrics from './components/Metrics';
import Results from './components/Results';
import professions from './lib/professions'

import './scss/app.scss';

const dateFormat = "YYYY-MM-DD";

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    profession: '',
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
      />

      <Footer />

    </div>
  );
}

export default App;
