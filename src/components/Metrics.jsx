import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker, AutoComplete, Button, Icon, Radio } from 'antd';
import getRiskAssessment from '../lib/getRiskAssessment';

function Metrics(props) {
  const [loading, setLoading] = useState(false);

  const {
    step,
    setStep,
    data,
    setData,
    professions,
  } = props;

  const {
    gender,
    birthDate,
    profession,
  } = data;


  if(step !== 1) {
    return null;
  }

  const dateFormat = "YYYY-MM-DD";

  function success(data) {
    const {
      Bucket,
      CalculationId,
      Chance1DayIll,
      Chance7YearsIll,
      Chance42DaysIll,
      Insurable,
      Premium,
    } = data;

    setData({
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

      const professionCode = professions.list[profession].code;
      const startDate = moment().add(1,'days').format(dateFormat);

      getRiskAssessment(birthDate, startDate, gender, professionCode, success);
    }
  }

  return(
    <div className="metrics">
      <h1>
        Toch maar een AOV?
      </h1>
      <p>
        Wat is jouw kans om arbeidsongeschikt te raken?
      </p>

      <h2>
        Geboortedatum
      </h2>

      <DatePicker
        format={dateFormat}
        onChange={value => setData({ ...data, birthDate: moment(value._d).format(dateFormat) })}
        value={moment(data.birthDate, dateFormat)}
        size="large"
        style={{ width: 250 }}
      />

      <br /><br />
      <h2>
        Beroep
      </h2>

      <AutoComplete
        onChange={value => setData({ ...data, profession: value })}
        dataSource={professions.names}
        placeholder="Start met typen.."
        size="large"
        filterOption={(inputValue, option) =>
          option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        style={{ width: 250 }}
      />

      <Radio.Group
        buttonStyle="solid"
        size="large"
        onChange={e => setData({ ...data, gender: e.target.value })}
        style={{ width: 250 }}
        className="gender"
      >
        <Radio.Button value="Female">Vrouw</Radio.Button>
        <Radio.Button value="Male">Man</Radio.Button>
      </Radio.Group>

      <br /><br />

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
