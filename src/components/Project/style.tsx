import { styled,  } from "@/styles/stitches.config"
import { Flex } from "@/styles/Global"
import { Text } from "@/styles/Text"

export const ProjectStack = styled(Flex, {
	margin: "1.25rem 0 1.25rem 0",
	"@mobileLittle": {
		flexDirection: "column",
		alignItems: "self-start",
	},
})

export const ProjectStackTech = styled("span", {
	padding: "0  0.5rem",
	color: "$grey2",
	borderRadius: "$2",
	backgroundColor: "$grey1",
})

export const ProjectLinks = styled(Flex, {
	marginTop: "2.25rem",
})

export const ProjectLink = styled("a", {
	display: "flex",
	alignItems: "center",
	lineHeight: "0",

	color: "$grey2",
	fontSize: "1rem",
	fontWeight: "500",
	marginRight: "$2",

	"&:hover": {
	color: "$grey5",
	},

	[`& svg`]: {
	marginRight: "$1",
	},
})

export const ProjectTitle = styled(Text, {})

export const Project = styled("li", {
	marginTop: "2rem",
	padding: "1rem",

	border: "1px solid #ffffff0d",
	borderRadius: "1rem",

	// cursor: "pointer",
	transition: "0.3s",
	
	"&:hover": {
		backgroundColor: "$grey6",
	},
  
  
	[`&:first-child`]: {
		[`& ${ProjectTitle}:first-child`]: {
			width: "max-content",
			position: "relative",
			
			
			"@mobile": {
				width: "auto",
			},
			
			"&::before": {
				width: "max-content",
				height: "28px",
				padding: "0px 8px",

				display: "flex",
				alignItems: "center",
				justifyContent: "center",

				content: 'New',
				position: "absolute",
				top: "5px",
				right: "-4rem",

				fontSize: "14px",
				fontWeight: "400",
				fontFamily: "Inter",

				color: "var(--colors-whiteFixed)",
				backgroundColor: "$brand1",
				borderRadius: "var(--radii-1)",

				"@mobile": {
					letf: 0,
					top: "-2.5rem",
					right: "auto",
				},
			},
		},
	},
})
