import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="share-modal"
export default class extends Controller {
  copyLink() {
    navigator.clipboard.writeText(this.element.dataset.shareUrl).then(() => {
      alert('Link copied to clipboard');
    })
  }

  shareWhatsapp() {
    window.open(`whatsapp://send?text=${this.element.dataset.shareUrl}`, "_blank")
  }

  shareFacebook() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.element.dataset.shareUrl}`, "_blank")
  }

  shareTwitter() {
    window.open(`https://twitter.com/intent/tweet?url=${this.element.dataset.shareUrl}`, "_blank")
  }
}
