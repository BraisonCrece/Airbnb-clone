import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  connect() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.element.dataset.latitude = position.coords.latitude
      this.element.dataset.longitude = position.coords.longitude
    })
  }
}



