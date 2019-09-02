import axios from 'axios';

function getProfessionsJSON() {
  const url = '/api/professions';

  axios({
    method: 'get',
    url,
    Accept: 'application/json',
  }).then(response => console.log(response))
}

export default getProfessionsJSON;
