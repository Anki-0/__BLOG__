# react-popover

## Anatomy

Import all parts and piece them together.

```jsx
import * as Popover from '@radix-ui/react-popover';

export default () => (
  <Popover.Root>
    <Popover.Trigger />
    <Popover.Anchor />
    <Popover.Portal>
      <Popover.Content>
        <Popover.Close />
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
```

## API Refrence

### Popover

| **props**       | **type**                  | **default** | **description**                                                                                                                                               |
| --------------- | ------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultOpen     | `boolean`                 | -           | the open state of the popover when it is initially rendered. use when you do not need to control its open state.                                              |
| open            | `boolean`                 | -           | the controlled open state of the popover. must be used in conjunction with `onopenchange`.                                                                    |
| onOpenchange    | `(open: boolean) => void` | -           | event handler called when the open state of the popover changes.                                                                                              |
| modal           | `boolean`                 | false       | the modality of the popover. when set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers. |
| renderCloseIcon | `boolean`                 | false       | this will show close icon at the top-right corner.                                                                                                            |
| shouldFlip      | `boolean`                 | true        | When true, overrides the side andalign preferences to prevent collisions with boundary edges.                                                                 |
| style           | `CSSProperties`           | -           |                                                                                                                                                               |
| arrowHeight     | `number`                  | 5           | The width of the arrow in pixels.                                                                                                                             |
| arrowWidth      | `number`                  | 10          | The height of the arrow in pixels.                                                                                                                            |
| renderArrow     | `boolean`                 | false       | show arrow.                                                                                                                                                   |
|                 |                           |             |                                                                                                                                                               |

## Content

| **props** | **type**                                                                                                                                                                          | **default** | **description**                      |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------ |
| placement | `bottom` , `bottom-center`, `right` , `bottom` , `bottom-end` , `bottom-start` , `top` , `top-end` , `top-start` , `left` , `left-start` , `left-end` , `right-top` , `right-end` | bottom      | Position the popover against anchor. |

### For Content props look at [radix-ui/popover#content.](https://www.radix-ui.com/docs/primitives/components/popover#content)
