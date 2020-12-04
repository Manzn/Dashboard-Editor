import React, {useState} from 'react';

import panelStyle from './panel.style';
import { IPanel } from './PanelControl';

export default function Panel(props: IPanel) {
    const [width, setWidth] = useState<number>(props.width);
    const [height, setHeight] = useState<number>(props.height);
    
    return (
        <div key={props.id} style={{width, height}}
             className={'panel'}>
                {props.data}
            <style jsx>{panelStyle}</style>
            <style jsx>{`
                .panel {
                    border: 1px solid #307FCA;
                }
            `}</style>
        </div>
    )
}
