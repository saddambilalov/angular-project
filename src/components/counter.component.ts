import { Component, Output, Input, EventEmitter, Inject } from "@angular/core";
import { TOASTR_TOKEN, IToastr } from "../services/toaster.service";

@Component({
    selector: 'counter',
    template: `
    <div class="counter"> 
        <button (click)="decrement()">
        Decrement
        </button>
            <input type="text" [value]="count">
        <button (click)="increment()">
        Increment
        </button>
    </div>
    `
})
export class CounterComponent {
    constructor(@Inject(TOASTR_TOKEN) private toastr: IToastr) {

    }

    @Input()
    count: number = 0;

    @Output()
    change = new EventEmitter();

    increment() {
        this.count++;
        this.change.emit(this.count);
        this.toastr.success(this.count.toString(), 'increment');
    }

    decrement() {
        this.count--;
        this.change.emit(this.count);
        this.toastr.success(this.count.toString(), 'decrement');
    }
}