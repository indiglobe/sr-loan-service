import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/loans/instant-loan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/loans/instant-loan/"!</div>
}
