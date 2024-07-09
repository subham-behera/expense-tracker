import React from "react";
import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ChartContainer = styled.div`
  width: 100%;
  max-width: 250px; 
  margin: 20px;
`;

const AnalyticsComponent = ({ transactions }) => {
  const expenseData = transactions.filter(t => t.type === "EXPENSE");
  const incomeData = transactions.filter(t => t.type === "INCOME");

  const data = {
    labels: ['Expense', 'Income'],
    datasets: [{
      data: [expenseData.length, incomeData.length],
      backgroundColor: ['#FF6384', '#36A2EB'],
    }]
  };

  return (
    <Container>
      <ChartContainer>
        <Pie data={data} />
      </ChartContainer>
    </Container>
  );
};

export default AnalyticsComponent;
