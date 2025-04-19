export default function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-card">
          <h2 className="text-lg font-semibold">User Information</h2>
          <p className="text-muted-foreground">Manage your Profile settings</p>
        </div>
      </div>
    </div>
  );
}
