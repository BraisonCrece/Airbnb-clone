import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="property"
export default class extends Controller {
  readDescription(e) {
    e.preventDefault()

    document.getElementById('property-description-trigger').click()
  }
}
