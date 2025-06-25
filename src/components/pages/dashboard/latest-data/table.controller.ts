"use client";

import { mockData } from "./latest-data";

// Define the data structure for phishing entries
export interface IData {
  id: number;
  email: string;
  status: string;
  date: string;
  risk: string;
}

interface ITableControllerResponses {
  getters: {
    title: string;
    tableData: IData[];
    enableButton: boolean;
  };
}

export function TableController(): ITableControllerResponses {
  return {
    getters: {
      title: "Latest Data",
      tableData: mockData,
      enableButton: true,
    },
  };
}
