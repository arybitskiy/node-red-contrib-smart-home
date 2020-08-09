import React, { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { GraphView } from 'react-digraph';
import { noop } from 'lodash';

import { GraphContainer, GraphEditorContainer, ToolbarContainer } from './styled';
import { NodeTypesDefinition, EdgeTypesDefinition, NodeSubtypesDefinition } from './graphConfig';
import { NodeTypesArray, NodeTypes, EdgeTypes } from './types';
import type { NodeAll, EdgeAll, Graph } from './types';
import { EntityEditor } from './EntityEditor';

const NODE_KEY = 'id'; // Allows D3 to correctly update DOM

interface GraphEditorProps {
  graph: Graph;
  onChange: (graph: Graph) => void;
}

export const GraphEditor: FunctionComponent<GraphEditorProps> = ({ graph, onChange }) => {
  const [nodes, setNodes] = useState(graph.nodes);
  const [edges, setEdges] = useState(graph.edges);
  const [selected, setSelected] = useState<NodeAll | EdgeAll | null>(null);

  const handleUpdateNode = useCallback(
    (node: NodeAll) => {
      setNodes(nodes =>
        nodes.map((currentNode: NodeAll) => {
          if (node.id === currentNode.id) {
            return node;
          }

          return currentNode;
        })
      );
      if (selected && selected.id === node.id) {
        setSelected(node);
      }
    },
    [setNodes, setSelected, selected]
  );

  const handleDeleteNode = useCallback(
    (node: NodeAll) => {
      setNodes(nodes =>
        nodes.filter((currentNode: NodeAll) => {
          if (node.id === currentNode.id) {
            return false;
          }

          return true;
        })
      );
      setEdges(edges =>
        edges.filter((edge: EdgeAll) => {
          if (edge.source === node.id || edge.target === node.id) {
            return false;
          }

          return true;
        })
      );
    },
    [setNodes, setEdges]
  );

  const handleCreateEdge = useCallback(
    (sourceNode: NodeAll, targetNode: NodeAll) => {
      const edge: EdgeAll = {
        source: sourceNode.id,
        target: targetNode.id,
        type: EdgeTypes.DEFAULT,
      };
      setEdges(edges => [edge, ...edges]);
      setSelected(edge);
    },
    [setEdges, setSelected]
  );

  const handleSwapEdge = useCallback(
    (sourceNode: NodeAll, targetNode: NodeAll, edge: EdgeAll) => {
      const changedEdge: EdgeAll = {
        source: sourceNode.id,
        target: targetNode.id,
        type: EdgeTypes.DEFAULT,
      };
      setEdges(edges =>
        edges.map(currentEdge => {
          if (currentEdge === edge) {
            return changedEdge;
          }

          return currentEdge;
        })
      );
      setSelected(changedEdge);
    },
    [setEdges, setSelected]
  );

  const handleDeleteEdge = useCallback(
    (edge: EdgeAll) => {
      setEdges(edges => edges.filter((currentEdge: EdgeAll) => currentEdge !== edge));
    },
    [setEdges]
  );

  const handleAddStartNode = useCallback(
    e => {
      const nodeType: NodeTypes = e.currentTarget.dataset.nodeType;
      const node: NodeAll = {
        id: Date.now(),
        title: nodeType,
        type: nodeType,
        x: 0,
        y: 0,
      };
      setNodes(currentNodes => [node, ...currentNodes]);
      setSelected(node);
    },
    [setNodes, setSelected]
  );

  useEffect(() => {
    onChange({ nodes, edges });
  }, [onChange, nodes, edges]);

  return (
    <GraphEditorContainer>
      <GraphContainer>
        <GraphView
          nodeKey={NODE_KEY}
          nodes={nodes}
          edges={edges}
          selected={selected}
          nodeTypes={NodeTypesDefinition}
          nodeSubtypes={NodeSubtypesDefinition}
          edgeTypes={EdgeTypesDefinition}
          onSelectNode={setSelected as any}
          onCreateNode={noop}
          onUpdateNode={handleUpdateNode as any}
          onDeleteNode={handleDeleteNode}
          onSelectEdge={setSelected as any}
          onCreateEdge={handleCreateEdge as any}
          onSwapEdge={handleSwapEdge as any}
          onDeleteEdge={handleDeleteEdge as any}
        />
      </GraphContainer>
      <ToolbarContainer>
        {NodeTypesArray.map(nodeType => (
          <div key={nodeType}>
            <button data-node-type={nodeType} onClick={handleAddStartNode}>
              Add {nodeType}
            </button>
          </div>
        ))}
        <EntityEditor entity={selected} onNodeChange={handleUpdateNode} />
      </ToolbarContainer>
    </GraphEditorContainer>
  );
};
