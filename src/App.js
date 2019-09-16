import React, { useState, useEffect } from 'react';
import moment from 'moment';
import TagManager from 'react-gtm-module';
import tagManager from './lib/googleTagManager'

import Footer from './components/Footer';
import Metrics from './components/Metrics';
import Results from './components/Results';
import professions from './lib/professions'

import './scss/app.scss';
import InfoPage from './components/InfoPage';

const tagManagerArgs = {
  gtmId: 'GTM-KWX7HCN',
  dataLayerName: 'AppDataLayer',
};

TagManager.initialize(tagManagerArgs);

const dateFormatApi = "YYYY-MM-DD";
const dateFormatUser = "DD-MM-YYYY";

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    profession: '',
    bucket: '',
    birthDate: '',
    startDate: moment().add(1,'days').format(dateFormatApi),
    gender: '',
    premie: '',
    r1: '',
    r42: '',
    r7: '',
    insurable: '',
    calculationId: '',
  })

  useEffect(() => tagManager({ event: 'tochMaarEenAovStep1' }), []);

  return (
    <div className="app">
      <Metrics
        step={step}
        setStep={setStep}
        data={data}
        setData={setData}
        professions={professions}
        dateFormatApi={dateFormatApi}
        dateFormatUser={dateFormatUser}
      />

      <Results
        step={step}
        setStep={setStep}
        data={data}
      />

      <InfoPage
        step={step}
        setStep={setStep}
        data={data}
      />

      <Footer />

    </div>
  );
}

export default App;
