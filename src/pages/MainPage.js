import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.5) 50%,
      rgba(20, 20, 20, 1)
    ), url("http://www.kyongbuk.co.kr/news/photo/201901/1049767_331084_3623.jpg");
  background-size: cover;
`;

const MainPage = () => {
  return(
    <>
     <Header />
     <Background />
    </>
  );
};

export default MainPage;