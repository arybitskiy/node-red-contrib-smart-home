import type * as NodeRed from 'node-red';

import type { NodeKeyValues } from '@sh/config-node-zwave-pick-device';

interface NodePlannerBaseProps {
  name: string;
  url: string;
  planner: string;
}

export interface NodePlannerBackend extends NodeRed.Node {}

export interface NodePlannerBackendProps extends NodePlannerBaseProps, NodeRed.NodeProperties {}

export interface NodePlannerFrontendProps extends NodePlannerBaseProps {}
