const getDataApi = (data) => {
  
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      console.log(response.success)
      response.json()
    }
    );
    // .then((result) => {
     
    // })
    // .catch((error) => console.log(`Ha sucedido un error: ${error}`));
};

export default getDataApi;