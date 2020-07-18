import * as Primitive from "../../xml-primitives";

// Source files:
// http://127.0.0.1:9100/zwscene.xsd

interface BaseType {}
interface _ScenesType extends BaseType {
  version: string;
  Value?: ValueType[];
}
interface ScenesType extends _ScenesType {}

interface _ValueType extends BaseType {
  commandClassId: string;
  genre: string;
  homeId: string;
  index: string;
  text?: string;
  instance: string;
  nodeId: string;
  type: string;
}
interface ValueType extends _ValueType {}

export interface document extends BaseType {
  Scenes: ScenesType;
  Value: ValueType;
}
export var document: document;
