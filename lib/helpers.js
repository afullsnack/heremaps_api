import { Button } from "antd";

export const iconColor = "#3AD29F";
export const iconColor2 = "#2A60E4";
export const iconColor3 = "#2A60E4";
export const primaryColor = "#FFFFFF";
export const secondaryColor = "#FAFAFD";
export const textPrimaryColor = "#000000";
export const textSecondaryColor = "#4791FF";
export const buttonPrimaryColor = "#41085B";

// comps
export const CustomPrimaryButton = ({
  children,
  bgColor,
  textColor,
  clickHandler,
  isBlock = false,
  size = "middle",
}) => (
  <Button
    type="link"
    size={size}
    style={{
      color: textColor ?? "#FFF",
      backgroundColor: bgColor ?? "#41085B",
      borderRadius: 18,
      height: 40,
      paddingLeft: 30,
      paddingRight: 30,
    }}
    block={isBlock}
    onClick={clickHandler}
  >
    {children}
  </Button>
);
export const CustomGhostButton = ({
  children,
  bgColor,
  textColor,
  clickHandler,
  isBlock = false,
  size = "middle",
}) => (
  <Button
    type="link"
    size={size}
    style={{
      color: textColor ?? "#41085B",
      backgroundColor: bgColor ?? "#FFF",
      borderRadius: 18,
      height: 40,
      paddingLeft: 30,
      paddingRight: 30,
      border: `1px solid ${textColor ?? "#41085B"}`,
    }}
    block={isBlock}
    onClick={clickHandler}
  >
    {children}
  </Button>
);
