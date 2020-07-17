interface DefaultItem {
  value: string;
}

interface Defaults {
  [key: string]: DefaultItem;
}

interface NodeClass {
  category: string;
  color: string;
  defaults: Defaults;
  inputs: number;
  outputs: number;
  icon: string;
  label: (...args: any) => string;
  [key: string]: any;
}

interface Nodes {
  registerType: (typeName: string, typeClass: NodeClass) => any;
}

declare var RED: {
  nodes: Nodes;
};
