import styled from "styled-components";

type CalculatorButtonProps = {
  isLarge?: boolean;
  isOperation?: boolean;
};

export const Calculator = styled.div`
  width: 200px;
  height: 100%;
  background: #e74c3c;
`;

export const Display = styled.div`
  height: 70px;
  width: 200px;
  background-color: gray;
  padding: 30px 15px;
  box-sizing: border-box;
  font-family: "Arial";
  color: white;
  text-align: right;
`;

export const CalculatorRow = styled.div``;

export const CalculatorButtom = styled.button<CalculatorButtonProps>`
  height: 50px;
  width: ${(props) => (props.isLarge ? "100px" : "50px")};
  border: 1px solid #bbb;
  cursor: pointer;
  background-color: ${(props) => (props.isOperation ? "sandybrown" : "#ccc")};
  color: ${(props) => (props.isOperation ? "white" : "black")};
`;
