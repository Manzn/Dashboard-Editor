import {BehaviorSubject} from 'rxjs';

export class PanelControl {
    public static Panels = new BehaviorSubject<IPanel[]>([]);

    public static appendPanels(panel: IPanel | IPanel[]) {
        let tmp: IPanel[] = this.Panels.value;

        if (Array.isArray(panel)) {
            tmp.push(...panel);
        } else {
            tmp.push(panel);
        }

        this.Panels.next(tmp);
    }

    public static setPanels(panels: IPanel[]) {
        this.Panels.next(panels);
    }
}

export interface IPanel {
    id?: string
    x?: number,
    y?: number,
    width: number
    height: number
    data: string
}
