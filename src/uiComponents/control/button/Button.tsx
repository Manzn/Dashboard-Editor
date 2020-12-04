import React, { CSSProperties, ReactNodeArray } from 'react';

import uiButtonStyle from './Button.style';

export default function UiButton(props: IProps) {
    return (
        <div style={props.style} 
             className={'ui-button'} 
             onClick={props.onClick}>
            {props.children}

            <style jsx>{uiButtonStyle}</style>
            <style>{`
                .ui-button {
                    color: #d3d3d3;
                    background-color: #484F58;
                }
            `}</style>
        </div>
    )
}

interface IProps {
    children: Node | ReactNodeArray | string
    onClick?: () => void
    style?: CSSProperties
}
