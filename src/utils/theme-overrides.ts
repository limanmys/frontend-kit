import type { GlobalThemeOverrides } from "naive-ui"

const themeOverrides: GlobalThemeOverrides = {
  common: {
    bodyColor: "transparent",
    primaryColor: "#3364ebFF",
    primaryColorHover: "rgba(51, 100, 235, 0.8)",
    primaryColorPressed: "rgba(51, 100, 235, 1)",
    successColor: "#22c55eFF",
    successColorHover: "rgba(34, 197, 94, 0.8)",
    successColorPressed: "rgba(34, 197, 94, 1)",
    invertedColor: "rgba(26, 32, 44, 1)",
    borderRadius: "1.2rem",
    borderRadiusSmall: "1rem",
    scrollbarBorderRadius: "8px",
    boxShadow1:
      "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
    boxShadow2:
      "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
    textColorBase: "#030711FF",
    borderColor: "rgb(239, 239, 245)",
  },
  Menu: {
    itemHeight: "50px",
  },
  DataTable: {
    thFontWeight: "600",
  },
  Notification: {
    descriptionFontSize: "8px !important",
  },
  Tree: {
    nodeHeight: "36px",
  },
}

const lightThemeOverrides: GlobalThemeOverrides = {
  ...themeOverrides,
  common: {
    ...themeOverrides.common,
  },
}

const darkThemeOverrides: GlobalThemeOverrides = {
  ...themeOverrides,
  common: {
    ...themeOverrides.common,
    baseColor: "rgb(255,255,255)",
    tableColor: "rgb(3, 7, 17)",
    tableColorHover: "rgba(7,16,39, 0.3)",
    cardColor: "rgb(3, 7, 17)",
    modalColor: "rgb(3, 7, 17)",
    popoverColor: "rgb(3, 7, 17)",
    textColor1: "rgb(255, 255, 255)",
    textColor2: "rgba(255, 255, 255, 0.8)",
    textColor3: "rgba(255, 255, 255, 0.6)",
    borderColor: "rgb(29, 40, 58)",
  },
  Modal: {
    boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.1)",
  },
  Card: {
    borderColor: "rgb(29, 40, 58)",
  },
  Tabs: {
    barColor: "#fff",
    tabColor: "#fff",
    tabTextColorActiveLine: "#fff",
  },
  Menu: {
    itemTextColorActiveHorizontal: "#fff",
    itemTextColorHoverHorizontal: "rgba(255, 255, 255, 0.6)",
    itemTextColorActiveHoverHorizontal: "rgba(255, 255, 255, 0.6)",
    itemIconColorHoverHorizontal: "rgba(255, 255, 255, 0.6)",

    itemTextColorActive: "rgb(3,7,17)",
    itemTextColorHover: "rgba(255, 255, 255, 0.6)",
    itemTextColorActiveHover: "rgba(255, 255, 255, 0.6)",
    itemIconColorHover: "rgba(255, 255, 255, 0.6)",
    itemColorActive: "rgba(255, 255, 255)",
    itemIconColorActive: "rgb(3,7,17)",
  },
}

export { lightThemeOverrides, darkThemeOverrides }