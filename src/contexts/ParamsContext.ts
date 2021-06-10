import React from "react";

export interface Params {
  expandedSections: string[];
}

export const ParamsContext = React.createContext({
  params: { expandedSections: [] } as Params,
  setParams: (newParams: Params) => {},
});
