# Storybook Angular Wrapper

This decorator allows you to wrap all your stories with a template:

```typescript
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { angularWrapper } from 'storybook-angular-wrapper';
import { YourModule } from '../path/to/your.module';

storiesOf('Your component', module)
  .addDecorator(
    moduleMetadata({
      imports: [YourModule],
    }),
  )
  .addDecorator(
    angularWrapper(
      `
        <div style="margin: 3em">
        @{template}
        </div>`,
      '@{template}',
    ),
  )
  .add('with items', () => ({
    template: `
        <your-component [prop1]="prop1"></your-component>
    `,
    props: {
      prop1: [
        {
          id: 1,
          first: 'Carlos',
          last: 'Vega',
          handle: '@alterx',
          status: 'active',
        },
      ],
    },
  }))
  .add('no items', () => ({
    template: `
        <your-component [prop1]="prop1"></your-component>
    `,
    props: {
      prop1: [],
    },
  }));
```

This will result in a `3em` margin applied to both stories.

# Installation

`yarn add -D storybook-angular-wrapper`

or

`npm i --save-dev storybook-angular-wrapper`

# Disclaimer

This works better with `template` stories, it does support `component` stories but this is a mode that's limited and should only be used under certain very specific circumstances.
