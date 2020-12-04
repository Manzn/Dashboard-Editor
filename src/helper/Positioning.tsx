import { IPanel, PanelControl } from "../panel/PanelControl";

export function getNextPosition(newPanel: IPanel): IPanel {
    if (!PanelControl.Panels.value.length) {    // first element
        newPanel.x = 0;
        newPanel.y = 0;
        return newPanel;
    }

    let lastPanel: IPanel = PanelControl.Panels.value[PanelControl.Panels.value.length - 1];
    let rightEdge = lastPanel.x + lastPanel.width;
    let newRightEdge = rightEdge + newPanel.width;

    let newTopEdge = 0;
    if (newRightEdge >= window.innerWidth - 120) {    // next line
        newRightEdge = 0;

        PanelControl.Panels.value.forEach(panel => {
            let bottomEdge = panel.y + panel.height;
            if (bottomEdge > newTopEdge) {
                newTopEdge = bottomEdge + 10;
            }
        })
    } else {
        PanelControl.Panels.value.forEach(panel => {
            let bottomEdge = panel.y;
            if (bottomEdge > newTopEdge) {
                newTopEdge = bottomEdge;
            }
        })

        newRightEdge = rightEdge + 10;
    }

    return {
        id: newPanel.id,
        width: newPanel.width,
        height: newPanel.height,
        x: newRightEdge,
        y: newTopEdge,
        data: newPanel.data
    }
}

function calculateNextPosition(currentPanel: IPanel, panels: IPanel[]): IPanel {
    let lastPanel: IPanel = panels[panels.length - 1];
    let rightEdge = lastPanel.x + lastPanel.width;
    let newRightEdge = rightEdge + currentPanel.width;

    let newTopEdge = 0;
    if (newRightEdge >= window.innerWidth - 120) {    // next line
        newRightEdge = 0;

        panels.forEach(panel => {
            let bottomEdge = panel.y + panel.height;
            if (bottomEdge > newTopEdge) {
                newTopEdge = bottomEdge + 10;
            }
        })
    } else {
        panels.forEach(panel => {
            let bottomEdge = panel.y;
            if (bottomEdge > newTopEdge) {
                newTopEdge = bottomEdge;
            }
        })

        newRightEdge = rightEdge + 10;
    }

    return {
        id: currentPanel.id,
        width: currentPanel.width,
        height: currentPanel.height,
        x: newRightEdge,
        y: newTopEdge,
        data: currentPanel.data
    }
}

export function RecalculatePositions(panels: IPanel[]): IPanel[] {
    if (panels.length === 1) return panels;

    let newPanels: IPanel[] = [panels[0]];
    for (let i = 1; i < panels.length; i++) {
        newPanels.push(calculateNextPosition(panels[i], newPanels));
    }

    return newPanels;
}
