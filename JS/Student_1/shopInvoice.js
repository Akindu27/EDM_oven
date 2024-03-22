const paragraph = document.querySelector('#paragraph');

const params = new URLSearchParams(window.location.search);

//getting the key value pairs from thelocal storage using a for each loop
params.forEach((value, key)=>{
    paragraph.append(`${key} : ${value}`);
    paragraph.append(document.createElement('br'));
});