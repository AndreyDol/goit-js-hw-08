import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
function getFormData() {
  return { email: refs.input.value, message: refs.textarea.value };
}

refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

setFormData();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 1000));

function onFormSubmit(event) {
  event.preventDefault();
  if (refs.input.value === '' || refs.textarea.value === '') {
    alert('Please enter data in the all input field.');
  } else {
    console.log(getFormData());
    refs.form.reset();
     localStorage.setItem(STORAGE_KEY, "");
  }
}

function onFormInput() {
  //Берет данные из формы
  formData = getFormData();
 // console.log(formData);
  //Преобразует в строку объект, записивает в локал сториж
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  // setFormData();
}

function setFormData() {
  try {
    let dataLocalStorage = {};
    //берем данные из localstorage
    dataLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    //присвоение формам значения с localstorage
    if (dataLocalStorage.email !== '')
      refs.input.value = dataLocalStorage.email;
    if (dataLocalStorage.message !== '')
      refs.textarea.value = dataLocalStorage.message;
    //Если ошибка , выводим в консоль
   // console.log(dataLocalStorage);
  } catch (e) {
    console.log(e);
  }
}
