# MaterialColorPicker

Material color picker. `MatFormFieldControl` component built on top of `BaseSignalInput`, works with Angular signal forms and `mat-form-field`.

## Requirements

| Peer dependency | Version |
|---|---|
| `@angular/core` | ≥ 22 |
| `@angular/material` | ≥ 22 |
| `@angular/cdk` | ≥ 22 |
| `@kovalenko/base-components` | ^ 4 |

## Installation

```bash
npm install @kovalenko/material-color-picker
```

## Usage

The component is standalone, so add it to the `imports` of any component:

```typescript
import {signal} from '@angular/core';
import {form} from '@angular/forms/signals';
import {ColorPickerComponent} from '@kovalenko/material-color-picker';

@Component({
  selector: 'app',
  imports: [ColorPickerComponent],
  template: `
    <form [formRoot]="form">
      <mat-form-field>
        <mat-label>Color</mat-label>
        <ngc-color-picker [formField]="form.color" />
      </mat-form-field>
    </form>
  `,
})
export class AppComponent {
  color = signal<string | null>('#ff0000');

  form = form(this.color);
}
```

An empty selection is represented by `null`. A `#ff0000`-styled input with hidden swatch, plus a clear button to reset to `null`. Clicking the form field container opens the native color picker.

### `ColorPickerComponent`

Selector: `ngc-color-picker`

| Input | Type | Description |
|---|---|---|
| `value` | `string \| null` | Color value (hex, e.g. `#ff0000`), `null` when cleared |
| `placeholder` | `string` | Placeholder |
| `disabled` | `boolean` | Whether the control is disabled |
| `required` | `boolean` | Whether the control is required |
| `id` | `string` | Host element id |

## License

MIT
