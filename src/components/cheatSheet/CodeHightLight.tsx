import { Highlight, themes } from "prism-react-renderer";

interface CodeHightLightProps {
  code: string;
}

const CodeHightLight = ({ code }: CodeHightLightProps) => {
  return (
    <Highlight theme={themes.vsLight} code={code} language="tsx">
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeHightLight;
