const formInfo = document.querySelector('.feedback-form');
let formData = {};


const formFileSubmit = event =>{
    event.preventDefault();
    event.target.reset();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    localStorage.removeItem('feedback-form-state');

}

const fillFormFields = () =>{
const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

if(formDataFromLS === null){
return;
}

formData = formDataFromLS;


for(const key in formDataFromLS){
    if(formDataFromLS.hasOwnProperty(key)){
        formInfo.elements[key].value = formDataFromLS[key];
    }
}
}

fillFormFields ()

const formFileInput = event => {
    const formValue = event.target.value;
    const formName = event.target.name;
formData[formName] = formValue;   
const formDataLS = localStorage.setItem('feedback-form-state' , JSON.stringify(formData));
}

formInfo.addEventListener('input', formFileInput);
formInfo.addEventListener('submit', formFileSubmit);