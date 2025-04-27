import {
  Input,
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Button,
  Switch,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Avatar,
  AvatarFallback,
} from "@/common/components";
import { SearchIcon, ShieldCheckIcon } from "lucide-react";
import { usePermissions } from "./usePermissions";

export const Permissions = () => {
  const { search, setSearch, filtered, handleToggle } = usePermissions();

  return (
    <div className="container mx-auto max-w-4xl py-8 px-2">
      <Card>
        <CardHeader className="flex flex-col items-center gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-2xl md:text-3xl">
              <ShieldCheckIcon className="h-7 w-7 text-primary" /> Permissions
            </CardTitle>
            <CardDescription>
              Manage user roles and their access permissions in your
              application.
            </CardDescription>
          </div>
          <div className="w-full md:w-72">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <SearchIcon className="h-4 w-4" />
              </span>
              <Input
                placeholder="Search roles or descriptions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 mt-4 md:mt-0"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
              <ShieldCheckIcon className="h-10 w-10 mb-2" />
              <div className="font-semibold text-lg">No permissions found</div>
              <div className="text-sm">
                Try adjusting your search or add new roles.
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Role</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((perm) => (
                    <TableRow key={perm.id}>
                      <TableCell className="font-medium flex items-center gap-2">
                        <Avatar className="h-7 w-7">
                          <AvatarFallback>{perm.role[0]}</AvatarFallback>
                        </Avatar>
                        {perm.role}
                      </TableCell>
                      <TableCell>{perm.description}</TableCell>
                      <TableCell className="text-center">
                        <Switch
                          checked={perm.enabled}
                          onCheckedChange={() => handleToggle(perm.id)}
                          aria-label={`Toggle ${perm.role} permission`}
                        />
                      </TableCell>
                      <TableCell className="text-center">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
