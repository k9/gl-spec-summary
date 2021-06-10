import { useContext } from "react";
import { ParamsContext } from "../contexts/ParamsContext";

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
  summary,
  children,
}: {
  id: string;
  summary: any;
  children: any;
}) {
  const { params, setParams } = useContext(ParamsContext);
  const expanded = params.expandedSections.includes(id);

  return (
    <li>
      {summary}
      <button
        onClick={() => {
          setParams({
            expandedSections: expanded
              ? withoutItem(params.expandedSections, id)
              : withItem(params.expandedSections, id),
          });
        }}
      >
        {expanded ? "Collapse" : "Expand"}
      </button>
      {expanded && children}
    </li>
  );
}
