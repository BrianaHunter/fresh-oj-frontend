import {
  Anchor,
  Button,
  Container,
  Paper,
  Text,
  Title,
  TextInput,
} from "@mantine/core";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContainer from "../components/AppContainer";
import { signUpWithGoogle } from "../services/auth.service";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    const user = await signUpWithGoogle();
    console.log(user);
    navigate("/");
  };

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };

  // const form = useForm({
  //   initialValues: { name: "", email: "", password: "" },

  //   // functions will be used to validate values at corresponding key
  //   validate: {
  //     name: (value) =>
  //       value.length < 5 ? "Name must have at least 5 letters" : null,
  //     email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
  //     password: (value) =>
  //       value.length < 5 ? "Password must have at least 5 letters" : null,
  //   },
  // });
  return (
    <AppContainer>
      <Container size={420} my={100}>
        <Title align="center" className="poppin-font text-white text-5xl">
          Fresh OJ
        </Title>
        <Paper withBorder shadow="sm" p={30} mt={30} radius="md">
          <Title align="center">Create Account</Title>

          <Text color="green" size="lg" align="center" mt={5}>
            Already have an account?{" "}
            <Anchor
              component={Link}
              to="/login"
              className="font-medium !no-underline"
            >
              Login
            </Anchor>
          </Text>
          <Button
            fullWidth
            mt="xl"
            variant="default"
            size="lg"
            onClick={handleSignup}
          >
            Sign up with Google
          </Button>

          <form>
            <TextInput label="Name" placeholder="Name" />
            <TextInput
              value={email}
              type="email"
              mt="sm"
              label="Email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              value={password}
              type="password"
              mt="sm"
              label="Password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              // onClick={(e) => handleSubmit(e)}
              type="submit"
              className="
              hover:bg-tan-200 bg-orangeSoda-200 mt-5 "
            >
              Get Started
            </Button>
          </form>
        </Paper>
      </Container>
    </AppContainer>
  );
}
