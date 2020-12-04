import React from 'react';

import UiButton from '../uiComponents/control/button/Button';

import layoutStyle from '../../styles/layout.style';
import { IPanel, PanelControl } from '../panel/PanelControl';
import { uuidv4 } from '../utils/Random';
import { getNextPosition } from '../helper/Positioning';

/*
let tmp: IPanel[] = [
      {id: uuidv4(), width: 600, height: 200, data: '1'},
      {id: uuidv4(), width: 700, height: 500, data: '2'},
      {id: uuidv4(), width: 600, height: 500, data: '3'},
      {id: uuidv4(),width: 150, height: 70, data: '4'}
    ]
*/

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
