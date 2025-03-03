"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

// Dynamically import components
const componentMap = {
  DepartmentJobRoles: dynamic(() =>
    import("@/app/[p]/components/DepartmentJobs")
  ),
  RoleRoadMap: dynamic(() => import("@/app/[p]/components/RoleRoadMap")),
  MoreInfoRole: dynamic(() => import("@/app/[p]/components/MoreInfoRole")),
};

const ParamsPage = () => {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");
  const Component = componentMap[page_name];

  if (!Component) {
    return <p>Page not found</p>;
  }

  return <Component />;
};

export default ParamsPage;
