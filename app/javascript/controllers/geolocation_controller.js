import { Controller } from '@hotwired/stimulus'
import { getDistance, convertDistance } from 'geolib';
import { isEmpty } from 'lodash-es';

export default class extends Controller {
  static targets = ['property'];

  connect() {
    // if the controller doesn't have the user's geolocation, it gets the browser's geolocation
    if (isEmpty(this.element.dataset.latitude) && isEmpty(this.element.dataset.longitude)) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        this.setUserCoordinates(position.coords);
        this.setDistanceText()
      });
      // if the controller have the user's geolocation
    } else {
      this.setDistanceText();
    }
  }

  setUserCoordinates(coordinates) {
    this.element.dataset.latitude = coordinates.latitude;
    this.element.dataset.longitude = coordinates.longitude;
  }

  getUserCoordinates() {
    return {
      latitude: this.element.dataset.latitude,
      longitude: this.element.dataset.longitude,
    };
  }

  setDistanceText() {
    this.propertyTargets.forEach((propertyTarget) => {
      let distanceFrom = getDistance(
        this.getUserCoordinates(),
        { latitude: propertyTarget.dataset.latitude, longitude: propertyTarget.dataset.longitude },
      );

      propertyTarget.querySelector('[data-distance-away]').innerHTML = `${Math.round(convertDistance(distanceFrom, 'km'))} kilometers away`;
    });
  }
}
