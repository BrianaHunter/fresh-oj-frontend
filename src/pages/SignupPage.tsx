import {
  Anchor,
  Button,
  Container,
  Paper,
  Text,
  Title,
  TextInput,
  Center,
} from "@mantine/core";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContainer from "../components/AppContainer";
import { signUp, signUpWithGoogle } from "../services/auth.service";
import FreshOjLogo from "../resources/FreshOJLogo.svg";
import orangeImage from "../resources/orangeImage.svg";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    const user = await signUpWithGoogle();
    console.log(user);
    navigate("/");
  };

  const handleGetStarted = async () => {
    const user = await signUp(name, email, password);
    console.log(user);
    navigate("/");
  };
  return (
    <AppContainer>
      <Container size={420} my={100}>
        {/* <Center className=" w-72 h-72 opacity-100">
          <img src={FreshOjLogo} />
        </Center> */}
        <div className="relative">
          <div className="absolute right-28">
            <img className=" h-9/12 w-9/12" src={orangeImage} />
          </div>
          <Title
            align="center"
            // className="  absolute bottom-0 left-9 poppin-font font-light text-black text-7xl"
            className="  poppin-font font-normal text-white text-7xl mt-[-50px]"
          >
            FRESH OJ
          </Title>
          <Title
            align="center"
            // className=" absolute top-0 left-24  poppin-font font-normal text-black text-base mt-1"
            className=" poppin-font font-normal text-white text-base mt-1"
          >
            open mind, fresh start
          </Title>

          <Paper withBorder shadow="sm" p={30} mt={30} radius="md">
            <Title align="center">Create Account</Title>

            <Text color="black" size="lg" align="center" mt={5}>
              Already have an account?{" "}
              <Anchor
                component={Link}
                to="/login"
                className="font-medium !no-underline text-orangeSoda-200"
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
              <TextInput
                label="Name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
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
                onClick={() => handleGetStarted()}
                className="
              hover:bg-tan-200 bg-orangeSoda-200 mt-5 "
              >
                Get Started
              </Button>
            </form>
          </Paper>
        </div>
      </Container>
    </AppContainer>
  );
}
