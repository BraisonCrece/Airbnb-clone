import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  share(e) {
    e.preventDefault();

    document.getElementById('share-modal-trigger').click();
  }
}
