import { useMemo, useState } from "react";
import Markdown from "react-markdown";

export function useMarkdown(initialText: string = "") {
  const [markdown, setMarkdown] = useState(initialText);
  const MarkdownComponent = useMemo(() => <Markdown>{markdown}</Markdown>, [markdown]);
  return [MarkdownComponent, setMarkdown];
}
