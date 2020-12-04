import React, { useEffect, useRef } from 'react';

import panelStyle from './panel.style';
import { IPanel } from './PanelControl';

export default function Panel(props: IProps) {
    const panelRef = useRef(null);
    
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            props.onResize(panelRef.current.clientWidth, panelRef.current.clientHeight);
        });
        
        observer.observe(panelRef.current, { attributes: true });

        return (() => {
            observer.disconnect();
        })
    }, [panelRef])

    return (
        <div ref={panelRef}
             key={props.panel.id} 
             style={{
                 width: props.panel.width, 
                 height: props.panel.height, 
                 left: props.panel.x, 
                 top: props.panel.y
            }}
             className={'panel'}
             onDrag={() => console.log("TODO: Drag and Drop")}>
                {props.panel.data}
            <style jsx>{panelStyle}</style>
            <style jsx>{`
                .panel {
                    border: 1px solid #307FCA;
                }
            `}</style>
        </div>
    )
}

interface IProps {
    panel: IPanel
    onResize: (newWidth: number, newHeight: number) => void
}
