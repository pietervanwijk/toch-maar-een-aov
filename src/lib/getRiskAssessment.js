import axios from 'axios';

function getRiskAssessment(birthDate, startDate, gender, profession, success) {
  const url = '/api/riskassessment';

  axios.post(
    url,
    {
      birthDate,
      startDate,
      gender,
      profession,
    })
    .then(response => success(response.data))
}

export default getRiskAssessment;
