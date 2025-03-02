import Link from "next/link";
import {
  Briefcase,
  Map,
  GraduationCap,
  LayoutDashboard,
  FileQuestion
} from "lucide-react";

export default function Home() {
  const navigationItems = [
    {
      category: "Learn with Planning",
      items: [
        {
          href: "/page?page=DepartmentJobRoles",
          icon: Briefcase,
          text: "Department-wise Job Roles",
        },
        {
          href: "/page?page=RoleRoadMap",
          icon: Map,
          text: "Role Roadmap",
        },
        {
          href: "/course",
          icon: GraduationCap,
          text: "Learning Courses",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-3 text-blue-800">
            Learning Resources
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Your pathway to career success starts here
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link 
              href="/dashboard" 
              className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <LayoutDashboard size={20} />
              <span className="font-medium">Dashboard</span>
            </Link>
            
            <Link 
              href="/quiz" 
              className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <FileQuestion size={20} />
              <span className="font-medium">Take Quiz</span>
            </Link>
          </div>
        </header>
        
        <main>
          {navigationItems.map((category, idx) => (
            <div key={idx} className="mb-12 bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b border-blue-100 pb-3">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <Link 
                      key={itemIdx} 
                      href={item.href}
                      className="flex items-center gap-4 p-5 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-100 hover:border-blue-200 group"
                    >
                      <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                        <Icon className="text-blue-600" size={24} />
                      </div>
                      <span className="font-medium text-gray-800 group-hover:text-blue-700 transition-colors">{item.text}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}