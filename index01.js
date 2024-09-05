const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1/comments', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) { // 4 means request is complete
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
    } else {
      console.error('Error: ' + xhr.status); // Log if status is not 200
    }
  }
};
xhr.send();
