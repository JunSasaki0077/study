import { requireUser } from "../lib/hooks";

export default async function DashboardPage() {
  const session = await requireUser();

  return (
    <div>
      <h1>dashboard page</h1>
    </div>
  );
}
