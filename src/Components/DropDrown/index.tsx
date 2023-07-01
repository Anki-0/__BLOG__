'use client';

import { Portal, Group, Sub, RadioGroup } from '@radix-ui/react-dropdown-menu';
import InternalDropdown from './dropdown';
import Trigger from './dropdown-trigger';
import { Content, DropDownSubContent } from './dropdown-content';
import Item from './dropdown-item';
import CheckboxItem from './dropdown-checkbox';
import Separator from './dropdown-separator';
import DropdownMenuSubTrigger from './dropdown-subTrigger';
import DropdownMenuLabel from './dropdown-label';

type InternalDropDownType = typeof InternalDropdown;
type CompoundComponent = InternalDropDownType & {
  Trigger: typeof Trigger;
  SubTrigger: typeof DropdownMenuSubTrigger;
  Portal: typeof Portal;
  Content: typeof Content;
  Separator: typeof Separator;
  Item: typeof Item;
  Group: typeof Group;
  Label: typeof DropdownMenuLabel;
  CheckboxItem: typeof CheckboxItem;
  Sub: typeof Sub;
  SubContent: typeof DropDownSubContent;
  RadioGroup: typeof RadioGroup;
};

const DropDown = InternalDropdown as CompoundComponent;

DropDown.Trigger = Trigger;
DropDown.Portal = Portal;
DropDown.Content = Content;
DropDown.Separator = Separator;
DropDown.Item = Item;
DropDown.Group = Group;
DropDown.Label = DropdownMenuLabel;
DropDown.CheckboxItem = CheckboxItem;
DropDown.SubTrigger = DropdownMenuSubTrigger;
DropDown.Sub = Sub;
DropDown.SubContent = DropDownSubContent;
DropDown.RadioGroup = RadioGroup;

export default DropDown;
