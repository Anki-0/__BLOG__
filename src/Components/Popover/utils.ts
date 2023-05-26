type align = 'center' | 'start' | 'end' | undefined;
type side = 'left' | 'right' | 'bottom' | 'top' | undefined;

export type PopoverPlacement =
  | 'bottom'
  | 'bottom-end'
  | 'bottom-start'
  | 'top'
  | 'top-end'
  | 'top-start'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-top'
  | 'right-end';

const PlacementMap: Map<side, string> = new Map([
  ['bottom', 'bottom-center'],
  ['top', 'top-center'],
  ['left', 'left-center'],
  ['right', 'right-center'],
]);

type GetPlacementReturnType = {
  side: side;
  align: align;
};

export const getPlacement = (
  placement?: PopoverPlacement
): GetPlacementReturnType => {
  if (!placement) {
    const [side, align] = PlacementMap.get('bottom')?.split('-') as [
      side,
      align
    ];

    // return Bottom as default
    return { side, align };
  }

  const [side, align] = placement.split('-') as [side, align];
  return { align, side };
};
