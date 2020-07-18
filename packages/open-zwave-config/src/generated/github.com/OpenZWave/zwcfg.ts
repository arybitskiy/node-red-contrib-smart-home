import * as Primitive from "../../xml-primitives";

// Source files:
// http://127.0.0.1:9100/zwcfg.xsd

interface BaseType {}
interface _AssociationsType extends BaseType {
  num_groups: string;
  Group?: GroupType[];
}
interface AssociationsType extends _AssociationsType {}

interface _CommandClassesType extends BaseType {
  CommandClass?: CommandClassType[];
}
interface CommandClassesType extends _CommandClassesType {}

interface _CommandClassType extends BaseType {
  after_mark?: CommandClassTypeAfter_markType;
  base?: string;
  create_vars?: CommandClassTypeCreate_varsType;
  getsupported?: CommandClassTypeGetsupportedType;
  id: string;
  name: string;
  override_precision?: string;
  request_flags?: string;
  version: string;
  Associations?: AssociationsType[];
  Instance?: InstanceType[];
  Value?: ValueType[];
}
interface CommandClassType extends _CommandClassType {}

type CommandClassTypeAfter_markType = "true" | "false";
interface _CommandClassTypeAfter_markType extends Primitive._string {
  content: CommandClassTypeAfter_markType;
}

type CommandClassTypeCreate_varsType = "true" | "false";
interface _CommandClassTypeCreate_varsType extends Primitive._string {
  content: CommandClassTypeCreate_varsType;
}

type CommandClassTypeGetsupportedType = "true" | "false";
interface _CommandClassTypeGetsupportedType extends Primitive._string {
  content: CommandClassTypeGetsupportedType;
}

interface _DriverType extends BaseType {
  api_capabilities: string;
  controller_capabilities: string;
  home_id: string;
  node_id: string;
  version: string;
  Node?: NodeType[];
}
interface DriverType extends _DriverType {}

interface _GroupType extends BaseType {
  auto: GroupTypeAutoType;
  index: string;
  text?: string;
  label: string;
  max_associations: string;
  Node?: GroupTypeNodeType[];
}
interface GroupType extends _GroupType {}

type GroupTypeAutoType = "true" | "false";
interface _GroupTypeAutoType extends Primitive._string {
  content: GroupTypeAutoType;
}

interface _GroupTypeNodeType extends BaseType {
  id: string;
}
interface GroupTypeNodeType extends _GroupTypeNodeType {}

interface _HelpType extends BaseType {}
interface HelpType extends _HelpType {}

interface _InstanceType extends BaseType {
  index: string;
  text?: string;
}
interface InstanceType extends _InstanceType {}

interface _ItemType extends BaseType {
  label: string;
  value: string;
}
interface ItemType extends _ItemType {}

interface _ManufacturerType extends BaseType {
  id: string;
  name: string;
  Product: ProductType;
}
interface ManufacturerType extends _ManufacturerType {}

interface _NodeType extends BaseType {
  basic?: string;
  beaming?: NodeTypeBeamingType;
  frequentListening?: NodeTypeFrequentListeningType;
  generic?: string;
  id: string;
  listening?: NodeTypeListeningType;
  location?: string;
  max_baud_rate?: string;
  name: string;
  nodeinfosupported?: NodeTypeNodeinfosupportedType;
  query_stage?: string;
  routing?: NodeTypeRoutingType;
  security?: NodeTypeSecurityType;
  specific?: string;
  type?: string;
  version?: string;
  CommandClasses: CommandClassesType;
  Manufacturer: ManufacturerType;
}
interface NodeType extends _NodeType {}

type NodeTypeBeamingType = "true" | "false";
interface _NodeTypeBeamingType extends Primitive._string {
  content: NodeTypeBeamingType;
}

type NodeTypeFrequentListeningType = "true" | "false";
interface _NodeTypeFrequentListeningType extends Primitive._string {
  content: NodeTypeFrequentListeningType;
}

type NodeTypeListeningType = "true" | "false";
interface _NodeTypeListeningType extends Primitive._string {
  content: NodeTypeListeningType;
}

type NodeTypeNodeinfosupportedType = "true" | "false";
interface _NodeTypeNodeinfosupportedType extends Primitive._string {
  content: NodeTypeNodeinfosupportedType;
}

type NodeTypeRoutingType = "true" | "false";
interface _NodeTypeRoutingType extends Primitive._string {
  content: NodeTypeRoutingType;
}

type NodeTypeSecurityType = "true" | "false";
interface _NodeTypeSecurityType extends Primitive._string {
  content: NodeTypeSecurityType;
}

interface _ProductType extends BaseType {
  id: string;
  name: string;
  type: string;
}
interface ProductType extends _ProductType {}

interface _ValueType extends BaseType {
  affects?: string;
  genre: string;
  index: string;
  text?: string;
  instance: string;
  label: string;
  max: string;
  min: string;
  poll_intensity: string;
  read_only: ValueTypeRead_onlyType;
  size?: string;
  type: string;
  units: string;
  value?: string;
  verify_changes: ValueTypeVerify_changesType;
  vindex?: string;
  write_only: ValueTypeWrite_onlyType;
  Help?: HelpType;
  Item?: ItemType[];
}
interface ValueType extends _ValueType {}

type ValueTypeRead_onlyType = "true" | "false";
interface _ValueTypeRead_onlyType extends Primitive._string {
  content: ValueTypeRead_onlyType;
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
  Associations: AssociationsType;
  CommandClass: CommandClassType;
  CommandClasses: CommandClassesType;
  Driver: DriverType;
  Group: GroupType;
  Help: HelpType;
  Instance: InstanceType;
  Item: ItemType;
  Manufacturer: ManufacturerType;
  Node: NodeType;
  Product: ProductType;
  Value: ValueType;
}
export var document: document;
