import React, { useState, MouseEvent } from "react";
import { CopyToClipboard, type CopyToClipboardOptions, type CopyToClipboardProps, type ChildProps } from "../src";

const onClick = (event: MouseEvent<HTMLElement>) => {
  console.log(`Clicked on "${event.currentTarget.innerHTML}"!`);
};

const App: React.FC = () => {
  const [value, setValue] = useState("some\ntext");
  const [copied, setCopied] = useState(false);

  const onChange = ({ target }: { target: { value: string } }) => {
    setValue(target.value);
    setCopied(false);
  };

  const onCopy: CopyToClipboardProps["onCopy"] = (text, result) => {
    console.log(`Copied text: ${text}, Success: ${result}`);
    setCopied(true);
  };

  const copyOptions: CopyToClipboardOptions = {
    debug: true,
    message: "Copied to clipboard.",
    format: "text/plain"
  };

  const buttonProps: ChildProps = {
    onClick,
    style: { cursor: "pointer" }
  };

  return (
    <div className="app">
      <h1>react-copy-to-clipboard-ts</h1>
      <section className="section">
        <textarea onChange={onChange} rows={2} cols={10} value={value} />
      </section>
      <section className="section">
        <h2>1. Button</h2>
        <CopyToClipboard onCopy={onCopy} text={value} options={copyOptions}>
          <button type="button">Copy to clipboard with button</button>
        </CopyToClipboard>
      </section>
      <section className="section">
        <h2>2. Span</h2>
        <CopyToClipboard onCopy={onCopy} text={value} options={copyOptions}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>
      </section>
      <section className="section">
        <h2>3. with onClick</h2>
        <CopyToClipboard onCopy={onCopy} text={value} options={copyOptions}>
          <button type="button" {...buttonProps}>
            Copy to clipboard with onClick prop
          </button>
        </CopyToClipboard>
      </section>
      <section className="section">
        {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
      </section>
      <section className="section">
        <textarea cols={22} rows={3} style={{ marginTop: "1em" }} />
      </section>
    </div>
  );
};

export default App;
