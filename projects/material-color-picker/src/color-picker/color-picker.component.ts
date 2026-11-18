import {Component, ElementRef, forwardRef, viewChild} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatFormFieldControl} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {BaseSignalInput} from '@kovalenko/base-components';

@Component({
  selector: 'ngc-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: forwardRef(() => ColorPickerComponent),
    },
  ],
  imports: [
    MatInput,
    MatIconButton,
    MatIcon,
  ],
})
export class ColorPickerComponent extends BaseSignalInput<string | null> {
  readonly matinput = viewChild.required<ElementRef<HTMLInputElement>>('matinput');

  override get focused(): boolean {
    return !!document.activeElement && document.activeElement === this.matinput().nativeElement;
  }

  onColorInput(event: Event): void {
    this.setValue((event.target as HTMLInputElement).value || null);
  }

  clear(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.setValue(null);
  }

  override onContainerClick(event: MouseEvent): void {
    super.onContainerClick(event);
    this.matinput().nativeElement.click();
  }

  private setValue(value: string | null): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
