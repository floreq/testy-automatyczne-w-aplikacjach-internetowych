export interface ControlledInputProps<TValue> {
  errorMessage?: string;
  name: string;
  onBlur: (...props: any) => void;
  onChange: (...props: any) => void;
  ref: any;
  value?: TValue;
}
