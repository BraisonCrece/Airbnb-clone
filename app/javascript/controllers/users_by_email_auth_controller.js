import { Controller } from '@hotwired/stimulus';
import axios from 'axios';

export default class extends Controller {
  static targets = ['email', 'emailWrapper', 'invalidSvg', 'errorMessage', 'submit'];

  connect() {
    this.submitTarget.addEventListener('click', (e) => {
      e.preventDefault();

      if (this.emailTarget.value.length === 0) {
        // email field is empty, so don't do anything
        this.emailWrapperTarget.classList.add('invalid-inset-input-text-field');
        this.emailWrapperTarget.classList.remove('focus-within:ring-1');
        this.emailWrapperTarget.classList.remove('focus-within:ring-black');
        this.emailWrapperTarget.classList.remove('focus-within:border-black');
        this.invalidSvgTarget.classList.remove('hidden');
        this.errorMessageTarget.classList.remove('hidden');
      } else {
        // email field is filled out, so do something
        axios.get('/api/users_by_email', {
          params: {
            email: this.emailTarget.value
          },
          headers: {
            'ACCEPT': 'application/json'
          }
        }).then((response) => {
          Turbo.visit('/users/sign_in');
        }).catch((response) => {
          Turbo.visit('/users/sign_up');
        })
      }
    });
  }

  submitForm() {
    console.log('aasdofijsiodjf');
  }
}
