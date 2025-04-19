import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/common/components/ui/breadcrumb";

export const BreadCrumbWrapper = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const generateBreadcrumbItems = () => {
    let currentPath = "";
    const items = [];

    // Add Home link
    items.push(
      <BreadcrumbItem key="home">
        <BreadcrumbLink asChild>
          <Link to="/">Home</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    );

    // Add separator after home if there are other segments
    if (pathSegments.length > 0) {
      items.push(<BreadcrumbSeparator key="home-sep" />);
    }

    // Add path segments
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;

      items.push(
        <BreadcrumbItem key={segment}>
          {isLast ? (
            <BreadcrumbPage className="capitalize">{segment}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink asChild>
              <Link to={currentPath} className="capitalize">
                {segment}
              </Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      );

      // Add separator after each segment except the last one
      if (!isLast) {
        items.push(<BreadcrumbSeparator key={`${segment}-sep`} />);
      }
    });

    return items;
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>{generateBreadcrumbItems()}</BreadcrumbList>
    </Breadcrumb>
  );
};
