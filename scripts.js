// для инпута с запросом на gihub

const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", (event) => {
  event.preventDefault()
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
    .then(response => response.json())
    .then(  
      (data) =>
        (resultsContainer.innerHTML = `<div class="response-container">
                  <img src="${data.avatar_url}">
                  <p> Имя: <span>${data.name}</span><p>
                  <p> О себе: <span>${data.bio}</span><p>
                  <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
              </div>`)
    );
});


// для инпута с запросом на jsonplaceholder

const loadUsersBtn = document.querySelector(".users-load");
const resultsUsersContainer = document.querySelector(".users-results");
const searchUsersInput = document.querySelector(".users-input");
const errorUsers = document.querySelector(".users-errors")

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Ошибка валидации";
  }
}

class NaNError extends ValidationError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name
  }
}

class LogicError extends ValidationError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name
  }
}

const validateUsersInput = (data) => {
  try {
    if (!data) throw new ValidationError("Поле пустое, введите id пользователя")
    if (isNaN(+data)) throw new NaNError("Нужно ввести число")
    if (+data > 10 || +data < 5) throw new LogicError("Данного id не существует, введите число от 5 до 10")
    axios.get(`https://jsonplaceholder.typicode.com/users/${data}`)
      .then(response => response.data)
      .then(  
        (data) =>
          (resultsUsersContainer.innerHTML = `<div class="response-container">
                    <p> Имя: <span>${data.name}</span><p>
                    <p> Почта: <span>${data.email}</span><p>
                    <p> Телефон: <span>${data.phone}</span><p>
                </div>`)
    );
    errorUsers.innerHTML = ""
    searchUsersInput.classList.remove('error');
    searchUsersInput.classList.add('success');
  } catch (error) {
    errorUsers.innerHTML = error.message
    searchUsersInput.classList.remove('success');
    searchUsersInput.classList.add('error');
  }
}

loadUsersBtn.addEventListener("click", (event) => {
  event.preventDefault()
  const searchUsersValue = searchUsersInput.value.trim().toLowerCase();
  validateUsersInput(searchUsersValue)
});
