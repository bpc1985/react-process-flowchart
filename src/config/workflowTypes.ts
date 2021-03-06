// import { ActionTypeT, WorkflowStepTypeT } from "./examples/workflowTypes.smartling";
// export * from "./examples/workflowTypes.smartling";
import { ActionTypeT, NodeTypeT } from "./examples/workflowTypes.cicd";

export * from "./examples/workflowTypes.cicd";

export interface WorkflowActionT {
    primary: boolean;
    actionType: ActionTypeT | string;
    nextWorkflowStepUid: string;
}

export interface WorkflowStepT {
    workflowStepUid: string;
    workflowStepName: string;
    workflowStepType: NodeTypeT;
    workflowStepOrder: number;
    actions: WorkflowActionT[];
}
