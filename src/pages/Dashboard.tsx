export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 rounded-lg bg-card">
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="text-muted-foreground">Welcome to your dashboard</p>
        </div>
      </div>
    </div>
  );
}
