import type { Map } from 'immutable';

export enum EdgeTypes {
  DEFAULT = 'DEFAULT',
}

export const EdgeTypesArray: EdgeTypes[] = Object.keys(EdgeTypes) as any;

export enum NodeTypes {
  MOTION_SENSOR = 'MOTION_SENSOR',
  ZONE = 'ZONE',
  OPEN_LOCK_SENSOR = 'OPEN_LOCK_SENSOR',
}

export const NodeTypesArray: NodeTypes[] = Object.keys(NodeTypes) as any;

export interface Edge {
  source: number;
  target: number;
  type: EdgeTypes;
  handleText?: string;
  handleTooltipText?: string;
  [key: string]: any;
}

export interface Node {
  id: number;
  title: string;
  x: number;
  y: number;
  type: NodeTypes;
  subtype?: string | null;
  [key: string]: any;
}

export interface EdgeDefault extends Edge {
  type: EdgeTypes.DEFAULT;
}

export interface NodeZone extends Node {
  type: NodeTypes.ZONE;
  name?: string;
  tags?: string;
}

export interface NodeMotionSensor extends Node {
  type: NodeTypes.MOTION_SENSOR;
  condition?: Map<string, any>;
}

export interface NodeOpenLockSensor extends Node {
  type: NodeTypes.OPEN_LOCK_SENSOR;
  condition?: Map<string, any>;
}

export type NodeAll = NodeZone | NodeMotionSensor | NodeOpenLockSensor;

export type EdgeAll = EdgeDefault;

export interface Graph {
  nodes: NodeAll[];
  edges: EdgeAll[];
}
