import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text } from "../../components/theme";
import { Chart } from "../Svgs";

const Top = () => {
  const dispatch = useDispatch();

  const { transactions } = useSelector((state) => state.trs);

  const prices = transactions.map((transaction) => transaction.price);
  const balance = prices.reduce((prev, cur) => (prev += cur), 0);
  const expense =
    prices
      .filter((price) => price < 0)
      .reduce((prev, cur) => (prev += cur), 0) * -1;

  const income = expense + balance;

  return (
    <Box paddingLeft="l" paddingRight="l" marginTop="l" style={{ paddingTop: 40 }}>
      <Box flexDirection="row" justifyContent="space-between">
        <Text variant="title" style={{ fontSize: 30, fontFamily: "RMedium", color:"black"}}>
          Expense Tracker
        </Text>
        {/* <Chart /> */}
      </Box>
      <Box flexDirection="row" justifyContent="space-between" marginTop="l">
        <Box >
          <Text
            textAlign="center"
            fontFamily="RRegular"
            color="green"
            fontSize={25}

          >
            Income
          </Text>
          <Text
            textAlign="center"
            fontFamily="SFBOLD"
            textAlign="center"
            fontSize={18}
            color="green"
            fontWeight="700"
          >
            Rs {income}
          </Text>
        </Box>
        <Box >
          <Text
            textAlign="center"
            fontFamily="RRegular"
            color="red"
            fontSize={25}

          >
            Expenses
          </Text>
          <Text
            textAlign="center"
            textAlign="center"
            fontSize={18}
            color="red"
            fontWeight="700"
            fontFamily="SFBOLD"
          >
            Rs {expense}
          </Text>
        </Box>
        <Box >
          <Text
            fontFamily="RRegular"
            textAlign="center"
            color="black"
            fontSize={25}

          >
            Balance
          </Text>
          <Text
            textAlign="center"
            fontWeight="700"
            fontFamily="SFBOLD"
            fontSize={18}
            color="black"
          >
            Rs {balance}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};



export default Top;


