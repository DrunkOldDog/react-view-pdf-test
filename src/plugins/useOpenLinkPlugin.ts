import * as React from "react";
import { createStore } from "@react-pdf-viewer/core";
import type {
  Plugin,
  PluginOnAnnotationLayerRender,
} from "@react-pdf-viewer/core";

interface StoreProps {
  clickedTarget?: string;
}

export const useOpenLinkPlugin = (): Plugin => {
  const store = React.useMemo(() => createStore<StoreProps>({}), []);

  const handleClick = (e: Event) => {
    e.preventDefault();
    const href = (e.target as HTMLLinkElement).href;
    console.log("onLinkClicked", {
      link: (e.target as HTMLLinkElement).href,
    });
    store.update("clickedTarget", href);
  };

  const findLinks = (e: PluginOnAnnotationLayerRender) => {
    e.container
      .querySelectorAll('a[data-target="external"]')
      .forEach((link) => {
        link.addEventListener("click", handleClick);
      });
  };

  return {
    onAnnotationLayerRender: findLinks,
  };
};
