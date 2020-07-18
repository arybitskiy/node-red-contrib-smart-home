import * as Primitive from "../../xml-primitives";

// Source files:
// http://127.0.0.1:9100/device_configuration.xsd

interface BaseType {}
interface _APIcallType extends BaseType {
  function: string;
  present: APIcallTypePresentType;
}
interface APIcallType extends _APIcallType {}

type APIcallTypePresentType = "true" | "false";
interface _APIcallTypePresentType extends Primitive._string {
  content: APIcallTypePresentType;
}

interface _AssociationsType extends BaseType {
  num_groups: string;
  Group?: GroupType[];
}
interface AssociationsType extends _AssociationsType {}

interface _BitSetType extends BaseType {
  id: string;
  Help?: (HelpType | string)[] | string;
  Label?: (LabelType | string)[] | string;
}
interface BitSetType extends _BitSetType {}

interface _ChangeLogType extends BaseType {
  Entry: EntryType[];
}
interface ChangeLogType extends _ChangeLogType {}

interface _CommandClassType extends BaseType {
  action?: string;
  id: string;
  Associations?: AssociationsType[];
  Compatibility?: (CompatibilityType | string)[] | string;
  Instance?: InstanceType[];
  SensorMap?: SensorMapType[];
  SupportedModes?: SupportedModesType[];
  TriggerRefreshValue?: TriggerRefreshValueType[];
  Value?: ValueType[];
}
interface CommandClassType extends _CommandClassType {}

interface _CompatibilityType extends BaseType {
  AltTypeInterpretation?: boolean[];
  Base?: number[];
  ClassGetVersionSupported?: boolean[];
  ColorIndexBug?: boolean[];
  CreateVars?: boolean[];
  DelayNoMoreInfo?: number[];
  EndpointHint?: number[];
  ExposeRawUserCodes?: boolean[];
  ForceInstances?: boolean[];
  ForceUniqueEndpoints?: boolean[];
  ForceVersion?: number[];
  GetSupported?: boolean[];
  IgnoreMapping?: boolean[];
  IgnoreMCCapReports?: boolean[];
  Mapping?: number[];
  MapRootToEndpoint?: boolean[];
  NoRefreshAfterSet?: CompatibilityTypeNoRefreshAfterSetType[];
  OverridePrecision?: number[];
  RefreshOnWakeup?: boolean[];
  RemoveCC?: CompatibilityTypeRemoveCCType[];
  SetAsReport?: boolean[];
  VerifyChanged?: CompatibilityTypeVerifyChangedType[];
}
interface CompatibilityType extends _CompatibilityType {}

interface _CompatibilityTypeNoRefreshAfterSetType extends BaseType {
  index: string;
  text?: string;
}
interface CompatibilityTypeNoRefreshAfterSetType
  extends _CompatibilityTypeNoRefreshAfterSetType {}

interface _CompatibilityTypeRemoveCCType extends BaseType {
  index: string;
  text?: string;
}
interface CompatibilityTypeRemoveCCType
  extends _CompatibilityTypeRemoveCCType {}

interface _CompatibilityTypeVerifyChangedType extends BaseType {
  index: string;
  text?: string;
}
interface CompatibilityTypeVerifyChangedType
  extends _CompatibilityTypeVerifyChangedType {}

interface _EntryType extends BaseType {
  author: string;
  text?: string;
  date: string;
  revision: number;
}
interface EntryType extends _EntryType {}

interface _GroupType extends BaseType {
  auto?: GroupTypeAutoType;
  index: string;
  text?: string;
  label: string;
  max_associations: string;
  multiInstance?: GroupTypeMultiInstanceType;
  write_only?: GroupTypeWrite_onlyType;
  Node?: NodeType[];
}
interface GroupType extends _GroupType {}

type GroupTypeAutoType = "true" | "false";
interface _GroupTypeAutoType extends Primitive._string {
  content: GroupTypeAutoType;
}

type GroupTypeMultiInstanceType = "true" | "false";
interface _GroupTypeMultiInstanceType extends Primitive._string {
  content: GroupTypeMultiInstanceType;
}

type GroupTypeWrite_onlyType = "true" | "false";
interface _GroupTypeWrite_onlyType extends Primitive._string {
  content: GroupTypeWrite_onlyType;
}

interface _HelpType extends BaseType {
  lang?: string;
  text?: string;
}
interface HelpType extends _HelpType {}

interface _InstanceType extends BaseType {
  index: string;
  text?: string;
  label?: string;
}
interface InstanceType extends _InstanceType {}

interface _ItemType extends BaseType {
  label: string;
  lang?: string;
  text?: string;
  value: string;
}
interface ItemType extends _ItemType {}

interface _LabelType extends BaseType {
  lang?: string;
  text?: string;
}
interface LabelType extends _LabelType {}

interface _MetaDataItemType extends BaseType {
  id?: string;
  name: MetaDataItemTypeNameType;
  text?: string;
  type?: string;
}
interface MetaDataItemType extends _MetaDataItemType {}

type MetaDataItemTypeNameType =
  | "FrequencyName"
  | "Name"
  | "Description"
  | "Identifier"
  | "ZWProductPage"
  | "ProductPic"
  | "OzwInfoPage"
  | "ProductSupport"
  | "ProductPage"
  | "ResetDescription"
  | "ProductManual"
  | "InclusionDescription"
  | "ExclusionDescription"
  | "WakeupDescription";
interface _MetaDataItemTypeNameType extends Primitive._string {
  content: MetaDataItemTypeNameType;
}

interface _MetaDataType extends BaseType {
  ChangeLog?: ChangeLogType[];
  MetaDataItem: MetaDataItemType[];
}
interface MetaDataType extends _MetaDataType {}

interface _ModeType extends BaseType {
  index: string;
  text?: string;
  label: string;
}
interface ModeType extends _ModeType {}

interface _NodeType extends BaseType {
  id: string;
}
interface NodeType extends _NodeType {}

interface _ProductType extends BaseType {
  Revision: number;
  CommandClass?: CommandClassType[];
  MetaData?: MetaDataType[];
  Protocol?: ProtocolType[];
}
interface ProductType extends _ProductType {}

interface _ProtocolType extends BaseType {
  nodeinfosupported?: ProtocolTypeNodeinfosupportedType;
  refreshonnodeinfoframe?: ProtocolTypeRefreshonnodeinfoframeType;
  APIcall?: APIcallType;
}
interface ProtocolType extends _ProtocolType {}

type ProtocolTypeNodeinfosupportedType = "true" | "false";
interface _ProtocolTypeNodeinfosupportedType extends Primitive._string {
  content: ProtocolTypeNodeinfosupportedType;
}

type ProtocolTypeRefreshonnodeinfoframeType = "true" | "false";
interface _ProtocolTypeRefreshonnodeinfoframeType extends Primitive._string {
  content: ProtocolTypeRefreshonnodeinfoframeType;
}

interface _RefreshClassValueType extends BaseType {
  CommandClass: string;
  Index: string;
  Instance: string;
  RequestFlags: RefreshClassValueTypeRequestFlagsType;
}
interface RefreshClassValueType extends _RefreshClassValueType {}

type RefreshClassValueTypeRequestFlagsType = "0" | "1" | "2" | "4";
interface _RefreshClassValueTypeRequestFlagsType extends Primitive._string {
  content: RefreshClassValueTypeRequestFlagsType;
}

interface _SensorMapType extends BaseType {
  index: string;
  text?: string;
  type: string;
}
interface SensorMapType extends _SensorMapType {}

interface _SupportedModesType extends BaseType {
  Mode: ModeType[];
}
interface SupportedModesType extends _SupportedModesType {}

interface _TriggerRefreshValueType extends BaseType {
  Genre: TriggerRefreshValueTypeGenreType;
  Index: string;
  Instance: string;
  RefreshClassValue: RefreshClassValueType[];
}
interface TriggerRefreshValueType extends _TriggerRefreshValueType {}

type TriggerRefreshValueTypeGenreType = "user" | "config" | "system" | "basic";
interface _TriggerRefreshValueTypeGenreType extends Primitive._string {
  content: TriggerRefreshValueTypeGenreType;
}

interface _ValueType extends BaseType {
  affects?: string;
  bitmask?: string;
  genre: string;
  index: string;
  text?: string;
  instance?: string;
  label: string;
  length?: string;
  max?: string;
  min?: string;
  read_only?: ValueTypeRead_onlyType;
  size?: ValueTypeSizeType;
  type: ValueTypeTypeType;
  units?: string;
  value?: string;
  verify_changes?: ValueTypeVerify_changesType;
  vindex?: string;
  write_only?: ValueTypeWrite_onlyType;
  BitSet?: BitSetType[];
  Help?: (HelpType | string)[] | string;
  Item?: ItemType[];
  Label?: (LabelType | string)[] | string;
}
interface ValueType extends _ValueType {}

type ValueTypeRead_onlyType = "true" | "false";
interface _ValueTypeRead_onlyType extends Primitive._string {
  content: ValueTypeRead_onlyType;
}

type ValueTypeSizeType = "1" | "2" | "3" | "4" | "16";
interface _ValueTypeSizeType extends Primitive._string {
  content: ValueTypeSizeType;
}

type ValueTypeTypeType =
  | "bool"
  | "byte"
  | "decimal"
  | "int"
  | "list"
  | "schedule"
  | "short"
  | "string"
  | "button"
  | "raw"
  | "bitset";
interface _ValueTypeTypeType extends Primitive._string {
  content: ValueTypeTypeType;
}

type ValueTypeVerify_changesType = "true" | "false";
interface _ValueTypeVerify_changesType extends Primitive._string {
  content: ValueTypeVerify_changesType;
}

type ValueTypeWrite_onlyType = "true" | "false";
interface _ValueTypeWrite_onlyType extends Primitive._string {
  content: ValueTypeWrite_onlyType;
}

export interface document extends BaseType {
  APIcall: APIcallType;
  Associations: AssociationsType;
  BitSet: BitSetType;
  ChangeLog: ChangeLogType;
  CommandClass: CommandClassType;
  Compatibility: CompatibilityType;
  Entry: EntryType;
  Group: GroupType;
  Help: HelpType;
  Instance: InstanceType;
  Item: ItemType;
  Label: LabelType;
  MetaData: MetaDataType;
  MetaDataItem: MetaDataItemType;
  Mode: ModeType;
  Node: NodeType;
  Product: ProductType;
  Protocol: ProtocolType;
  RefreshClassValue: RefreshClassValueType;
  SensorMap: SensorMapType;
  SupportedModes: SupportedModesType;
  TriggerRefreshValue: TriggerRefreshValueType;
  Value: ValueType;
}
export var document: document;
