import React from 'react';

import UiButton from '../uiComponents/control/button/Button';

import layoutStyle from '../../styles/layout.style';
import { IPanel, PanelControl } from '../panel/PanelControl';
import { uuidv4 } from '../utils/Random';
import { getNextPosition } from '../helper/Positioning';

export default function Sidebar() {
    function addWidget() {
        let tmp: IPanel;
        tmp = {id: uuidv4(), width: 600, height: 200, data: PanelControl.Panels.value.length.toString()};
        tmp = getNextPosition(tmp);

        PanelControl.appendPanels(tmp);
    }

    return (
        <div className={'sidebar'}>
            Widget
            <UiButton onClick={addWidget}>
                Add
            </UiButton>
            <style jsx>{layoutStyle}</style>
        </div>
    )
}
