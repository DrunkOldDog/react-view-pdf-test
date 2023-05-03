import "./App.css";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { searchPlugin } from '@react-pdf-viewer/search';

import { useOpenLinkPlugin } from "./plugins/useOpenLinkPlugin";
import { renderToolbar } from "./components/Toolbar";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import '@react-pdf-viewer/search/lib/styles/index.css';

function App() {
  const openLinkPlugin = useOpenLinkPlugin();
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
    sidebarTabs: () => [],
  });

  const searchPluginInstance = searchPlugin({
    keyword: ['document', 'PDF'],
});

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
      <div style={{ height: "800px", width: "680px" }}>
        <Viewer
          fileUrl="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
          onPageChange={(page) => console.log("onPageChange", page)}
          plugins={[
            openLinkPlugin,
            searchPluginInstance,
            defaultLayoutPluginInstance,
          ]}
        />
      </div>
    </Worker>
  );
}

export default App;
