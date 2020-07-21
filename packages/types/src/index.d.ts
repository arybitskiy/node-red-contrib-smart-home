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

interface NodeExternalProps {
  id: string;
}

type NodeClassMethods<NodeConfig> = {
  label: (
    this: NodeClassProps & NodeExternalProps & NodeClassMethods<NodeConfig> & NodeClassConfig<NodeConfig>,
    ...args: any
  ) => string;
  oneditprepare?: (
    this: NodeClassProps & NodeExternalProps & NodeClassMethods<NodeConfig> & NodeClassConfig<NodeConfig>
  ) => void;
};

type NodeClass<NodeConfig> = NodeClassProps & NodeClassMethods<NodeConfig> & Partial<NodeClassConfig<NodeConfig>>;

interface Nodes {
  registerType: <NodeConfig>(typeName: string, typeClass: NodeClass<NodeConfig>) => void;
  node: <NodeConfig>(
    nodeId: string
  ) => (NodeClassProps & NodeExternalProps & NodeClassMethods<NodeConfig> & NodeClassConfig<NodeConfig>) | null;
}

interface Red {
  nodes: Nodes;
}

declare var RED: Red;

interface JQuery {
  select2(config: { [key: string]: any }): JQuery;
  select2(command: string, params: any): JQuery;
  typedInput(config: { [key: string]: any }): JQuery;
}
