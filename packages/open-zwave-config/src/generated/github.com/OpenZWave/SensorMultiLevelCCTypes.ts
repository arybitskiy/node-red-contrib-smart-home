import * as Primitive from "../../xml-primitives";

// Source files:
// http://127.0.0.1:9100/SensorMultiLevelCCTypes.xsd

interface BaseType {}
interface _SensorScaleType extends BaseType {
  id: string;
  name: string;
}
interface SensorScaleType extends _SensorScaleType {}

interface _SensorTypesType extends BaseType {
  Revision: number;
  SensorType: SensorTypeType[];
}
interface SensorTypesType extends _SensorTypesType {}

interface _SensorTypeType extends BaseType {
  id: string;
  name: string;
  SensorScale: SensorScaleType[];
}
interface SensorTypeType extends _SensorTypeType {}

export interface document extends BaseType {
  SensorScale: SensorScaleType;
  SensorType: SensorTypeType;
  SensorTypes: SensorTypesType;
}
export var document: document;
