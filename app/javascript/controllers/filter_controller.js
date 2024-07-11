// app/javascript/controllers/filter_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "list", "spinner" ];

  applyFilters(event) {
    console.log("applying filter");
    this.showSpinner();
    const query = event.target.value.toLowerCase();
    setTimeout(() => { // Simulate delay
      this.listTarget.querySelectorAll('li').forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(query) ? '' : 'none';
      });
      this.hideSpinner();
      console.log("done");
    }, 500);
  }

  // to toggle spinner on
  showSpinner() {
    this.spinnerTarget.style.display = 'block';
  }

  // to toggle spinner off 
  hideSpinner() {
    this.spinnerTarget.style.display = 'none';
  }
}
