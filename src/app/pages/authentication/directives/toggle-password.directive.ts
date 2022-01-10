import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTogglePassword]',
})
export class TogglePasswordDirective {
  private input: HTMLInputElement;
  private typeInput = 'password';

  constructor(private element: ElementRef<HTMLInputElement>) {
    this.input = element.nativeElement.parentElement?.querySelector('input')!;
    this.element.nativeElement.className = 'absolute right-3 top-3 pi';
    this.setEyeSlash();
  }

  @HostListener('click', ['$event'])
  private changeTypeInput(event: any) {
    this.typeInput = this.typeInputIsPassword ? 'text' : 'password';
    this.typeInputIsPassword ? this.setEyeSlash() : this.setEye();
    this.input.setAttribute('type', this.typeInput);
  }

  private get typeInputIsPassword() {
    return this.typeInput === 'password';
  }

  private setEye() {
    this.element.nativeElement.classList.remove('pi-eye-slash');
    this.element.nativeElement.classList.add('pi-eye');
  }

  private setEyeSlash() {
    this.element.nativeElement.classList.remove('pi-eye');
    this.element.nativeElement.classList.add('pi-eye-slash');
  }
}
