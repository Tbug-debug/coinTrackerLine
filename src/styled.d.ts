import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor?: string;
    borderColor?: string;
    coinsBackground: string;
    coinBack: string;
    hoverColor?: string;
  }
}
