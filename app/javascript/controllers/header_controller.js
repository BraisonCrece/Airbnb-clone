import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from 'el-transition'


export default class extends Controller {
  static targets = ['openUserMenu']
  connect() {
    this.openUserMenuTarget.addEventListener('click', this.toggleDropdownMenu)
  }

  toggleDropdownMenu() {
    toggle(document.getElementById('menu-dropdown-items'))
  }
}
