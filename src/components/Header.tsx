
import { Link, NavLink } from 'react-router-dom';
import { Mail, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const Header = () => {
  const navLinks = [
    { name: 'لوحة القيادة', href: '/' },
    { name: 'جهات الاتصال', href: '/contacts' },
    { name: 'الحملات', href: '/campaigns' },
    { name: 'الأتمتة', href: '/automations', disabled: true },
    { name: 'القوالب', href: '/templates' },
    { name: 'التقارير', href: '/reports' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Mail className="h-7 w-7 text-primary" />
              <span className="font-bold text-xl text-gray-800">EmailPilot</span>
            </Link>
            <nav className="hidden md:flex space-x-1">
              {navLinks.map((link) =>
                link.disabled ? (
                  <span
                    key={link.name}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 cursor-not-allowed flex items-center"
                  >
                    {link.name}
                    <span className="ml-2 bg-gray-200 text-gray-500 text-xs font-bold px-2 py-0.5 rounded-full">
                      قريباً
                    </span>
                  </span>
                ) : (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    className={({ isActive }) =>
                      cn(
                        "px-3 py-2 rounded-md text-sm font-medium",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-gray-600 hover:bg-gray-100"
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                )
              )}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
              ترقية
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 px-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                    <p className="font-medium">اسم المستخدم</p>
                    <p className="text-xs text-muted-foreground font-normal">user@emailpilot.com</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>الملف الشخصي</DropdownMenuItem>
                <DropdownMenuItem>الفواتير</DropdownMenuItem>
                <DropdownMenuItem>الإعدادات</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>تسجيل الخروج</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
