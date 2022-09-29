import {
  Container,
  Paper,
  Title,
  Text,
  Anchor,
  Button,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import AppContainer from "../components/AppContainer";
import { loginWithGoogle } from "../services/auth.service";
import FreshOjLogo from "../resources/FreshOJLogo.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await loginWithGoogle();
    console.log(user);
    navigate("/");
  };

  const form = useForm({
    initialValues: { email: "", password: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 5 ? "Password must have at least 5 letters" : null,
    },
  });
  return (
    <AppContainer>
      <Container size={420} my={100}>
        <div className="p-0">
          <img className="w-full h-full  p-0 m-0" src={FreshOjLogo} />
        </div>
        <Title
          className="poppin-font text-white text-5x  shadow-lg shadow-black-900"
          align="center"
        >
          Fresh OJ
        </Title>

        <Paper withBorder shadow="sm" p={30} mt={30} radius="md">
          <Title align="center">Welcome Back!</Title>
          <Text color="dimmed" size="lg" align="center" mt={5}>
            Don't have an account yet?{" "}
            <Anchor
              component={Link}
              to="/signup"
              className="font-medium !no-underline"
            >
              Sign Up!
            </Anchor>
          </Text>
          <Button
            fullWidth
            mt="xl"
            variant="default"
            size="lg"
            onClick={handleLogin}
          >
            Login with Google
          </Button>
          <form onSubmit={form.onSubmit(console.log)}>
            <TextInput
              value={email}
              type="email"
              mt="sm"
              label="Email"
              placeholder="Email"
              {...form.getInputProps("email")}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              value={password}
              type="password"
              mt="sm"
              label="Password"
              placeholder="Password"
              {...form.getInputProps("password")}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className="
              hover:bg-tan-200 bg-orangeSoda-200  mt-5"
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </AppContainer>
  );
}
