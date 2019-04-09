import { WorkflowStepTypeT } from "../../types/workflow";

export const workflowVisData = {
    "firstStep": "5890236e433b-auth",
    "workflowStepNodes": {
        "ba322565b1bf": {
            "id": "ba322565b1bf",
            "name": "D",
            "type": WorkflowStepTypeT.DECISION,
            "workflowStepOrder": 1,
            "nextSteps": [
                "09e6110fda58",
                "b2b5c4c7cfd7"
            ]
        },
        "297786162f15": {
            "id": "297786162f15",
            "name": "E",
            "type": WorkflowStepTypeT.POST_TRANSLATION,
            "workflowStepOrder": 3,
            "nextSteps": [
                "492b709fc90a"
            ]
        },
        "a3135bdf3aa3": {
            "id": "a3135bdf3aa3",
            "name": "Published",
            "type": WorkflowStepTypeT.PUBLISH,
            "workflowStepOrder": 5,
            "nextSteps": []
        },
        "492b709fc90a": {
            "id": "492b709fc90a",
            "name": "R",
            "type": WorkflowStepTypeT.POST_TRANSLATION,
            "workflowStepOrder": 4,
            "nextSteps": [
                "a3135bdf3aa3"
            ]
        },
        "09e6110fda58": {
            "id": "09e6110fda58",
            "name": "Translation",
            "type": WorkflowStepTypeT.TRANSLATION,
            "workflowStepOrder": 2,
            "nextSteps": [
                "297786162f15"
            ]
        },
        "b2b5c4c7cfd7": {
            "id": "b2b5c4c7cfd7",
            "name": "Translation2",
            "type": WorkflowStepTypeT.TRANSLATION,
            "workflowStepOrder": 2,
            "nextSteps": [
                "297786162f15"
            ]
        },
        "5890236e433b-auth": {
            "id": "5890236e433b-auth",
            "name": "Authorize",
            "type": WorkflowStepTypeT.AUTHORIZE,
            "nextSteps": [
                "ba322565b1bf"
            ],
            "workflowStepOrder": 0
        }
    }
};

export const matrixA = [
    ["5890236e433b-auth", "box.empty"],
    ["standard.arrowRight", "standard.empty"],
    ["ba322565b1bf", "diamond.downRight"],
    ["standard.arrowRight", "standard.arrowRight"],
    ["09e6110fda58", "b2b5c4c7cfd7"],
    ["standard.arrowRight", "standard.lineHoriz"],
    ["a3135bdf3aa3", "box.rightUpArrow"]
];

export const matrixBA = [
    ["5890236e433b-auth", "box.empty"],
    ["standard.arrowRight", "standard.empty"],
    ["ba322565b1bf", "diamond.downRight"],
    ["standard.arrowRight", "standard.arrowRight"],
    ["09e6110fda58", "b2b5c4c7cfd7"],
    ["standard.arrowRight", "standard.lineHoriz"],
    ["297786162f15", "box.rightUpArrow"],
    ["standard.arrowRight", "standard.empty"],
    ["492b709fc90a", "box.empty"],
    ["standard.arrowRight", "standard.empty"],
    ["a3135bdf3aa3", "box.empty"]
];

export const matrixBB = [
    ["5890236e433b-auth", "box.empty"],
    ["standard.arrowRight", "standard.empty"],
    ["ba322565b1bf", "diamond.downRight"],
    ["standard.arrowRight", "standard.arrowRight"],
    ["09e6110fda58", "b2b5c4c7cfd7"],
    ["standard.arrowRight", "standard.lineHoriz"],
    ["297786162f15", "box.lineHoriz"],
    ["standard.arrowRight", "standard.lineHoriz"],
    ["492b709fc90a", "box.rightUpArrow"],
    ["standard.arrowRight", "standard.empty"],
    ["a3135bdf3aa3", "box.empty"]
];
const matrixBC = [
    ["5890236e433b-auth", "box.empty"],
    ["standard.arrowRight", "standard.empty"],
    ["ba322565b1bf", "diamond.downRight"],
    ["standard.arrowRight", "standard.arrowRight"],
    ["09e6110fda58", "b2b5c4c7cfd7"],
    ["standard.arrowRight", "standard.lineHoriz"],
    ["297786162f15", "box.lineHoriz"],
    ["standard.arrowRight", "standard.lineHoriz"],
    ["492b709fc90a", "box.lineHoriz"],
    ["standard.arrowRight", "standard.lineHoriz"],
    ["a3135bdf3aa3", "box.rightUpArrow"]
];

export const matrixBD = [
    ["5890236e433b-auth", "box.empty"],
    ["standard.arrowRight", "standard.empty"],
    ["ba322565b1bf", "diamond.downRight"],
    ["standard.arrowRight", "standard.arrowRight"],
    ["09e6110fda58", "b2b5c4c7cfd7"],
    ["standard.lineHoriz", "standard.arrowRight"],
    ["box.lineHoriz", "297786162f15"],
    ["standard.lineHoriz", "standard.lineHoriz"],
    ["492b709fc90a", "box.lineHoriz"],
    ["standard.arrowRight", "standard.lineHoriz"],
    ["a3135bdf3aa3", "box.rightUpArrow"]
];
const matrixBE = [
    ["5890236e433b-auth", "box.empty"],
    ["standard.arrowRight", "standard.empty"],
    ["ba322565b1bf", "diamond.downRight"],
    ["standard.arrowRight", "standard.arrowRight"],
    ["09e6110fda58", "b2b5c4c7cfd7"],
    ["standard.lineHoriz", "standard.arrowRight"],
    ["box.lineHoriz", "297786162f15"],
    ["standard.lineHoriz", "standard.arrowRight"],
    ["box.lineHoriz", "492b709fc90a"],
    ["standard.arrowRight", "standard.lineHoriz"],
    ["a3135bdf3aa3", "box.rightUpArrow"]
];

export const matrixBF = [
    ["5890236e433b-auth", "box.empty", "box.empty"],
    ["standard.arrowRight", "standard.empty", "standard.empty"],
    ["ba322565b1bf", "diamond.downRight", "diamond.downRight"], // TODO: fix style for diamond.downRight
    ["standard.arrowRight", "standard.arrowRight", "standard.arrowRight"],
    ["09e6110fda58", "b2b5c4c7cfd7", "b2b5c4c7cfd7"],
    ["standard.lineHoriz", "standard.arrowRight", "standard.lineHoriz"],
    ["box.lineHoriz", "297786162f15", "box.lineHoriz"],
    ["standard.lineHoriz", "standard.arrowRight", "standard.lineHoriz"],
    ["box.lineHoriz", "492b709fc90a", "box.rightUpArrow"],
    ["standard.arrowRight", "standard.lineHoriz"],
    ["a3135bdf3aa3", "box.rightUpArrow", "box.empty"]
];

// const gridTestBP = [
//     ["5890236e433b-auth", "box.downRight"],
//     ["standard.lineHoriz", "standard.arrowRight"],
//     ["diamond.lineHoriz", "ba322565b1bf", "diamond.downRight"],
//     ["standard.arrowRight", "standard.arrowRight", "standard.lineHoriz"],
//     ["09e6110fda58", "b2b5c4c7cfd7", "rightUpArrow"],
//     ["standard.arrowRight", "standard.arrowRight"],
//     ["a3135bdf3aa3", "box.lineHoriz"]
// ];

export const matrices = [matrixA, matrixBA, matrixBB, matrixBC, matrixBD, matrixBE, matrixBF];