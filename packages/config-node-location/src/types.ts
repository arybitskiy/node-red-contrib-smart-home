import type * as NodeRed from 'node-red';

interface ConfigNodeLocationBaseProps {
  name: string;
  tags: string;
}

export interface ConfigNodeLocationBackend extends NodeRed.Node {
  getLabel: () => string;
}

export interface ConfigNodeLocationBackendProps extends ConfigNodeLocationBaseProps, NodeRed.NodeProperties {}

export interface ConfigNodeLocationFrontendProps extends ConfigNodeLocationBaseProps {}

export type ReadAllLocationsResponse = { id: string; label: string }[];
