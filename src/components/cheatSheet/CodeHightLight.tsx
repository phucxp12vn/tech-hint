import { codeToHtml } from "shiki";

interface CodeHightLightProps {
  code: string;
}

const CodeHightLight = async ({ code }: CodeHightLightProps) => {
  const html = await codeToHtml(code, {
    lang: "jsx",
    theme: "github-light",
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default CodeHightLight;
