import { useContext } from "react";
import { ParamsContext } from "../contexts/ParamsContext";
import { Section } from "./Section";

function withoutItem(array: any[], item: any) {
  return array.filter((x) => x !== item);
}

function withItem(array: any[], item: any) {
  if (array.includes(item)) {
    return array;
  } else {
    return [...array, item];
  }
}

export function SummarizedItem({
  id,
  heading,
  summary,
  children,
}: {
  id: string;
  heading: any;
  summary: any;
  children?: any;
}) {
  const { params, setParams } = useContext(ParamsContext);
  const expanded = params.expandedSections.includes(id);

  return (
    <Section
      id={id}
      heading={
        <>
          <div>{heading}</div>
          <button
            onClick={() => {
              setParams({
                expandedSections: expanded
                  ? withoutItem(params.expandedSections, id)
                  : withItem(params.expandedSections, id),
              });
            }}
          >
            {expanded ? (
              <>
                <span>➖</span>
                <span>Collapse</span>
              </>
            ) : (
              <>
                <span>➕</span>
                <span>Expand</span>
              </>
            )}
          </button>
        </>
      }
    >
      {summary}
      {expanded && children}
    </Section>
  );
}
