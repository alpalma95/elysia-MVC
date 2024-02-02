interface Props {
  title: string;
  scriptFile?: string;
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}

interface ScriptProps {
  scriptFile: string;
}

const ViteHead = async ({ scriptFile }: ScriptProps) => {
  const mode = Bun.env.MODE;
  const manifest =
    mode === "PROD"
      ? JSON.parse(await Bun.file("public/build/.vite/manifest.json").text())
      : null;

  return !manifest ? (
    <>
      <script type="module" src="http://localhost:5173/@vite/client"></script>
      <script
        type="module"
        src={`http://localhost:5173/frontend/${scriptFile ?? "main.ts"}`}
      ></script>
    </>
  ) : (
    <>
      <script
        type="module"
        src={`build/${manifest["frontend/" + scriptFile].file}`}
        defer
      ></script>
      <link
        rel="stylesheet"
        href={`build/${manifest["frontend/" + scriptFile].css[0]}`}
      />
    </>
  );
};

export default function PageLayout({ children, title, scriptFile }: Props) {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title} | Elysia web 1.0 app!</title>
          <ViteHead scriptFile={scriptFile ?? "main.ts"} />
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}
