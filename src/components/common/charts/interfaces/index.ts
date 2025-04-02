import { ReactElement } from 'react';

export interface IChartProvider {
  id: string;
  children: ReactElement;
}

export interface IApexChartExport {
  ctx: {
    paper: () => {
      svg: () => HTMLElement;
    };
    exportToCSV: () => void;
    exports: {
      exportToPng: () => void;
      exportToSVG: () => void;
    };
  };
}

export interface IChartContext {
  id: string;
  export: {
    svg: () => void;
    png: () => void;
    csv: () => void;
  };
}
