import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
import ListClass from "@/components/pages/class/ListClass";

export default function Home() {
  return (
    <Container>
      <Header text="Classroom" />

      <ListClass />
    </Container>
  );
}
