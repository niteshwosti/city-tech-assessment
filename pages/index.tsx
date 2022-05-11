import { Alert, Button, Form, Input } from "antd";
import { useFormik } from "formik";
import type { NextPage } from "next";
import axios from "axios";
import styled from "styled-components";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  max-width: 250px;
`;
const ButtonWrapper = styled.div`
  margin-top: 16px;
`;
const Home: NextPage = () => {
  const router = useRouter();
  const handleSubmit = () => {
    const config = {
      headers: {
        Authorization: "Bearer'jwt_token from login api'",
      },
    };
    const data = {
      login_id: formik.values.login_id,
      login_password: formik.values.login_password,
    };

    axios
      .post(
        "https://jp-dev.cityremit.global/web-api/config/v1/auths/login",
        data,
        config
      )
      .then((res) => {
        console.log(res.data.data[0].jwt_token);
        localStorage.setItem("token", res.data.data[0].jwt_token);
      });

    if (localStorage.getItem("token")) {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  };

  const formik = useFormik({
    initialValues: {
      login_id: "",
      login_password: "",
    },
    enableReinitialize: true,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Wrapper>
        <form onSubmit={formik.handleSubmit}>
          <label>Email</label>
          <Input
            type="text"
            name="login_id"
            value={formik.values.login_id}
            onChange={formik.handleChange}
          />
          <label>Password</label>
          <Input
            type="password"
            name="login_password"
            onChange={formik.handleChange}
          />
          <ButtonWrapper>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </ButtonWrapper>
        </form>
      </Wrapper>
    </>
  );
};

export default Home;
