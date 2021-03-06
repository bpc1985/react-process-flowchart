/* eslint-disable import/no-cycle */
import { ReactNode } from "react";
import { NodeTypeT, WorkflowStepT } from "../../config";
import { EndomorphDict, PolymorphDict } from "./generic";

export interface NextNode {
    id: string;
    primary: boolean;
}

export interface WorkflowStepNodeT {
    id: string;
    workflowUid: string;
    name: string;
    type: NodeTypeT;
    isDisabled: boolean;
    workflowStepOrder: number;
    nextNodes: NextNode[];
    nextSteps: WorkflowStepT[];
    prevSteps: WorkflowStepT[];
    displayWarning?: ReactNode;
}

export interface WorkflowStepNodes { [id: string]: WorkflowStepNodeT }

export interface WorkflowVisDataT {
    firstStep: string;
    workflowStepNodes: { [id: string]: WorkflowStepNodeT };
}

export enum ColType {
    BOX = "box",
    DIAMOND = "diamond",
    STANDARD = "standard"
}

export interface CoordPairT {
    parentCoord: MatrixCoord;
    childCoord: MatrixCoord;
}

export enum ConnectorTypeT {
    BOX_CONNECTOR = "box",
    DIAMOND_CONNECTOR = "diamond",
    STANDARD_CONNECTOR = "standard"
}

export enum ConnectorName {
    DOWN_RIGHT = "downRight",
    DOWN_RIGHT_DASH = "downRightDash",
    DOWN_RIGHT_DASH_EDIT = "downRightDash.edit",
    RIGHT_UP = "rightUp",
    RIGHT_UP_ARROW = "rightUpArrow",
    ARROW_UP = "arrowUp",
    ARROW_RIGHT = "arrowRight",
    ARROW_RIGHT_EDIT = "arrowRight.edit",
    LINE_HORIZ = "lineHoriz",
    LINE_HORIZ_EDIT = "lineHoriz.edit",
    LINE_VERT = "lineVert",
    UP_RIGHT = "upRight",
    EMPTY = "empty"
}

export interface ConnectorT {
    id: string;
    name: ConnectorName;
    containerName: ContainerNameT;
    type: ConnectorTypeT;
}

interface BaseTileT<T> {
    id: string;
    name: string;
    type: T;
}

export enum ContainerNameT {
    DIAMOND = "connectorContainerDiamond",
    BOX = "connectorContainerBox",
    STANDARD = "connectorContainerStandard"
}

interface ConnectorTileT extends BaseTileT<ConnectorTypeT> {
    containerName: ContainerNameT;
}

export interface NodeTileT extends BaseTileT<NodeTypeT> {
    displayWarning?: ReactNode;
    nextNodes?: NextNode[];
    nextSteps?: WorkflowStepT[];
    prevSteps: WorkflowStepT[];
    isDisabled: boolean;
    workflowStepOrder: number;
    workflowUid: string;
}

export type GenericTileType = ConnectorTypeT | NodeTypeT | string;

export type GenericTile = NodeTileT | ConnectorTileT;

export type Matrix = string[][];

export interface MatrixCoord {
    colNum: number;
    rowNum: number;
}

export interface ConnectorToPlace {
    connectorName: ConnectorName;
    ownCoord: string;
    parentCoord: string;
}

export interface ColEntry {
    tile: GenericTile;
    matrixEntry: string;
}

export type AddChildNodeCommand = string;

export type CreateAddChildNodeCommand = ({ left, top, isEmptyBranch }: {
    left: number; top: number; isEmptyBranch: boolean;
}) => AddChildNodeCommand;


export type AddNodeParams = ({ ownCoord, parentCoord }: {
    ownCoord: string | undefined; parentCoord: string | undefined;
}) => CreateAddChildNodeCommand;

export type CreateAddNodeParams = ({
    coordToNodeId, workflowStepNodes, nodeIdToParentNodeIds
}: {
    coordToNodeId: EndomorphDict;
    workflowStepNodes: WorkflowStepNodes;
    nodeIdToParentNodeIds: PolymorphDict;
    updatePlusBtnClickParams: Function;
}) => AddNodeParams;
