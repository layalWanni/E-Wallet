export const blurText = (event) => {
    let value = event.target.value;

    value.length > 0 ?
    document.getElementById('text').classList.add('used'):
    document.getElementById('text').classList.remove('used');
}

export const blurPassword = (event) => {
    let value = event.target.value;

    value.length > 0 ?
    document.getElementById('password').classList.add('used'):
    document.getElementById('password').classList.remove('used');
}