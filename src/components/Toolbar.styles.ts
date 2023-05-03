import styled from "styled-components";

const Toolbar = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px 32px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;

const ToolbarNavigation = styled.div`
  display: flex;
`;

const ToolbarPages = styled.div`
  display: flex;
  align-items: center;
  color: #d1d1d1;
  font-size: 14px;
`;

const ToolbarZoom = styled.div`
  display: flex;
`;

export const Styled = { Toolbar, ToolbarNavigation, ToolbarZoom, ToolbarPages };
