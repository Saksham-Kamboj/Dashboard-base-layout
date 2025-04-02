"use client";

import { mockPhishingData } from "./latest-phishing-data";

// Define the data structure for phishing entries
export interface IPhishingData {
  id: number;
  email: string;
  status: string;
  date: string;
  risk: string;
}

interface ITableControllerResponses {
  getters: {
    title: string;
    tableData: IPhishingData[];
    enableButton: boolean;
  };
}

export function TableController(): ITableControllerResponses {
  return {
    getters: {
      title: "Latest Phishing Data",
      tableData: mockPhishingData,
      enableButton: true,
    },
  };
}
