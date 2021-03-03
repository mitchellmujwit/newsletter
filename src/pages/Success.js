import React from 'react'
import Navbar from '../components/Navbar'
import Mailto from '../components/Mailto'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet';
import {
  SuccessPageContainer,
  WelcomeHeader,
  WelcomeDesctiption,
  DescriptionParagraph,
  LatestIssue,
  ListHeader,
  LatestIssueWrapper,
  UnorderedList,
  ListItems,
  ListWrapper,
  ListItemText,
  GetInTouch,
  UnderlinedElements
} from './Success.elements'
import ScrollToTop from '../components/ScrollToTop'

const Success = () => {
  return (
    <>
      <Helmet>
        <title>InvesTech | Welcome</title>
      </Helmet>
      <Navbar />
        <SuccessPageContainer>
          <WelcomeHeader>
            Thank you for subscribing to InvesTech
          </WelcomeHeader>
          <WelcomeDesctiption>
            What you can expect: 
          </WelcomeDesctiption>
          <DescriptionParagraph>
            Every morning at 6am check your inbox for a message from us! Our emails will typically include
            stock price updates from previous close, upcoming earnings reports and emerging technologies news.
            If you're lucky we may even throw in a couple memes, Stay tuned to find out!
          </DescriptionParagraph>
          <LatestIssueWrapper>
              <LatestIssue>
              <UnderlinedElements>Check out the latest issue!</UnderlinedElements>
            </LatestIssue>
          </LatestIssueWrapper>
          <ListWrapper>
              <ListHeader>
              Want to support InvesTech even more?
            </ListHeader>
            <UnorderedList>
              <ListItems>
                <ListItemText>
                  Shop the <UnderlinedElements>InvesTech store</UnderlinedElements>
                </ListItemText>
              </ListItems>
              <ListItems>
                <ListItemText>
                  Follow us on <UnderlinedElements>Twitter</UnderlinedElements>, <UnderlinedElements>LinkedIn</UnderlinedElements>
                </ListItemText>
              </ListItems>
              <ListItems>
                <ListItemText>
                  Join our <UnderlinedElements>Discord</UnderlinedElements>
                </ListItemText>
              </ListItems>
            </UnorderedList>
          </ListWrapper>
          <GetInTouch>
            Get in touch with us directly: <Mailto><UnderlinedElements>Mitchellmujwit@protonmail.com</UnderlinedElements></Mailto>
          </GetInTouch>
        </SuccessPageContainer>
        <ScrollToTop />
      <Footer />
    </>
  )
}

export default Success
