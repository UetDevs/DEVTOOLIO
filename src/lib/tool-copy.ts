import { getCategory } from "@/lib/categories";
import type { Tool } from "@/lib/types";

export function toolTitle(tool: Tool) {
  return tool.name.replace(/ Calculator$/i, "");
}

export function toolHowTo(tool: Tool) {
  const group = getCategory(tool.category)?.name;
  const more = group ? ` Other ${group.toLowerCase()} are linked at the bottom of this page.` : "";
  return `${tool.description} Enter your own value in the form, then copy or download the result. It stays in this browser tab.${more}`;
}
