import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    form: document.querySelector('.form'),
    submit_BTN: document.querySelector('.submit-btn'),
}



refs.form.addEventListener('submit', e => {
    e.preventDefault();
    const delay = e.currentTarget.elements.delay.value;
    const state = e.currentTarget.elements.state.value;
    const promise = createPromise(delay,state);
    promise
        .then(delay => {
            iziToast.success({
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: "topRight"
            })
        })
        .catch(delay => {
                iziToast.error({
                message: `❌ Rejected promise in ${delay}ms`,
                position: "topRight"})
        });
    refs.form.reset();
});

//!=====================================================

function createPromise(delay, state) {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (state == 'fulfilled') {
                res(delay)
            } else {
                rej(delay)
            }
        }, delay)
    });
    return promise;
    
}
