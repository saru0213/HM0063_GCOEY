export async function generateStaticParams() {
    return [
      { p: "DepartmentJobRoles" },
      { p: "RoleRoadMap" },
      { p: "MoreInfoRole" },
    ]; // Update with actual valid pages
  }
  
  export default function Layout({ children }) {
    return <>{children}</>;
  }
  