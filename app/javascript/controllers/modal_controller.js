import { Controller } from '@hotwired/stimulus'
import { enter, leave, toggle } from 'el-transition'

export default class extends Controller {
  static targets = ['closeButton']
  connect() {
    document.getElementById('modal-wrapper').addEventListener('click', this.closeModal);
    this.closeButtonTarget.addEventListener('click', () => {
      leave(document.getElementById('modal-wrapper'));
      leave(document.getElementById('modal-backdrop'));
      leave(document.getElementById('modal-panel'));
    })
  }

  closeModal(event) {
    const modalPanelClicked = document.getElementById('modal-panel').contains(event.target);

    if (!modalPanelClicked && event.target.id !== 'modal-trigger') {
      leave(document.getElementById('modal-wrapper'));
      leave(document.getElementById('modal-backdrop'));
      leave(document.getElementById('modal-panel'));
    }
  }

  showModal() {
    enter(document.getElementById('modal-wrapper'));
    enter(document.getElementById('modal-backdrop'));
    enter(document.getElementById('modal-panel'));
  }
}