class LoginForm {
    constructor(formId, submitBtnId) {
        this.form = document.getElementById(formId);
        this.submitBtn = document.getElementById(submitBtnId);

        this.usernameElement = document.getElementById('username');
        this.passwordElement = document.getElementById('password');

        this.userErrorElement = document.getElementById('invalid-user');
        this.passErrorElement = document.getElementById('invalid-pass');

        this.form.addEventListener('submit', (event) => this.login(event));
    }

    showError(inputElement, errorElement, message, duration = 3000) {
        errorElement.textContent = message;
        inputElement.focus();
        setTimeout(() => (errorElement.textContent = ''), duration);
    }

    toggleButton(enabled, text) {
        this.submitBtn.disabled = !enabled; // flips the meaning
        this.submitBtn.textContent = text;
    }

    login(event) {
        event.preventDefault();

        const username = this.usernameElement.value.trim();
        const password = this.passwordElement.value.trim();

        // Clear previous errors
        this.userErrorElement.textContent = '';
        this.passErrorElement.textContent = '';

        // Validate inputs
        if (username === '') {
            return this.showError(this.usernameElement, this.userErrorElement, 'Username cannot be empty');
        }
        if (password === '') {
            return this.showError(this.passwordElement, this.passErrorElement, 'Password cannot be empty');
        }

        // Simulate login
        this.toggleButton(false, 'Logging in...');
        setTimeout(() => {
            alert('Login simulated - valid inputs. Implement server auth for real logins.');
            this.form.reset();
            this.toggleButton(true, 'Login');
        }, 800);
    }
}

// eslint-disable-next-line no-unused-vars
const _loginForm = new LoginForm('loginform', 'login-btn');