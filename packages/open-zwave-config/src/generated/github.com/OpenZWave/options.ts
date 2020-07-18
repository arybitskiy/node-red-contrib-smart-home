import * as Primitive from "../../xml-primitives";

// Source files:
// http://127.0.0.1:9100/options.xsd

interface BaseType {}
interface _OptionsType extends BaseType {
  Option?: OptionType[];
}
interface OptionsType extends _OptionsType {}

interface _OptionType extends BaseType {
  name: string;
  value: string;
}
interface OptionType extends _OptionType {}

export interface document extends BaseType {
  Option: OptionType;
  Options: OptionsType;
}
export var document: document;
