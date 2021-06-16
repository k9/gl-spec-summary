export function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading: any;
  children?: any;
}) {
  return (
    <div className="section">
      <h2 className="section-heading">
        <b>{id}</b> {heading}
      </h2>
      {children}
    </div>
  );
}
