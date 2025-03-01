import { Container, Flex, Box } from "@/styles/Global"
import { Text } from "@/styles/Text"
import { Footer as FooterWrapper } from "./style"
import { UserImage } from "@/pages/home/style"
import { userData } from "@/utils/userData"
import { FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { Button } from "@/styles/Buttons"

export const Footer = (): JSX.Element => {
  return (
	<FooterWrapper id="social-media">
	  <Container>
		<Flex>
		  <UserImage
			src={`https://github.com/${userData.githubUser}.png`}
			alt={userData.nameUser}
			title={userData.nameUser}
			width={"70px"}
			height={"70px"}
		  />
		  <Box css={{ marginLeft: "$2" }}>
			<Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
			   Thank you for coming! 
			</Text>
			<Text type="body1" color="grey2">
			  Wanna know more about me?
			</Text>
			<Text type="body1" color="grey2">
			  Follow my social networks and let's talk more
			</Text>
		  </Box>
		</Flex>
		<Flex
		  css={{
			flexWrap: "wrap",
			justifyContent: "center",
			gap: "$2",
		  }}
		>

		  <Button
			className="instagram"
			type="circle"
			as="a"
			target="_blank"
			href={`https://instagram.com/${userData.instagramUser}`}
		  >
			<FaInstagram />
		  </Button>

		  <Button
			className="linkedin"
			type="circle"
			as="a"
			target="_blank"
			href={`https://linkedin.com/in/${userData.linkedinUser}`}
		  >
			<FaLinkedinIn />
		  </Button>
		</Flex>
	  </Container>
	</FooterWrapper>
  )
}
