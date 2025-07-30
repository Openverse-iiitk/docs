
export interface FileProps {
  name: string;
}

export function File({ name }: FileProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5em",
        fontFamily: "monospace",
        fontSize: "1em",
        padding: "0.2em 0.5em",
        borderRadius: "0.25em",
        background: "#161b22",
        color: "#8b949e",
        margin: "0.1em 0",
        border: "1px solid #30363d",
      }}
    >
      <span role="img" aria-label="file">📄</span>
      {name}
    </div>
  );
}
