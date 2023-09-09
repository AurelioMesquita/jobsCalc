import React from "react";
import {
  Button,
  Description,
  ImgContainer,
  IconAlert,
  IconUser,
  HeaderBottom,
  HeaderCounter,
  HeaderGlobal,
  HeaderTop,
  H2,
  H3,
  H4,
  Project,
  Score,
  UserConfig,
  UserProfile,
  Warning,
} from "./styles";
import jobsCalc from "../../assets/JobsCalc.png";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import ImgUser from "../../assets/Aurelio.jpeg";

export default function Header() {
  return (
    <HeaderGlobal>
      <HeaderTop>
        <ImgContainer src={jobsCalc} alt="jobCalc" />
        <Warning>
          <IconAlert>
            <ReportGmailerrorredIcon />
          </IconAlert>
          <H2>Voce tem 2 mensagens</H2>
        </Warning>
        <UserProfile>
          <UserConfig>
            <H3>Aurélio</H3>
            <H4>ver perfil</H4>
          </UserConfig>
          <IconUser src={ImgUser} className="active" alt="foguete" />
        </UserProfile>
      </HeaderTop>
      <HeaderBottom>
        <HeaderCounter>
          <Project>
            <Score>12</Score>
            <Description>Projetos ao total</Description>
          </Project>
          <Project>
            <Score>5</Score>
            <Description>Em andamento</Description>
          </Project>
          <Project>
            <Score>1</Score>
            <Description>Encerrados</Description>
          </Project>
        </HeaderCounter>
        <Button>Adicionar novo job</Button>
      </HeaderBottom>
    </HeaderGlobal>
  );
}
