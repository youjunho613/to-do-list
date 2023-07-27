import { colors } from "./colors";

export const theme = {
  mode: "light",
  dark: {
    backgroundColor: colors.dark,
    color: colors.light
  },
  light: {
    backgroundColor: colors.light,
    color: colors.dark
  },
  small: {
    fontSize: "16px",
    fontWeight: "500"
  },
  medium: {
    fontSize: "20px",
    fontWeight: "600"
  },
  large: {
    fontSize: "24px",
    fontWeight: "700"
  }
};
