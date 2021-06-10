import { Page } from "./Page";
import { Params, ParamsContext } from "../contexts/ParamsContext";
import { useCallback, useEffect, useState } from "react";

export function getState(): Params {
  const params = new URLSearchParams(window.location.search);
  const expandedSections = params.getAll("e");
  return { expandedSections };
}

export function setState({ expandedSections }: Params) {
  window.history.replaceState(
    null,
    document.title,
    `?${new URLSearchParams(
      expandedSections.map((section) => ["e", section])
    ).toString()}`
  );
}

export function App() {
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

    return () => {
      window.removeEventListener("popstate", listener);
    };
  }, [setParams]);

  return (
    <ParamsContext.Provider value={{ params: paramsState, setParams }}>
      <Page />
    </ParamsContext.Provider>
  );
}
