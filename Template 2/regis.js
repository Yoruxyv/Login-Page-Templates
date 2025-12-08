class RegisterForm {
    constructor(formId, submitBtnId) {
        this.form = document.getElementById(formId);
        this.submitBtn = document.getElementById(submitBtnId);

        this.usernameElement = document.getElementById('username');
        this.passwordElement = document.getElementById('password');
        this.confirmPasswordElement = document.getElementById('reg-confirm');
        this.emailElement = document.getElementById('email');

        this.userErrorElement = document.getElementById('invalid-user');
        this.passErrorElement = document.getElementById('invalid-pass');
        this.emailErrorElement = document.getElementById('invalid-email');
        this.sameUserPwElement = document.getElementById('same-user-pw');
        this.confirmPassErrorElement = document.getElementById('invalid-confirm-pass');

        this.form.addEventListener('submit', (event) => this.register(event));
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

    validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
        return re.test(password);
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    register(event) {
        event.preventDefault();

        const usernameValue = this.usernameElement.value.trim();
        const passwordValue = this.passwordElement.value.trim();
        const confirmPasswordValue = this.confirmPasswordElement.value.trim();
        const emailValue = this.emailElement.value.trim();

        // Clear previous errors
        this.userErrorElement.textContent = '';
        this.passErrorElement.textContent = '';
        this.emailErrorElement.textContent = '';
        this.sameUserPwElement.textContent = '';
        this.confirmPassErrorElement.textContent = '';

        // Validate username
        if (usernameValue === '') {
            return this.showError(this.usernameElement, this.userErrorElement, 'Username cannot be empty');
        }
        if (usernameValue.length < 3) {
            return this.showError(this.usernameElement, this.userErrorElement, 'Username must be at least 3 characters');
        }

        // Validate email
        if (!this.validateEmail(emailValue)) {
            return this.showError(this.emailElement, this.emailErrorElement, 'Please enter a valid email address');
        }

        // Validate password
        if (passwordValue === '') {
            return this.showError(this.passwordElement, this.passErrorElement, 'Password cannot be empty');
        }
        if (passwordValue.length < 8) {
            return this.showError(this.passwordElement, this.passErrorElement, 'Password must be at least 8 characters');
        }
        if (!this.validatePassword(passwordValue)) {
            return this.showError(
                this.passwordElement,
                this.passErrorElement,
                'Password must include uppercase, lowercase, a number, and a special character'
            );
        }

        // Confirm password match
        if (passwordValue !== confirmPasswordValue) {
            return this.showError(this.confirmPasswordElement, this.confirmPassErrorElement, 'Passwords do not match');
        }

        // Check username !== password
        if (usernameValue === passwordValue) {
            return this.showError(this.passwordElement, this.sameUserPwElement, 'Username and password should not be the same');
        }

        // Simulate registration
        this.toggleButton(false, 'Logging in...');
        setTimeout(() => {
            alert('Register simulated - valid inputs. Implement server auth for real logins.');
            this.form.reset();
            this.toggleButton(true, 'Login');
        }, 800);
    }
}

// eslint-disable-next-line no-unused-vars
const _register = new RegisterForm('loginForm', 'submitBtn');
