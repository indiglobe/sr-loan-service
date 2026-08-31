
import Main from "@/components/main/main";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,

  head: () => ({ meta: [{ title: "Scrapnity | Home" }] }),
});

function RouteComponent() {
  return (
    <Main>
    </Main>
  );
}
