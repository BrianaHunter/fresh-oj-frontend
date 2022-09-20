import { Container, Paper, Title, Text, Anchor, Button } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import AppContainer from "../components/AppContainer";
import { loginWithGoogle } from "../services/auth.service";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await loginWithGoogle();
    console.log(user);
    navigate("/");
  };

  return (
    <AppContainer>
      <Container size={420} my={100}>
        <Title color="blue" align="center">
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
        </Paper>
      </Container>
    </AppContainer>
  );
}
