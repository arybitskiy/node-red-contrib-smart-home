import type * as NodeRed from 'node-red';

import { NodeTypes } from './frontend/types';

interface NodePresenceDetectionBaseProps {
  name: string;
  graph: string;
}

export interface NodePresenceDetectionBackend extends NodeRed.Node {}

export interface NodePresenceDetectionBackendProps extends NodePresenceDetectionBaseProps, NodeRed.NodeProperties {}

export interface NodePresenceDetectionFrontendProps extends NodePresenceDetectionBaseProps {}

export interface NodeNormalized {
  id: number;
  type: NodeTypes;
  dependents: number[];
  dependencies: number[];
  title: string;
  tags?: string;
  value?: boolean;
  valueChangedAt: number;
  condition?: any;
  nodeId?: string;
}

export interface NodesNormalized {
  [nodeId: number]: NodeNormalized;
}
