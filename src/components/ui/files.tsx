
export interface FilesProps {
  children: React.ReactNode;
}

export function Files({ children }: FilesProps) {
  return (
    <div
      style={{
        border: "1px solid #30363d",
        borderRadius: "0.5em",
        padding: "1em",
        background: "#161b22",
        margin: "1em 0",
        color: "#c9d1d9",
      }}
    >
      {children}
    </div>
  );
}

export interface FolderProps {
  name: string;
  children?: React.ReactNode;
}

export function Folder({ name, children }: FolderProps) {
  return (
    <div style={{ marginLeft: "1em", marginTop: "0.5em" }}>
      <div
        style={{
          fontWeight: 600,
          fontFamily: "monospace",
          color: "#58a6ff",
          background: "#161b22",
        }}
      >
        <span role="img" aria-label="folder">📁</span> {name}
      </div>
      <div style={{ marginLeft: "1.5em" }}>{children}</div>
    </div>
  );
}
