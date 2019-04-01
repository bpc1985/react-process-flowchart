import React from 'react';
import './styles/workflowViz.css';
import {
    WorkflowStepType
} from "../types/workflow";

import { iconClassName, workflowStepConfig } from "../constants/workflowStepConfig";
import { createGrid } from "../utils/workflowVizUtils";

const Icon = ({ icon }) => {
    return (
        <div className="icon-container">
            <i className={iconClassName[icon]} />
        </div>
    );
}

const DiamondIcon = ({ icon }) => {
    return (
        <div className="icon-container-diamond">
            <i className={iconClassName[icon]} />
        </div>
    );
}

const DecisionStep = () => {
    const { icon, theme } = workflowStepConfig[WorkflowStepType.DECISION];
    return (
        <div className={`diamond flex-container theme-${theme}`}>
            <DiamondIcon icon={icon} />
        </div>
    );
}
const WorkflowStep = ({ name, type }) => {
    const { icon, theme } = workflowStepConfig[type];

    // truncate name if too long
    const displayName = name.length > 8 ? `${name.substring(0, 8)}...` : name;

    // TODO: We would like to pass down a noDropDown from props to specify all the workflow
    // types that don't want have dropdown
    const arrowHeadDown = type === WorkflowStepType.AUTHORIZE ? null : <span className="arrow-head-down" />;

    return (
        <div className={`box flex-container theme-${theme}`}>
            <Icon icon={icon} />
            <p>{displayName}{arrowHeadDown}</p>
        </div>
    );
}

const Arrow = () => (
    <div className="arrow flex-container">
        <div className="line" />
        <i className="arrow-head-right" />
    </div>
);

const TwoRowBox = ({ leftNode, rightEdge = false }) => {
    const { name, type } = leftNode;

    return (
        <div className="two-row-wrapper">
            <div className="two-row-left-box">
                <WorkflowStep name={name} type={type} />
            </div>
            {rightEdge && (
                <div className="two-row-right">
                    <Arrow />
                </div>)
            }
        </div>
    );
};

const TwoRowDiamond = () => (
    <div className="two-row-wrapper-diamond">
        <div className="two-row-left-diamond">
            <DecisionStep />
        </div>

        <div className="two-row-right">
            <Arrow />
        </div>
    </div>
);

const Column = ({ nodes, hasNext }) => nodes.map(node => (
    <div key={node.id}>
        {
            node.type === WorkflowStepType.DECISION ?
                <TwoRowDiamond />
                :
                <TwoRowBox leftNode={node} rightEdge={hasNext} />
        }
    </div>
));

const WorkflowsViz = ({ data }) => {
    const grid = createGrid(data);

    const { workflows } = data;
    let cols = grid.map(colNodes =>
        colNodes.map(node => workflows[node])
    );

    const offset = 1;
    return (
        <div id="flowchart-container">
            <div className="wrapper-with-decision-step">
                {
                    cols.map((col, i) => (
                        <div key={`col-${offset + i}`} className={`col${offset + i}`}>
                            <Column nodes={col} hasNext={i === cols.length - 1 ? false : true} />
                        </div>)
                    )
                }
            </div>
        </div>
    )
}

export default WorkflowsViz;