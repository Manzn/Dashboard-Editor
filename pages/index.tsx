import React, { useEffect, useState } from 'react';

import layoutStyle from '../styles/layout.style';

import Panel from '../src/panel/Panel';
import { IPanel, PanelControl } from '../src/panel/PanelControl';
import { RecalculatePositions } from '../src/helper/Positioning';

export default function Home() {
  const [panels, setPanels] = useState<IPanel[]>([]);

  useEffect(() => {
    const pcSub = PanelControl.Panels.asObservable().subscribe(incomingPanels => {
      setPanels([...incomingPanels])
    });

    window.addEventListener("resize", onWindowResize);
      
    return (() => {
      pcSub.unsubscribe();
      window.removeEventListener("resize", onWindowResize)
    })
  }, []);

  function onWindowResize() {
    if (!PanelControl.Panels.value.length) return;

    let panel = PanelControl.Panels.value[0];
    onPanelResize(0, panel.width, panel.height);
  }

  function onPanelResize(idx: number, newWidth: number, newHeight: number) {
    let tmp = PanelControl.Panels.value;
    tmp[idx].width = newWidth;
    tmp[idx].height = newHeight;
    PanelControl.setPanels(RecalculatePositions(tmp));
  }

  return (
    <div className={'content-display'}>
      {panels.map((panel, index) => (
        <div key={panel.id}>
          <Panel panel={panel} onResize={(width, height) => onPanelResize(index, width, height)}/>
        </div>
      ))}
      <style jsx>{layoutStyle}</style>
    </div>
  )
}
