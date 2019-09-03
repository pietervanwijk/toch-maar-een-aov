
  function getProfessionsObject(professionJSON) {
    const professionNames = [];
    const professionList = {};

    for(let i = 0; i < professionJSON.length; i += 1) {
      professionNames.push(professionJSON[i].Name);
      professionList[professionJSON[i].Name] = {
        code: professionJSON[i].Code,
        name: professionJSON[i].Name,
      };
    }

    return { names: professionNames.sort(), list: professionList }
  }


export default getProfessionsObject;
