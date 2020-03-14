import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[app-twoat][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TwoAtValidator, multi: true }
  ]
})

export class TwoAtValidator implements Validator {
  validate(c: FormControl): { [key: string]: any } {
    if (c.value?.toString().split('@').length - 1 === 2) {
      return null;
    }
    return {
      TwoAt: false
    };
  }
}
