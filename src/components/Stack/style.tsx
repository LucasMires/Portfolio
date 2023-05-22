import { styled } from "../../styles/stitches.config"
import { keyframes } from "@stitches/react"
import { Text } from "../../styles/Text"

export const scaleUp = keyframes({
  "0%": { transform: "translateY(15%)" },
  "100%": { transform: "translateY(-140%)" },
})

export const StackCard = styled("li", {
  borderRadius: "$1",
  background: "transparent",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  cursor: "pointer",

  [`& ${Text}`]: {
    opacity: 0,
    position: "absolute",
    transform: "translateY(-15%)",

    padding: "0.4rem 1rem",
    borderRadius: "$1",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "500",

    color: "$blackFixed",
    whiteSpace: "nowrap",
    background: "$whiteFixed",
    boxShadow: "drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.12))",

    "&:before": {
      width: 0,
      height: 0,

      position: "absolute",
      zIndex: "-1",
      content: "",
      left: "50%",
      bottom: "-5px",

      borderLeft: "25px solid transparent",
      borderRight: "25px solid transparent",
      borderTop: "25px solid $whiteFixed",
      transform: "translateX(-50%)",
    },
  },

  "&:hover": {
    [`& ${Text}`]: {
      opacity: 1,
      top: 0,
      transform: "translateY(-140%)",
      animation: `${scaleUp} 200ms`,
    },
  },
})
