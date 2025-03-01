// Styles
import { Container, Flex } from "@/styles/Global"
import { Text } from "@/styles/Text"
import { Button } from "@/styles/Buttons"

// Components
import { Stack } from "@/components/Stack"
import { Project } from "@/components/Project"
import { Contacts } from "@/components/Contacts"

// Data
import { stackData } from "@/utils/stackData"
import { userData } from "@/utils/userData"

import { FaGithub } from "react-icons/fa"

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style"

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`
  const portfolioUrl = `https://github.com/${userData.githubUser}/portfolio`

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Hi, my name is {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              I'm{" "}
              <Text as="span" type="heading1" color="brand1">
                Full Stack
              </Text>{" "}
              Web Developer,{" "}
              who really{" "}
              <Text as="span" type="heading1" color="brand1">
                enjoy 
              </Text>{" "}
              create, study and {""}
              <Text as="span" type="heading1" color="brand1">
                learn 
              </Text>{" "}
              new things.
            </Text>
            <Text type="body1" color="grey2">
              Here are some projects that I had created and with those you will understand a bit more about me and my work
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                See my portfolio source code
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            /<Text as="h2" type="heading3" color="grey2">
              Bellow you'll see few Technologies that I had study on the past 2 years:
            </Text>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                My projects
              </Text>
              <Text as="p" type="body1" color="grey2">
                Some of my{" "}
                <Text as="span" color="brand5">
                  side projects
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  )
}
