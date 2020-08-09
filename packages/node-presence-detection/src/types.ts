import type * as NodeRed from 'node-red';

interface NodePresenceDetectionBaseProps {
  name: string;
}

export interface NodePresenceDetectionBackend extends NodeRed.Node {}

export interface NodePresenceDetectionBackendProps extends NodePresenceDetectionBaseProps, NodeRed.NodeProperties {}

export interface NodePresenceDetectionFrontendProps extends NodePresenceDetectionBaseProps {}
