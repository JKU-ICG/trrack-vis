import React from 'react';
import ReactDOM from 'react-dom';
import ProvVis from './ProvVis';
import UndoRedoButton from './UndoRedoButton';
import {EventConfig} from '../Utils/EventConfig';
import {BundleMap} from '../Utils/BundleMap';
import { toJS } from 'mobx';

import { Provenance, ProvenanceGraph, NodeID } from '@visdesignlab/trrack';

export interface ProvVisConfig {
  eventConfig?: EventConfig<any>;
  editAnnotations?: boolean;
  bundleMap?: BundleMap;
  iconOnly?: boolean;
  iconSize?: number;
  height?: number;
  width?: number;
  sideOffset?: number;
  backboneGutter?: number;
  gutter?: number;
  verticalSpace?: number;
  regularCircleRadius?: number;
  backboneCircleRadius?: number;
  regularCircleStroke?: number;
  backboneCircleStroke?: number;
  topOffset?: number;
  textSize?: number;
  linkWidth?: number;
  duration?: number;
  cellsVisArea?: number;
  legend?: boolean;
  filters?: boolean;
}

export function ProvVisCreator<T, S extends string, A>(
  node: Element,
  prov: Provenance<T, S, A>,
  callback?: (id: NodeID) => void,
  undoRedoButtons: boolean = true,
  ephemeralUndo: boolean = false,
  fauxRoot: NodeID = prov.graph.root,
  config: Partial<ProvVisConfig> = {},
  filter: Set<S> = new Set<S>()
) {
  const render = () => ReactDOM.render(
    <ProvVis
      {...config}
      root={fauxRoot}
      changeCurrent={callback}
      current={prov.graph.current}
      nodeMap={prov.graph.nodes}
      prov={prov}
      undoRedoButtons={undoRedoButtons}
      ephemeralUndo={ephemeralUndo}
      filter={filter}
    />,
    node
  );

  prov.addGlobalObserver(render);

  render();
}

export function UndoRedoButtonCreator<T, S extends string, A>(
  node: Element,
  graph: ProvenanceGraph<S, A>,
  undoCallback: () => void,
  redoCallback: () => void
) {
  ReactDOM.render(
    <UndoRedoButton
      graph={graph}
      undoCallback={undoCallback}
      redoCallback={redoCallback}
    />,
    node
  );
}
