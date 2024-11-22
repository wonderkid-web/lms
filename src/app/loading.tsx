import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";

export default function loading() {
  return (
    <Container>
      <Header text="" />
      <div className="h-56 w-full animate-pulse bg-gray-100 rounded-md"></div>
      <div className="h-24 w-full animate-pulse bg-gray-100 rounded-md"></div>
      <div className="h-24 w-full animate-pulse bg-gray-100 rounded-md"></div>
    </Container>
  );
}
