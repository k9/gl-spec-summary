export function InlineSection({ id, children }: { id: string; children: any }) {
  return (
    <div className="section inline-section">
      <b>{id}</b>
      <div>{children}</div>
    </div>
  );
}
