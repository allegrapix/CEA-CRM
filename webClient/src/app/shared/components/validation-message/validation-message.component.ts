import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cea-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss'],
})
export class ValidationMessageComponent {
  @Input() inputControl: FormControl = new FormControl();
  @Input() inputName: string = '';

  buildValidationMessage() {
    let validatorError = '';
    if (this.inputControl.errors?.required) {
      validatorError = this.inputName
        ? `${this.inputName} required`
        : 'Required';
    }
    return validatorError;
  }
}
