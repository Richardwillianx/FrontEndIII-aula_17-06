import { Calculator, Display, CalculatorRow, CalculatorButtom } from "./styles";

type ToolProps = {
  title: string;
};

export default function Tool({ title }: ToolProps) {
  return (
    <>
      <h1>{title}</h1>
      <Calculator>
        <Display>2 + 2 = 4</Display>
        <CalculatorRow>
          <CalculatorButtom>C</CalculatorButtom>
          <CalculatorButtom>+/-</CalculatorButtom>
          <CalculatorButtom>-</CalculatorButtom>
          <CalculatorButtom isOperation>/</CalculatorButtom>
        </CalculatorRow>

        <CalculatorRow>
          <CalculatorButtom>7</CalculatorButtom>
          <CalculatorButtom>8</CalculatorButtom>
          <CalculatorButtom>9</CalculatorButtom>
          <CalculatorButtom isOperation>*</CalculatorButtom>
        </CalculatorRow>

        <CalculatorRow>
          <CalculatorButtom>4</CalculatorButtom>
          <CalculatorButtom>5</CalculatorButtom>
          <CalculatorButtom>6</CalculatorButtom>
          <CalculatorButtom isOperation>-</CalculatorButtom>
        </CalculatorRow>

        <CalculatorRow>
          <CalculatorButtom>1</CalculatorButtom>
          <CalculatorButtom>2</CalculatorButtom>
          <CalculatorButtom>3</CalculatorButtom>
          <CalculatorButtom isOperation>+</CalculatorButtom>
        </CalculatorRow>

        <CalculatorRow>
          <CalculatorButtom isLarge>0</CalculatorButtom>
          <CalculatorButtom>,</CalculatorButtom>
          <CalculatorButtom isOperation>=</CalculatorButtom>
        </CalculatorRow>
      </Calculator>
    </>
  );
}
