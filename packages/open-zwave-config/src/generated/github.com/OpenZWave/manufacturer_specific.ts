import * as Primitive from "../../xml-primitives";

// Source files:
// http://127.0.0.1:9100/manufacturer_specific.xsd

interface BaseType {}
interface _ManufacturerSpecificDataType extends BaseType {
  Revision: number;
  Manufacturer?: ManufacturerType[];
}
interface ManufacturerSpecificDataType extends _ManufacturerSpecificDataType {}

interface _ManufacturerType extends BaseType {
  id: string;
  name: string;
  Product?: ProductType[];
}
interface ManufacturerType extends _ManufacturerType {}

interface _ProductType extends BaseType {
  config?: string;
  id: string;
  name: string;
  type: string;
}
interface ProductType extends _ProductType {}

type ProductTypeConfigType = string;
type _ProductTypeConfigType = Primitive._string;

export interface document extends BaseType {
  Manufacturer: ManufacturerType;
  ManufacturerSpecificData: ManufacturerSpecificDataType;
  Product: ProductType;
}
export var document: document;
