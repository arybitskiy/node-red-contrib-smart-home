import * as Primitive from "../../xml-primitives";

// Source files:
// http://127.0.0.1:9100/device_classes.xsd

interface BaseType {}
interface _BasicType extends BaseType {
  key: string;
  label: string;
}
interface BasicType extends _BasicType {}

interface _DeviceClassesType extends BaseType {
  Basic?: BasicType[];
  DeviceType?: DeviceTypeType[];
  Generic?: GenericType[];
  NodeType?: NodeTypeType[];
  Role?: RoleType[];
}
interface DeviceClassesType extends _DeviceClassesType {}

interface _DeviceTypeType extends BaseType {
  basic?: string;
  command_classes?: string;
  key: string;
  label: string;
}
interface DeviceTypeType extends _DeviceTypeType {}

interface _GenericType extends BaseType {
  basic?: string;
  command_classes?: string;
  key: string;
  label: string;
  Specific?: SpecificType[];
}
interface GenericType extends _GenericType {}

interface _NodeTypeType extends BaseType {
  basic?: string;
  command_classes?: string;
  key: string;
  label: string;
}
interface NodeTypeType extends _NodeTypeType {}

interface _RoleType extends BaseType {
  basic?: string;
  command_classes?: string;
  key: string;
  label: string;
}
interface RoleType extends _RoleType {}

interface _SpecificType extends BaseType {
  basic?: string;
  command_classes?: string;
  key: string;
  label: string;
}
interface SpecificType extends _SpecificType {}

export interface document extends BaseType {
  Basic: BasicType;
  DeviceClasses: DeviceClassesType;
  DeviceType: DeviceTypeType;
  Generic: GenericType;
  NodeType: NodeTypeType;
  Role: RoleType;
  Specific: SpecificType;
}
export var document: document;
