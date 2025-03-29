import * as React from "react";
import copy from "copy-to-clipboard";

interface CopyToClipboardOptions {
  debug?: boolean;
  message?: string;
  format?: string;
}

interface CopyToClipboardProps {
  text: string;
  onCopy?: (text: string, result: boolean) => void;
  options?: CopyToClipboardOptions;
  children: React.ReactElement;
}

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  onCopy,
  options,
  children,
  ...props
}) => {
  const onClick = React.useCallback(
    (event: React.MouseEvent) => {
      const elem = React.Children.only(children);
      const result = copy(text, options);

      if (onCopy) {
        onCopy(text, result);
      }

      // Bypass onClick if it was present
      if (elem?.props?.onClick && typeof elem.props.onClick === "function") {
        elem.props.onClick(event);
      }
    },
    [text, onCopy, options, children]
  );

  const elem = React.Children.only(children);
  return React.cloneElement(elem, { ...props, onClick });
};
