import React from "react";
import {
  Delete,
  DataComponent,
  DeadLine,
  DeadLineData,
  Edit,
  GlobalComponent,
  Settings,
  Status,
  StatusData,
  TitleProject,
  TitleDeadLine,
  TitleValue,
  Value,
  ValueData,
} from "./styles";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
export default function Datagrid() {
  return (
    <>
      <GlobalComponent>
        <DataComponent>
          <TitleProject>Projeto 1</TitleProject>
          <DeadLine>
            <TitleDeadLine>Prazo</TitleDeadLine>
            <DeadLineData>3 dias pra entregar</DeadLineData>
          </DeadLine>
          <Value>
            <TitleValue>Valor</TitleValue>
            <ValueData>R$ 3.000,00</ValueData>
          </Value>
          <Status>
            <StatusData>Em andamento</StatusData>
          </Status>
          <Settings>
            <Edit>
              <EditOutlinedIcon />
            </Edit>
            <Delete>
              <DeleteOutlineIcon />
            </Delete>
          </Settings>
        </DataComponent>
      </GlobalComponent>
    </>
  );
}
