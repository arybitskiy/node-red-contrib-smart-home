import * as Primitive from "../../xml-primitives";

// Source files:
// http://127.0.0.1:9100/Localization.xsd

interface BaseType {}
interface _CommandClassType extends BaseType {
  id: string;
  Label: (LabelType | string)[] | string;
  Value?: ValueType[];
}
interface CommandClassType extends _CommandClassType {}

interface _GlobalTextType extends BaseType {
  Label: (LabelType | string)[] | string;
}
interface GlobalTextType extends _GlobalTextType {}

interface _HelpType extends BaseType {
  lang?: string;
  text?: string;
}
interface HelpType extends _HelpType {}

interface _ItemLabelType extends BaseType {
  itemIndex: string;
  lang?: string;
  text?: string;
}
interface ItemLabelType extends _ItemLabelType {}

interface _LabelType extends BaseType {
  lang?: string;
  text?: string;
  name?: string;
}
interface LabelType extends _LabelType {}

interface _LocalizationType extends BaseType {
  Revision: number;
  CommandClass?: CommandClassType[];
  GlobalText?: GlobalTextType[];
}
interface LocalizationType extends _LocalizationType {}

interface _ValueType extends BaseType {
  index: string;
  text?: string;
  pos?: string;
  Help: (HelpType | string)[] | string;
  ItemLabel?: ItemLabelType[];
  Label: (LabelType | string)[] | string;
}
interface ValueType extends _ValueType {}

export interface document extends BaseType {
  CommandClass: CommandClassType;
  GlobalText: GlobalTextType;
  Help: HelpType;
  ItemLabel: ItemLabelType;
  Label: LabelType;
  Localization: LocalizationType;
  Value: ValueType;
}
export var document: document;
