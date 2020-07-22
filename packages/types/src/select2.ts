export interface Option {
  id: string;
  text: string;
}

export interface OptGroup {
  text: string;
  children: Option[];
}

export type DropdownOptions = (OptGroup | Option)[];
