import { ReactElement } from "react";
import { ToolbarProps, ToolbarSlot } from "@react-pdf-viewer/default-layout";
import { Styled } from "./Toolbar.styles";

export const renderToolbar = (
  Toolbar: (props: ToolbarProps) => ReactElement
) => (
  <Toolbar>
    {(slots: ToolbarSlot) => {
      const {
        CurrentPageLabel,
        GoToNextPage,
        GoToPreviousPage,
        NumberOfPages,
        ZoomIn,
        ZoomOut,
      } = slots;

      return (
        <Styled.Toolbar>
          <Styled.ToolbarNavigation>
            <GoToPreviousPage />
            <GoToNextPage />
          </Styled.ToolbarNavigation>

          <Styled.ToolbarPages>
            <CurrentPageLabel />
            <span style={{ margin: "0 2px"}}>/</span>
            <NumberOfPages />
          </Styled.ToolbarPages>

          <Styled.ToolbarZoom>
            <ZoomOut />
            <ZoomIn />
          </Styled.ToolbarZoom>
        </Styled.Toolbar>
      );
    }}
  </Toolbar>
);


// import { ReactElement } from "react";
// import { ToolbarProps, ToolbarSlot } from "@react-pdf-viewer/default-layout";
// import { Styled } from "./Toolbar.styles";
// import { RotateDirection, ScrollMode, ViewMode } from "@react-pdf-viewer/core";

// export const renderToolbar = (
//   Toolbar: (props: ToolbarProps) => ReactElement
// ) => (
//   <Toolbar>
//     {(slots: ToolbarSlot) => {
//       const {
//         CurrentPageInput,
//         CurrentPageLabel,
//         CurrentScale,
//         GoToFirstPage,
//         GoToFirstPageMenuItem,
//         GoToLastPage,
//         GoToLastPageMenuItem,
//         GoToNextPage,
//         GoToNextPageMenuItem,
//         GoToPreviousPage,
//         GoToPreviousPageMenuItem,
//         NumberOfPages,
//         Download,
//         DownloadMenuItem,
//         EnterFullScreen,
//         EnterFullScreenMenuItem,
//         Open,
//         OpenMenuItem,
//         Print,
//         PrintMenuItem,
//         Rotate,
//         RotateBackwardMenuItem,
//         RotateForwardMenuItem,
//         Search,
//         ShowSearchPopover,
//         ShowProperties,
//         ShowPropertiesMenuItem,
//         SwitchScrollMode,
//         SwitchScrollModeMenuItem,
//         SwitchSelectionMode,
//         SwitchSelectionModeMenuItem,
//         SwitchTheme,
//         SwitchThemeMenuItem,
//         SwitchViewMode,
//         SwitchViewModeMenuItem,
//         Zoom,
//         ZoomIn,
//         ZoomInMenuItem,
//         ZoomOut,
//         ZoomOutMenuItem,
//       } = slots;

//       return (
//         <Styled.Toolbar>
//           <Styled.ToolbarNavigation>
//             <GoToPreviousPage />
//             <GoToNextPage />
//           </Styled.ToolbarNavigation>

//           <Styled.ToolbarPages>
//             <CurrentPageLabel />
//             <span style={{ margin: "0 2px" }}>/</span>
//             <NumberOfPages />
//           </Styled.ToolbarPages>

//           <Styled.ToolbarZoom>
//             <ZoomOut />
//             <ZoomIn />
//           </Styled.ToolbarZoom>

//           <CurrentPageInput />
//           <CurrentPageLabel />
//           <CurrentScale />
//           <GoToFirstPage />
//           <GoToFirstPageMenuItem onClick={() => console.log("clicked!")} />
//           <GoToLastPage />
//           <GoToLastPageMenuItem onClick={() => console.log("clicked!")} />
//           <GoToNextPage />
//           <GoToNextPageMenuItem onClick={() => console.log("clicked!")} />
//           <GoToPreviousPage />
//           <GoToPreviousPageMenuItem onClick={() => console.log("clicked!")} />
//           <NumberOfPages />
//           <Download />
//           <DownloadMenuItem onClick={() => console.log("clicked!")} />
//           <EnterFullScreen />
//           <EnterFullScreenMenuItem onClick={() => console.log("clicked!")} />
//           <Open />
//           <OpenMenuItem />
//           <Print />
//           <PrintMenuItem onClick={() => console.log("clicked!")} />
//           <Rotate direction={RotateDirection.Backward} />
//           <RotateBackwardMenuItem onClick={() => console.log("clicked!")} />
//           <RotateForwardMenuItem onClick={() => console.log("clicked!")} />
//           {/* <Search /> */}
//           <ShowSearchPopover />
//           <ShowProperties />
//           <ShowPropertiesMenuItem onClick={() => console.log("clicked!")} />
//           <SwitchScrollMode mode={ScrollMode.Horizontal} />
//           <SwitchScrollModeMenuItem
//             mode={ScrollMode.Horizontal}
//             onClick={() => console.log("clicked!")}
//           />
//           <SwitchSelectionMode mode={"Hand" as any} />
//           <SwitchSelectionModeMenuItem
//             mode={"Hand" as any}
//             onClick={() => console.log("clicked!")}
//           />
//           <SwitchTheme />
//           <SwitchThemeMenuItem onClick={() => console.log("clicked!")} />
//           <SwitchViewMode mode={ViewMode.DualPage} />
//           <SwitchViewModeMenuItem
//             mode={ViewMode.DualPage}
//             onClick={() => console.log("clicked!")}
//           />
//           <Zoom />
//           <ZoomIn />
//           <ZoomInMenuItem onClick={() => console.log("clicked!")} />
//           <ZoomOut />
//           <ZoomOutMenuItem onClick={() => console.log("clicked!")} />
//         </Styled.Toolbar>
//       );
//     }}
//   </Toolbar>
// );
