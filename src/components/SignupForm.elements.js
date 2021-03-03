import styled from 'styled-components'
import { RiFundsBoxFill } from 'react-icons/ri'
import InputProps from './InputProps'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding-left: 60px;
  padding-top: 300px;
  
  @media screen and (max-width: 600px){
    padding: 2rem 1rem 1rem 1rem
  }
  @media screen and (max-width: 480px){
    padding: 2rem 1rem 1rem 1rem
  }
  @media screen and (max-width: 550px){
    padding: 2rem 1rem 1rem 1rem
  }
  @media screen and (min-width: 2000px){
    padding-top: 20rem;
    padding-left: 10rem
  }
`

export const Heading = styled.h1`
  color: #F5F8FA;
  padding-bottom: 10px;
`

export const Icon = styled(RiFundsBoxFill)`
  color: #1DA1F2;
  font-size: 1.2em;
  margin-right: 0.5rem;
`

export const Logo = styled.div`
  align-items: center;
  color: #1DA1F2;
  display: flex;
  font-size: 3.8em;
  justify-self: flex-start;
`

export const SubHeading = styled.h2`
  align-items: center;
  color: #F5F8FA;
  display: flex;
  font-size: 1.8em;
  justify-self: flex-start;
  padding-bottom: 20px;
  padding-left: 6px;
`

export const Description = styled.div`
  align-items: center;
  color: #8899A6;
  display: flex;
  font-size: 1rem;
  justify-self: flex-start;
  padding-bottom: 20px;
  padding-left: 6px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`

export const Input = styled(InputProps)`
  align-items: left;
  background-color: #15202b;
  color: #F5F8FA;
  border: 2px solid #8899A6;
  border-radius: 100px;
  font-size: 1rem;
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.85rem 0.85rem;
  &:focus,
  &:active {
      box-shadow: #15202b 0px 0px 2px 1px,
        #15202b 0px 0px 0px 1px;
      outline: none;
    }

  ::placeholder {
    color: #8899A6;
  }
`

export const SignUp = styled.button`
  position: absolute;
  right: 1px;
  top: 2.2px;

  cursor: pointer;
  color: #F5F8FA;
  background: #1DA1F2;
  border: 2px solid #8899A6;
  border-radius: 100px;
  font-weight: 550;
  margin-right: 0.3rem;
  margin-top: 0.65rem;
  padding: 0.65rem;
  width: 20%;

  &:focus,
  &:active {
      box-shadow: #15202b 0px 0px 2px 1px,
        #15202b 0px 0px 0px 1px;
      outline: none;
    }
  @media screen and (max-width: 520px){
    width: 25%;
  }
`

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  padding-top: 280px;
  width: 70%;

  @media screen and (max-width: 1230px) { 
    display: none;   
  }
`

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  float: right;
  max-height: 450px;
`