import * as Primitive from "../../xml-primitives";

// Source files:
// http://127.0.0.1:9100/NotificationCCTypes.xsd

interface BaseType {}
interface _AlarmEventParamType extends BaseType {
  id: string;
  name: string;
  type: AlarmEventParamTypeTypeType;
  Item?: ItemType[];
}
interface AlarmEventParamType extends _AlarmEventParamType {}

type AlarmEventParamTypeTypeType =
  | "location"
  | "list"
  | "usercodereport"
  | "byte"
  | "string"
  | "duration";
interface _AlarmEventParamTypeTypeType extends Primitive._string {
  content: AlarmEventParamTypeTypeType;
}

interface _AlarmEventType extends BaseType {
  id: string;
  name: string;
  AlarmEventParam?: AlarmEventParamType;
}
interface AlarmEventType extends _AlarmEventType {}

interface _AlarmTypeType extends BaseType {
  id: string;
  name: string;
  AlarmEvent: AlarmEventType[];
}
interface AlarmTypeType extends _AlarmTypeType {}

interface _ItemType extends BaseType {
  id: string;
  label: string;
}
interface ItemType extends _ItemType {}

interface _NotificationTypesType extends BaseType {
  Revision: number;
  AlarmType: AlarmTypeType[];
}
interface NotificationTypesType extends _NotificationTypesType {}

export interface document extends BaseType {
  AlarmEvent: AlarmEventType;
  AlarmEventParam: AlarmEventParamType;
  AlarmType: AlarmTypeType;
  Item: ItemType;
  NotificationTypes: NotificationTypesType;
}
export var document: document;
