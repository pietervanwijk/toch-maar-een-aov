import axios from 'axios';

function getRiskAssessment(birthDate, startDate, gender, profession) {
  const url = 'http://tochmaareenaov.nl/api/riskassessment';

  axios.post(
    url,
    { birthDate,
      startDate,
      gender,
      profession,
    }
    )
    .then(response => console.log(response))
}

export default getRiskAssessment;
