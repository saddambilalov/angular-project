import { Component } from "@angular/core";


@Component({
    templateUrl: "../views/formvalidation.component.html"
})
export class FormValidationComponent {
    model: any = {};

    onSubmit() {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    }
}