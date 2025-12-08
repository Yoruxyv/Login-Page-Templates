class LoginForm {
    constructor(formId, submitBtnId) {
        this.form = document.getElementById(formId);
        this.submitBtn = document.getElementById(submitBtnId);

        this.emailElement = document.getElementById('email');
        this.passwordElement = document.getElementById('password');

        this.emailErrorElement = document.getElementById('invalid-user');
        this.passErrorElement = document.getElementById('invalid-pass');

        this.form.addEventListener('submit', (event) => this.login(event));
    }

    showError(inputElement, errorElement, message, duration = 3000) {
        errorElement.textContent = message;
        inputElement.focus();
        setTimeout(() => (errorElement.textContent = ''), duration);
    }

    toggleButton(enabled, text) {
        this.submitBtn.disabled = !enabled;
        this.submitBtn.textContent = text;
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    login(event) {
        event.preventDefault();

        const emailValue = this.emailElement.value.trim();
        const passwordValue = this.passwordElement.value.trim();

        // Clear previous errors
        this.emailErrorElement.textContent = '';
        this.passErrorElement.textContent = '';

        // Validate email
        if (emailValue === '') {
            return this.showError(this.emailElement, this.emailErrorElement, 'Email cannot be empty');
        }
        if (!this.validateEmail(emailValue)) {
            return this.showError(this.emailElement, this.emailErrorElement, 'Please enter a valid email address');
        }

        // Validate password
        if (passwordValue === '') {
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
const _loginForm = new LoginForm('loginForm', 'submitBtn');