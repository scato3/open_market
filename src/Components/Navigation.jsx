import React from "react";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Header>
      <TopNav>
        <li>
          <Img src="img/Logo-hodu.png" alt="호두 이미지" />
          <div className="inputSearchWrap">
            <LabelStyle htmlFor="inputSearch" />
            <InputSearch
              type="text"
              id="inputSearch"
              placeholder=" 상품을 검색해보세요!"
            />
            <button type="button"></button>
          </div>
        </li>
        <li>
          <div className="navBtn cart">
            <button type="button"></button>
            <span>장바구니</span>
          </div>
          <div className="navBtn myPage">
            <button type="button"></button>
            <span>마이페이지</span>
          </div>
        </li>
      </TopNav>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  height: 90px;
`;

const TopNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  margin-right: 20px;
  height: 40px;
`;

const LabelStyle = styled.label`
  display: flex;
`;
const InputSearch = styled.input`
  border: 2.5px solid #218060;
  border-radius: 50px;
`;
