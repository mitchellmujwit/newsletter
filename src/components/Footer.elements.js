import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1a74ab;
`

export const ContentContainer = styled.p`
  background-color: #1a74ab;
  font-style: italic;
  font-size: 1.25rem;
  padding: 4rem 15rem;
  color: #F5F8FA;
  @media screen and (max-width: 991px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`