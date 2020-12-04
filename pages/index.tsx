import React, { useEffect, useState } from 'react';

import layoutStyle from '../styles/layout.style';

import Panel from '../src/panel/Panel';
import { IPanel, PanelControl } from '../src/panel/PanelControl';
import { uuidv4 } from '../src/utils/Random';

export default function Home() {
  const [panels, setPanels] = useState<IPanel[]>([]);

  useEffect(() => {
    const pcSub = PanelControl.Panels.asObservable().subscribe(incomingPanels => {
      setPanels([...incomingPanels])
    });

    let tmp: IPanel[] = [
      {id: uuidv4(), width: 600, height: 200, data: '1'},
      {id: uuidv4(), width: 700, height: 500, data: '2'},
      {id: uuidv4(), width: 600, height: 500, data: '3'},
      {id: uuidv4(), width: 150, height: 70, data: '4'}
    ]

    // Initial Test Routine -> Place API-Call here
    PanelControl.appendPanels(tmp);

    return (() => {
      pcSub.unsubscribe();
    })
  }, []);

  return (
    <div className={'content-display'}>
      {panels.map(panel => (
        <div key={panel.id}>
          <Panel height={panel.height} width={panel.width} data={panel.data}/>
        </div>
      ))}
      <style jsx>{layoutStyle}</style>
    </div>
  )
}
