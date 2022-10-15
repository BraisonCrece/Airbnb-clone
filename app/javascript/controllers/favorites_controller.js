import { Controller } from '@hotwired/stimulus'
import axios from 'axios'

export default class extends Controller {
  favorite() {
    if (this.element.dataset.userLoggedIn === 'false') {
      return document.querySelector('[data-header-target = "userAuthLink"]').click()
    }

    if (this.element.dataset.favorited === 'true') {
      // make a delete request through axios, to remove 'favorite' on property
      axios.delete(this.element.dataset.unfavoriteUrl, {
        headers: {
          'ACCEPT': 'application/json'
        }
      })
      .then((response) => {
        this.element.dataset.favorited = 'false'
        this.element.setAttribute('fill', '#ced4da')
      })
    } else {
      // make a post request through axios to add 'favorite' on property
      axios.post(this.element.dataset.favoriteUrl, {
        user_id: this.element.dataset.userId,
        property_id: this.element.dataset.propertyId
      },{ headers: {
          'ACCEPT': 'application/json'
        }
      })
      .then((response) => {
        this.element.dataset.favorited = 'true'
        this.element.setAttribute('fill', 'red')  
      })

    }

  }
}