import type * as NodeRed from 'node-red';

interface NodePlannerBaseProps {
  name: string;
  url: string;
  planner: string;
}

export interface NodePlannerBackend extends NodeRed.Node {}

export interface NodePlannerBackendProps extends NodePlannerBaseProps, NodeRed.NodeProperties {}

export interface NodePlannerFrontendProps extends NodePlannerBaseProps {}
