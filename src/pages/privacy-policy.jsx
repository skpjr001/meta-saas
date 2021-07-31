
import React from 'react'
import { Box, Text, Heading, Flex } from '@chakra-ui/react'
import Header from '../Components/Header'
import Layout from '../Components/Layout'

export default function policy() {
  return (
    <Layout>
      <Header />
      <div id="Content" className="m-5 sm:m-2 grid grid-cols-5 gap-10">
        <div className="col-span-5 sm:col-span-5 lg:col-span-1">{/*Ad Here */}</div>
        <div className="col-span-5 sm:col-span-3 lg:col-span-3">
          <div className="my-10">
          <Box w={"100%"}>
            <Heading size={"xl"} textColor={"gray.700"}>Privacy Policy</Heading>
            <Heading mt={3} size={"lg"} textColor={"purple.500"}>Who we are</Heading>
            <Flex mt={2}>
              <Text mr={1} fontSize={"lg"} textColor={"gray.600"}>
                {`Our website address is`}
              </Text>
              <Text  fontSize={"lg"} textColor={"purple.500"}><a target="_blank" href="https://metatags.site" >https://metatags.site</a></Text>
            </Flex>
            <Heading mt={3} size={"lg"} textColor={"purple.500"}>What personal data we collect and why we collect it</Heading>
            <Heading mt={3} size={"md"} textColor={"purple.300"}>Comments</Heading>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</Text>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</Text>
            <Heading mt={3} size={"md"} textColor={"purple.300"}>Media</Heading>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</Text>
            <Heading mt={3} size={"lg"} textColor={"purple.500"}>Cookies</Heading>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>A “cookie” is a small data text file that is placed in your browser and allows us to recognize you each time you visit this site(customization etc). Cookies themselves do not contain any personal information, and we do not use cookies to collect personal information. Cookies may also be used by 3rd party content providers such as newsfeeds.</Text>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>If you leave a comment on our site you may opt-in to saving your name, email address, and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</Text>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</Text>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</Text>
            <Heading mt={3} size={"md"} textColor={"purple.300"}>Embedded content from other websites</Heading>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</Text>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</Text>
            <Heading mt={3} size={"lg"} textColor={"purple.500"}>Who we share your data with</Heading>
            <Heading mt={3} size={"md"} textColor={"purple.300"}>How long we retain your data</Heading>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</Text>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</Text>
            <Heading mt={3} size={"md"} textColor={"purple.300"}>What rights you have over your data</Heading>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>If you have an account on this site or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</Text>
            <Heading mt={3} size={"md"} textColor={"purple.300"}>Where we send your data</Heading>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>Visitor comments may be checked through an automated spam detection service.</Text>
            <Heading mt={3} size={"lg"} textColor={"purple.500"}>WE RESPECT YOUR PRIVACY</Heading>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>Any personal information you provide to us including and similar to your name, address, telephone number, and e-mail address will not be released, sold, or rented to any entities or individuals outside of Metatags.</Text>
            <Heading mt={3} size={"lg"} textColor={"purple.500"}>External Sites</Heading>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>We are not responsible for the content of external internet sites. You are advised to read the privacy policy of external sites before disclosing any personal information.</Text>
            <Heading mt={3} size={"lg"} textColor={"purple.500"}>Remember The Risks Whenever You Use The Internet</Heading>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>While we do our best to protect your personal information, we cannot guarantee the security of any information that you transmit to Metatags and you are solely responsible for maintaining the secrecy of any passwords or other account information. In addition, other Internet sites or services that may be accessible through Metatags have separate data and privacy practices independent of us, and therefore we disclaim any responsibility or liability for their policies or actions.</Text>
            <Text mt={2} fontSize={"lg"} textColor={"gray.600"}>Please contact those vendors and others directly if you have any questions about their privacy policies.</Text>
          </Box>
          </div>
        </div>
        <div className="col-span-5 sm:col-span-2 lg:col-span-1">{/*Ad Here */}</div>
      </div>
    </Layout>
  )
}
