import styled from 'styled-components'

export const Container=styled.div`
 padding:50px 50px;
 box-sizing:border-box;
 background:radial-gradient(circle,rgba(92,39,251,100) 0%, rgba(112,71,243,1) 100%);

`;


export const Wrapper=styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    top:600px;
    
    `;


export const Column=styled.a`
display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  color:#fff;
  `;


export const Row=styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  color:#fff;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  `;


export const Link=styled.div`
color: #fff;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
      cursor: pointer;
  }
  `;


export const Title=styled.p`
font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  `;

