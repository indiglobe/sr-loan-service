import Loans from "@/components/main/loans/loans";
import Main from "@/components/main/main";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/loans/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Main>
      <Loans />
    </Main>
  );
}
