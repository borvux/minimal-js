// app/javascript/controllers/example_controller.js
import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="example"
export default class extends Controller {
  static targets = [ "text" ];

  connect() {
    console.log('Stimulus controller connected');
    console.log('Waiting 2 seconds')
    setTimeout(() => this.setText(), 2000);
  }

  setText() {
    console.log('Setting text');
    this.textTarget.textContent = 'Stimulus is connected!';
  }

  disconnect() {
    console.log('Stimulus controller disconnected');
  }
}
