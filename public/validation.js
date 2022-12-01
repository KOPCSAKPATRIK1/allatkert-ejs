document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit').addEventListener('click', (e) => {
    console.log('Loaded');
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    let namehiba = document.getElementById('namehiba');
    let agehiba = document.getElementById('agehiba');

    if (name == '') {
      e.preventDefault();
      namehiba.style.display = 'initial';
    } else {
      namehiba.style.display = 'none';
    }
    if (age == '' || age < 0) {
      e.preventDefault();
      agehiba.style.display = 'initial';
    } else {
      agehiba.style.display = 'none';
    }
  });
});
