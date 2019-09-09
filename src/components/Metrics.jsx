import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker, AutoComplete, Button, Icon, Radio } from 'antd';
import getRiskAssessment from '../lib/getRiskAssessment';

const zeroNine = Math.floor(Math.random() * 10);

function Metrics(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    profession: false,
    gender: false,
  });

  const {
    step,
    setStep,
    data,
    setData,
    professions,
    dateFormat,
  } = props;

  const {
    gender,
    birthDate,
    profession,
    startDate,
  } = data;


  if(step !== 1) {
    return null;
  }

  function success(responseData) {
    const {
      Bucket,
      CalculationId,
      Chance1DayIll,
      Chance7YearsIll,
      Chance42DaysIll,
      Insurable,
      Premium,
    } = responseData;

    setData({
      ...data,
      bucket: Bucket,
      premie: Premium,
      r1: Chance1DayIll,
      r42: Chance42DaysIll,
      r7: Chance7YearsIll,
      insurable: Insurable,
      calculationId: CalculationId,
    })
    setStep(2);
    setLoading(false);
  }

  function handleSubmit() {
    if (gender && birthDate && profession) {
      setLoading(true);

      getRiskAssessment(birthDate, startDate, gender, profession.code, success);
    } else if (!profession) {
      setError({ ...error, profession: true })
    } else if (!gender) {
      setError({ ...error, gender: true })
    }
  }

  return(
    <div className="metrics">
      <div className="gif-container">
        <img
          className="gif"
          src={`img/gifs/${zeroNine}.gif`}
          alt="Toch maar een AOV?"
        />
      </div>

      <h1>
        Toch maar een AOV?
      </h1>
      <p>
        Wat is jouw kans om arbeidsongeschikt te raken?
      </p>

      <h3>
        Geboortedatum
      </h3>

      <DatePicker
        format={dateFormat}
        onChange={value => setData({ ...data, birthDate: moment(value._d).format(dateFormat) })}
        value={moment(data.birthDate, dateFormat)}
        size="large"
        style={{ width: 250 }}
      />

      <br /><br />
      <h3>
        Beroep
      </h3>

      <div className="profession">
        <AutoComplete
          onSelect={value => {
            setData({ ...data, profession: professions.list[value] })
            setError({ ...error, profession: false })
          }}
          dataSource={professions.names}
          placeholder="Start met typen.."
          size="large"
          filterOption={(inputValue, option) =>
            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          style={{ width: 250 }}
        />

        <p className="error-message" style={{ display: error.profession ? 'block' : 'none' }}>
          Selecteer een beroep uit de lijst
        </p>
      </div>

      <br />

      <div className="gender">
        <Radio.Group
          buttonStyle="solid"
          size="large"
          onChange={e => {
            setData({ ...data, gender: e.target.value })
            setError({ ...error, gender: false })
          }}
          style={{ width: 250 }}
          className="gender"
          value={gender}
        >
          <Radio.Button value="Female">Vrouw</Radio.Button>
          <Radio.Button value="Male">Man</Radio.Button>
        </Radio.Group>

        <p className="error-message" style={{ display: error.gender ? 'block' : 'none' }}>
          Selecteer een geslacht
        </p>
      </div>

      <br />

      <Button
        type="primary"
        size="large"
        style={{ width: 250 }}
        onClick={handleSubmit}
        loading={loading}
      >
        Wat is mijn risico?
        <Icon type="right" />
      </Button>



    </div>
  );
}

export default Metrics;
