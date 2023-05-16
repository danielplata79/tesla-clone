import React from 'react'
import styled from 'styled-components'

function Section({ title, rightBtnText, leftBtnText, description, backgroundImg }) {

  return (
    <Wrap bgImage={backgroundImg}>
       <ItemText>
         <h1>{ title }</h1>
         <p>{ description }</p>
       </ItemText>
        <Buttons>
         <ButtonGroup>
              <LeftButton>
                 { leftBtnText } 
              </LeftButton>

              <RightButton>
                  { rightBtnText }
              </RightButton>
         </ButtonGroup>

         <DownArrow src="/images/down-arrow.svg" />
       </Buttons>
    </Wrap>
  )
}
 
export default Section

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between; // Vertical
    align-items: center; // Horizontal
    background-image: ${props => `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Buttons = styled.div``