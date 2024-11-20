import Container from "@/component/layout/Container";
import Header from "@/component/layout/Header";


export default function loading() {
  return (
    <Container>
      <Header text="" />
      <div className="w-full h-48 animate-pulse rounded-md"></div>
      <div className="w-full h-24 animate-pulse rounded-md"></div>
      <div className="w-full h-24 animate-pulse rounded-md"></div>
      <div className="w-full h-24 animate-pulse rounded-md"></div>
    </Container>
  )
}
