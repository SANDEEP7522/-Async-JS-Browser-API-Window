function getData(callback) {
    setTimeout(() => {
      callback('Data fetched');
    }, 1000);
  }
  
  getData((result) => {
    console.log(result); 
  });
  