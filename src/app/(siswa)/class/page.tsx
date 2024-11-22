import Container from "@/component/layout/Container";
import Header from "@/component/layout/Header";
import ListClass from "@/component/pages/class/ListClass";

export default function Home() {
  return (
    <Container>
      <Header text="Classroom" />

      <ListClass />
    </Container>
  );
}
