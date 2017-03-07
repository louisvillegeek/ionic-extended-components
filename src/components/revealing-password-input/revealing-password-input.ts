import {Component, forwardRef, ViewChild, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";
import {TextInput} from "ionic-angular";



const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RevealingPasswordInputComponent),
    multi: true
};
/**
 * A password input that can be shown or hidden
 */
@Component({
    selector: 'revealing-password-input',
    template: `
        <ion-input #input required type="{{inputType}}" [(ngModel)]="value" (blur)="onBlur()"></ion-input>
        <div class="revealing_icon_container" (click)="hideShowPassword()">
            <template [ngIf]="inputType == 'password' ">
                <ion-icon ios="ios-eye" md="ios-eye" type="checkbox" ></ion-icon>
            </template>
            <template [ngIf]="inputType == 'text' ">
                <ion-icon ios="ios-eye-off" md="ios-eye-off" type="checkbox"></ion-icon>
            </template>
        </div>
    `,
    styles: [`
        :host {
            display: flex;
            width: 100%;
        }
        .revealing_icon_container {
            z-index:999;
        }
        .revealing_icon_container ion-icon {
            font-size: 29px;
            height: 100%;
            margin: 0 18px;
            text-align: center;
        }
    `],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class RevealingPasswordInputComponent implements ControlValueAccessor {

    inputType = 'password';
    @Output() input;
    private nativeInput: TextInput;

    @ViewChild('input', {read: TextInput})
    set _nativeInput(nativeInput: TextInput) {
        this.nativeInput = nativeInput;
    }

    //The internal data model
    private innerValue: any = '';

    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = () => {};
    private onChangeCallback: (_: any) => void = () => {};

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    /**
     * When the input looses focus pass trigger the model
     */
    onBlur() {
        this.onTouchedCallback();
    }

    /**
     * Writes changes to the model made from the parent element
     * @param value
     */
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    /**
     * Sets the event given by angular 2 so we can
     * call it when we detect a change
     * @param fn
     */
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    /**
     * Switches the password input field type from 'password' to 'text' to allow users to see what they type.
     */
    hideShowPassword() {
        if (this.inputType == 'password')
            this.inputType = 'text';
        else
            this.inputType = 'password';
    }

  /**
   * Passes the focus to the native input
   */
    public setFocus() {
        this.nativeInput.setFocus();
    }

}
