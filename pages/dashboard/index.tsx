import { Table } from "antd";
import axios from "axios";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;
const Wrapper = styled.div`
  padding: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Dashboard = () => {
  const router = useRouter();

  const bearerToken = "jwt_token from login api";

  const config = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  };
  axios
    .post(
      "https://jp-dev.cityremit.global/web-api/transaction-manager/v1/admin/dashboard/search",
      config
    )
    .then((res) => console.log(res));

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const columns = [
    {
      title: "Company Name",
      dataIndex: "company_name",
      key: "company_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "About Urself",
      dataIndex: "about_urself",
      key: "about_urself",
    },
  ];

  return (
    <>
      <Container>
        <Wrapper>
          <div>
            <Table columns={columns} />
          </div>
        </Wrapper>
      </Container>
    </>
  );
};
export default Dashboard;
