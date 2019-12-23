import WebAuthn from './WebAuthn/index.js'

const registerButton = document.querySelector('.registerButton')
registerButton.addEventListener('click', WebAuthn.register)