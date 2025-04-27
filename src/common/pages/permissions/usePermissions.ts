import { useState } from "react";
import { initialPermissions } from "./permissionsData";

export function usePermissions() {
  const [search, setSearch] = useState("");
  const [permissions, setPermissions] = useState(initialPermissions);

  const filtered = permissions.filter(
    (perm) =>
      perm.role.toLowerCase().includes(search.toLowerCase()) ||
      perm.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggle = (id: number) => {
    setPermissions((perms) =>
      perms.map((perm) =>
        perm.id === id ? { ...perm, enabled: !perm.enabled } : perm
      )
    );
  };

  return { search, setSearch, permissions, filtered, handleToggle };
}