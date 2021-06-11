import React, { useCallback, useEffect, useState } from "react";

export interface Params {
  expandedSections: string[];
}

function getState(): Params {
  const params = new URLSearchParams(window.location.search);
  const expandedSections = params.getAll("e");
  return { expandedSections };
}

function setState({ expandedSections }: Params) {
  window.history.replaceState(
    null,
    document.title,
    `?${new URLSearchParams(
      expandedSections.map((section) => ["e", section])
    ).toString()}`
  );
}

export const ParamsContext = React.createContext({
  params: { expandedSections: [] } as Params,
  setParams: (newParams: Params) => {},
});

export const useParamsState = () => {
  const [paramsState, setParamsState] = useState<Params>({
    expandedSections: [],
  });

  const setParams = useCallback((newState) => {
    setState(newState);
    setParamsState(getState());
  }, []);

  useEffect(() => {
    const listener = () => {
      setParams(getState());
    };

    window.addEventListener("popstate", listener);

    listener();

    return () => {
      window.removeEventListener("popstate", listener);
    };
  }, [setParams]);

  return [paramsState, setParams] as [Params, (params: Params) => void];
};
