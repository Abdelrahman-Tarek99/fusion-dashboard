import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Button } from "@/common/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorMessage = "An unexpected error has occurred";

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="text-lg text-muted-foreground">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-sm text-muted-foreground">
        <i>{errorMessage}</i>
      </p>
      <Button onClick={() => navigate("/")}>Go Home</Button>
    </div>
  );
};
