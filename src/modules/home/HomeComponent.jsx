import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OverViewComponent from "./OverViewComponent";
import TransactionsComponent from "./TransactionsComponent";
import AnalyticsComponent from "../../components/AnalyticsComponent";

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const HomeComponent = (props) => {
  const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);
  const [isAnalyticsVisible, setAnalyticsVisible] = useState(false);

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) =>
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount)
    );
    updateExpense(exp);
    updateIncome(inc);
  };

  useEffect(() => calculateBalance(), [transactions]);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };

  return (
    <Container>
      <OverViewComponent
        expense={expense}
        income={income}
        addTransaction={addTransaction}
        isAnalyticsVisible={isAnalyticsVisible}
        setAnalyticsVisible={setAnalyticsVisible}
      />
      <HomeContent>
        <div style={{ flex: 1 }}>
          {transactions?.length ? (
            <TransactionsComponent transactions={transactions} />
          ) : (
            ""
          )}
        </div>
        {isAnalyticsVisible && (
          <div style={{ flex: 1 }}>
            <AnalyticsComponent transactions={transactions} />
          </div>
        )}
      </HomeContent>
    </Container>
  );
};

export default HomeComponent;
