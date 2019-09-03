import axios from 'axios';

function getRiskAssessment() {
  const url = 'http://tochmaareenaov.nl/api/riskassessment';

  axios({
    method: 'post',
    url,
    body: {
			DateOfBirth: '1980-08-27T09:38:31.517Z',
			Gender: 'Female',
			StartDate: '2019-09-27T09:38:31.517Z',
			Profession: '10090'
    }
  }).then(response => console.log(response))
}

export default getRiskAssessment;
