import { Anchor, Button, Container, Paper, Text, Title } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import AppContainer from "../components/AppContainer";
import { signUpWithGoogle } from "../services/auth.service";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = async () => {
    const user = await signUpWithGoogle();
    console.log(user);
    navigate("/");
  };

  return (
    <AppContainer>
      <Container size={420} my={100}>
        <Title color="pink" align="center">
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
        </Paper>
      </Container>
    </AppContainer>
  );
}
