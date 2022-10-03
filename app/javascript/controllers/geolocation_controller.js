import { Controller } from '@hotwired/stimulus'
import { getDistance, convertDistance } from 'geolib'
import { isEmpty } from 'lodash-es'

export default class extends Controller {
  static targets = ['property']
  connect() {
    // if the controller doesn't have the user's geolocation, it gets the browser's geolocation
    if( isEmpty(this.element.dataset.latitude) && isEmpty(this.element.dataset.longitude ) ) {
      window.navigator.geolocation.getCurrentPosition((position) => {

        this.element.dataset.latitude = position.coords.latitude
        this.element.dataset.longitude = position.coords.longitude
  
        this.propertyTargets.forEach((propertyTarget) => {
          let distanceFrom = getDistance(
            { latitude: position.coords.latitude, longitude: position.coords.longitude },
            { latitude: propertyTarget.dataset.latitude, longitude: propertyTarget.dataset.longitude }
          )
          propertyTarget.querySelector('[data-distance-away]').innerHTML = `${Math.round(convertDistance(distanceFrom,'km'))} kilometers away`
        });
      })
      // if the controller have the user's geolocation
    }else{
      this.propertyTargets.forEach((propertyTarget) => {
        let distanceFrom = getDistance(
          { latitude: this.element.dataset.latitude, longitude: this.element.dataset.longitude },
          { latitude: propertyTarget.dataset.latitude, longitude: propertyTarget.dataset.longitude }
        )
        propertyTarget.querySelector('[data-distance-away]').innerHTML = `${Math.round(convertDistance(distanceFrom,'km'))} kilometers away`
      })    
    }
  }
}



