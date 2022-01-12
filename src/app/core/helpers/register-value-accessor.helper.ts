export abstract class RegisterValueAccessor<T> {
  public value: T;
  protected _onChange!: (_: any) => void;
  protected _onTouched!: () => void;

  registerOnChange(fn: (_: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this._onTouched = fn;
  }

  writeValue(data: T) {
    this.value = data;
  }
}
