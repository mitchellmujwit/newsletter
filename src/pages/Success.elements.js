import styled from 'styled-components'

export const SuccessPageContainer = styled.div`
  display: flex;
  z-index: 1;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 154px;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 891px) {
    margin-bottom: 75px;
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const WelcomeHeader = styled.div`
  color: #1DA1F2;
  font-size: 2.5rem;
  font-weight: 600;
  padding-top: 1.6rem;
  padding-bottom: 1rem;
`

export const WelcomeDesctiption = styled.div`
  font-size: 1.6rem;
  color: #F5F8FA; 
  padding-bottom: 1rem;
`

export const DescriptionParagraph = styled.div`
  font-size: 1.25rem;
  color: #8899A6;
  padding-bottom: .25rem;
`

export const LatestIssueWrapper = styled.div`
  margin-right: 20rem;
  padding-bottom: 2rem;
  @media screen and (max-width: 600px){
    margin-right: 1rem;
  }
`

export const LatestIssue = styled.span`
  border-bottom: 2px solid #1DA1F2;
  color: #F5F8FA; 
  font-size: 1.25rem;
  cursor: pointer;
`

export const ListWrapper = styled.div`
  padding-right: 2rem;
`

export const ListHeader = styled.div`
  font-size: 1.25rem;
  color: #F5F8FA; 
  padding-bottom: 1rem;
`

export const UnorderedList = styled.ul`
  padding-bottom: 1rem;
`

export const ListItems = styled.li`
  color: #1DA1F2;
  margin-left: 2rem;
  padding-bottom: 2rem;
  @media screen and (max-width: 600px){
    margin-left: .3rem;
  }
`

export const ListItemText = styled.span`
  color: #F5F8FA; 
  font-size: 1.25rem;
  margin-left: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;
  @media screen and (max-width: 376px){
    font-size: 1.1rem;
  }
`

export const GetInTouch = styled.div`
  font-size: 1.25rem;
  color: #F5F8FA; 
  padding-bottom: 1rem;
`

export const UnderlinedElements = styled.span`
  border-bottom: 2px solid #1DA1F2;
  color: #F5F8FA;
  font-weight: 600;
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    color: #1DA1F2;
  }
  @media screen and (max-width: 376px){
    font-size: 1.1rem;
  }
`
