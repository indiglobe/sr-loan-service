import Main from "@/components/main/main";
import OurProduct from "@/components/main/our-product/our-product";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/our-product/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Main>
      <OurProduct />
    </Main>
  );
}
