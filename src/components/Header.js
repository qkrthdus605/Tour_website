//카테고리 헤더 상단 고정용
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'tour',
    text: '관광지'
  },
  {
    name: 'food',
    text: '음식점'
  },
  {
    name: 'hotel',
    text: '숙박'
  },
  {
    name: 'shopping',
    text: '쇼핑'
  },
  {
    name: 'culture',
    text: '문화시설'
  },
  {
    name: 'festival',
    text: '행사정보'
  }
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1px;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 768px){
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  font-family: initial;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: white;
  padding-bottom: 0.25rem;
  margin: 30px;
  &:hover{
    color: rgba(255, 153, 0, 0.8);
  }
  &.active{
    font-weight: 600;
    color: rgba(255, 153, 0, 0.8);
    &:hover{
      color: rgba(255, 153, 0, 0.5);
    }
  }
  & + &{
    margin-left: 1rem;
  }
`;

const Header = () => {
  return(
    <CategoriesBlock>
      {categories.map(c => (
        <Category 
          key={c.name}
          activeClassName="active"
          exact={c.name==='tour'}
          to={c.name === 'tour' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Header;