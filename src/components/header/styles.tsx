import styled from "styled-components";

export const HeaderGlobal = styled.div`
  background-color: #41414c;
`;
export const HeaderTop = styled.div`
  width: 80%;
  padding-bottom: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const HeaderBottom = styled.div`
  padding-top: 20px;
  border-top: 0.5px solid white;
  width: 80%;
  padding-bottom: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const HeaderCounter = styled.div`
  background-color: inherit;
  width: 35%;
  display: flex;
  padding-bottom: 20px;
  justify-content: space-between;
`;

export const H1 = styled.h1`
  padding: 20px 0;
  font-size: 22px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  font-family: sans-serif;
`;
export const H2 = styled.h2`
  align-items: center;
  text-align: center;
  padding: 20px 0;
  font-size: 13px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  font-family: sans-serif;
`;

export const H3 = styled.h2`
  align-items: center;
  text-align: center;
  padding: 20px 0 5px;
  font-size: 13px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  font-family: sans-serif;
`;

export const H4 = styled.h2`
  text-align: right;
  font-size: 8px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  font-family: sans-serif;
  &:hover {
    font-size: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-decoration: underline;
  }
`;
export const Project = styled.div`
  text-align: center;
`;
export const Score = styled.div`
  font-size: 16px;
  padding-bottom: 5px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-family: sans-serif;
`;
export const Description = styled.div`
  font-size: 10px;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-family: sans-serif;
`;

export const Button = styled.button`
  font-size: 10px;
  width: 20%;
  border-radius: 5px;
  color: white;
  background-color: #f1972c;
  text-transform: uppercase;
  font-family: sans-serif;
  &::before {
    content: "➕ ";
  }
`;
export const ImgContainer = styled.img`
  margin-right: 6px;
  width: 140px;
  height: 29px;
  padding: 20px 0;
`;
export const IconUser = styled.img`
  margin-right: 6px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 7px;
  border: 2px solid #f1972c;
  &:hover {
    transform: scale(1.3);
  }
`;
export const Warning = styled.div`
  display: flex;
  align-items: center;
`;
export const IconAlert = styled.div`
  display: flex;
  padding: 20px 0;
  font-size: 12px;
  align-items: center;
  color: #f1972c;
`;
export const UserProfile = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
`;

export const UserConfig = styled.div``;
