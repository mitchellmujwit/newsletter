import React from 'react'
import {Formik, Form } from 'formik'
import { 
  PageContainer,
  FormContainer,
  Icon,
  Logo,
  SubHeading,
  Description,
  Input,
  InputWrapper,
  SignUp,
  ImgWrapper,
  Img
} from './SignupForm.elements'
import * as yup from 'yup'
const SignupForm = ({ history }) => {
  return (
    <>
    <PageContainer>
      <FormContainer>
        <Formik
          initialValues={{
            email: ''
          }} validationSchema={yup.object({
            email: yup.string()
            .email('Invalid Email')
            .required('Required')
          })}
          onSubmit={() => {
            setTimeout(() => {
              history.push('/welcome')
            }, 400)
          }}
        >
          <Form>
            <Logo>
              <Icon />
                InvesTech
              </Logo>
              <SubHeading>Finance and tech news to your email every morning</SubHeading>
              <Description>Never spam only up to date news in the sectors you care about. 
                Always free always informative always fun. </Description>
              <InputWrapper>
                <Input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="InvesTech@gmail.com"
                  maxLength="45"
                  required={true}
                  valid={Formik.touched && !Formik.errors}
                  error={Formik.touched && Formik.errors}
                />
              <SignUp type="submit">
                Sign Up
              </SignUp>
            </InputWrapper>
          </Form>
        </Formik>
      </FormContainer>
      <ImgWrapper>
        <Img src={require('../images/subscribe.svg').default}/>
      </ImgWrapper>
    </PageContainer>
    </>
  )
}

export default SignupForm
