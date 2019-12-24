
let qs = (selector) => {
    return document.querySelector(selector);
}
let qsAll = (selector) => {
    return document.querySelectorAll(selector);
}

const HideDate = () => {
    qs('.return').style.visibility = 'hidden';
}
const showDate = () => {
    qs('.return').style.visibility = 'visible';
}

const formValidation = (data) => {
    let flag = true;
    data.forEach((x) => {
        if(!x.value ) {
            let temp1 = x.getAttribute('name');
            let temp2 = qs('[value="one-way"]').checked;
            if(temp1 === 'return-date' && temp2){
                flag = true;
            }
            else {
                x.style.boxShadow = '0 0 10px red';
                flag = false;
            }
        }
    })
    return flag;
}

/**
 * Form Validation
 * @param {{[key:string]:any}} data 
 */
const processForm = (data) => {
    if(formValidation(data)){
        const formData = new FormData(qs('#form'));
        qs('#success').textContent = "successful!";
        qs('#success').setAttribute('class', 'success');

        formData.forEach((x) => {
           console.log(x);
        });
    }
    else {
        qs('#success').textContent = "All fields should be filled!";
        qs('#success').setAttribute('class', 'failure');
    }
}

// User Interface Interaction
const uiCanInteract = () => {

    //Toggle return date on or off
    qs('[value="one-way"]').addEventListener('change', HideDate);
    qs('[value="round-trip"]').addEventListener('change', showDate);


    // Validate form when book button is clicked
    qs('#book').addEventListener('click', (e) => {
        e.preventDefault();
        if(qs('.confirm-check input').checked) {
            processForm(qsAll('#form .input'));
        }
        else {
            qs('.confirm-check input').style.boxShadow = '0 0 10px red';
        }
    });
}
uiCanInteract();