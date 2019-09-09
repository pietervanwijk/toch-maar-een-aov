import React from 'react';
import { Button, Icon } from 'antd';


function Results(props) {
  const {
    step,
    setStep,
    data,
  } = props;

  if(step !== 2) {
    return null;
  }

  return(
    <div className="results">
      <h1>
        Jouw risico komend jaar
      </h1>

      <div className="risk-container">
        <p className="description">
          42 dagen of langer arbeidsongeschikt
        </p>
        <p className="percentage">
          {data.r42}
          %
        </p>
        <div className="progress-bar">
          <div className="background" />
          <div
            className="foreground"
            style={{width: data.r42 / 5 * 250 }}
          />
        </div>
      </div>

      <div className="risk-container">
        <p className="description">
          7 jaar of langer arbeidsongeschikt
        </p>
        <p className="percentage">
          {data.r7}
          %
        </p>
        <div className="progress-bar">
          <div className="background" />
          <div
            className="foreground"
            style={{width: data.r7 / 3 * 250 }}
          />
        </div>
      </div>

      <Button
        type="secondary"
        size="large"
        style={{ width: 250 }}
        onClick={() => setStep(1)}
      >
        <Icon type="left" />
        Terug
      </Button>



    </div>
  );
}

export default Results;
