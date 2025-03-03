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

// Predefine static params
export async function generateStaticParams() {
  return [
    { p: "DepartmentJobRoles" },
    { p: "RoleRoadMap" },
    { p: "MoreInfoRole" },
  ]; // Update with valid params
}

const ParamsPage = ({ params }) => {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page") || params.p;
  const Component = componentMap[page_name];

  if (!Component) {
    return <p>Page not found</p>;
  }

  return <Component />;
};

export default ParamsPage;
