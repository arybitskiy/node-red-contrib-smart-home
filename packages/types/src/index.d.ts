interface DefaultItem {
  value: string;
  type?: string;
  required?: boolean;
}

type Defaults<NodeConfig> = {
  [key in keyof NodeConfig]: DefaultItem;
};

type NodeClassConfig<NodeConfig> = {
  [key in keyof NodeConfig]: string;
};

type NodeClassProps = {
  category: string;
  color?: string;
  defaults: Defaults<NodeConfig>;
  inputs?: number;
  outputs?: number;
  icon?: string;
};

type NodeClassMethods<NodeConfig> = {
  label: (this: NodeClassProps & NodeClassMethods<NodeConfig> & NodeClassConfig<NodeConfig>, ...args: any) => string;
  oneditprepare?: (this: NodeClassProps & NodeClassMethods<NodeConfig> & NodeClassConfig<NodeConfig>) => void;
};

type NodeClass<NodeConfig> = NodeClassProps & NodeClassMethods<NodeConfig> & Partial<NodeClassConfig<NodeConfig>>;

interface Nodes {
  registerType: <NodeConfig>(typeName: string, typeClass: NodeClass<NodeConfig>) => void;
  node: <NodeConfig>(nodeId: string) => NodeClassProps & NodeClassMethods<NodeConfig> & NodeClassConfig<NodeConfig>;
}

interface Red {
  nodes: Nodes;
}

declare var RED: Red;

interface JQuery {
  select2(config: { [key: string]: any }): JQuery;
  typedInput(config: { [key: string]: any }): JQuery;
}
