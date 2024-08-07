const formInfo = document.querySelector('.feedback-form');
let formData = {
    email: "",
    message: ""
};

const fillFormFields = () => {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formDataFromLS === null) {
        return;
    }

    formData = formDataFromLS;

    for (const key in formDataFromLS) {
        if (formDataFromLS.hasOwnProperty(key)) {
            formInfo.elements[key].value = formDataFromLS[key];
        }
    }
};

fillFormFields();

const formFileInput = event => {
    const formValue = event.target.value;
    const formName = event.target.name;
    formData[formName] = formValue;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const formFileSubmit = event => {
    event.preventDefault();

    if (!formInfo.elements.email.value.trim() || !formInfo.elements.message.value.trim()) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    formData = {
        email: "",
        message: ""
    };

    event.target.reset();
};

formInfo.addEventListener('input', formFileInput);
formInfo.addEventListener('submit', formFileSubmit);