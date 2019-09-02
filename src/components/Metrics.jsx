import React from 'react';
import moment from 'moment';
import { DatePicker, AutoComplete, Button, Icon } from 'antd';

function Metrics(props) {
  const {
    step,
    setStep,
    data,
    setData,
    professionNames,
  } = props;

  const dateFormat = "DD-MM-YYYY";

  if(step !== 1) {
    return null;
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
        dataSource={professionNames}
        placeholder="Start met typen.."
        size="large"
        filterOption={(inputValue, option) =>
          option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        style={{ width: 250 }}
      />

      <br /><br />

      <Button
        type="primary"
        size="large"
        style={{ width: 250 }}
        onClick={() => setStep(2)}
      >
        Wat is mijn risico?
        <Icon type="right" />
      </Button>



    </div>
  );
}

export default Metrics;
