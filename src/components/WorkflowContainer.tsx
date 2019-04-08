/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

// Styles
import './styles/workflowVis.css';

// Components
import WorkflowVisContainer from "./WorkflowVisContainer";

// Types
import { WorkflowStepT } from "../types/workflow";

interface StateT {
    editMode: boolean;
}

interface WorkflowT {
    workflowUid: string;
    workflowName: string;
    workflowSteps: WorkflowStepT[];
}

interface PropsT {
    workflow: WorkflowT;
}

export default class WorkflowContainer extends React.PureComponent<PropsT, StateT> {
    constructor(props: PropsT) {
        super(props);
        this.state = {
            editMode: false
        };
        this.boundToggleEditMode = this.toggleEditMode.bind(this);
    }

    toggleEditMode() {
        const { editMode } = this.state;
        this.setState({ editMode: !editMode });
    }

    boundToggleEditMode: () => void;

    render() {
        const { workflow } = this.props;
        const { workflowUid, workflowName, workflowSteps } = workflow;

        const { editMode } = this.state;
        const toggleEditModeLabel = editMode ? "Done" : "Edit";
        const toggleEditClassName = editMode ? "toggleEditHighlight" : "toggleEdit";

        return (
            <div>
                <div className="flexContainer">
                    <h1 style={{ maxWidth: 200 }}>{workflowName}</h1>
                    <button type="button" className={toggleEditClassName} onClick={this.boundToggleEditMode}>
                        {toggleEditModeLabel}
                    </button>
                </div>

                <WorkflowVisContainer
                    workflowUid={workflowUid}
                    workflowSteps={workflowSteps}
                    editMode={editMode}
                />
            </div>
        );
    }
}
