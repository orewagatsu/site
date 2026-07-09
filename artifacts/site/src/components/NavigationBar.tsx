import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavigationBar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentLanguage = i18n.language;
  const isJapanese =
    currentLanguage === "ja" ||
    location.pathname === "/" ||
    !location.pathname.startsWith("/en");

  const toggleLanguage = () => {
    const newLang = isJapanese ? "en" : "ja";
    i18n.changeLanguage(newLang);

    const currentPath = location.pathname;
    let newPath = currentPath;

    if (isJapanese) {
      if (currentPath === "/") {
        newPath = "/en";
      } else {
        newPath = `/en${currentPath}`;
      }
    } else {
      newPath = currentPath.replace("/en", "");
      if (newPath === "") newPath = "/";
    }

    navigate(newPath);
  };

  const navItems = [
    { key: "home", path: isJapanese ? "/" : "/en", label: t("nav.home") },
    {
      key: "businessEnglish",
      path: isJapanese ? "/business-english" : "/en/business-english",
      label: t("nav.businessEnglish"),
    },
    {
      key: "regularCommunications",
      path: isJapanese
        ? "/regular-communications"
        : "/en/regular-communications",
      label: t("nav.regularCommunications"),
    },
    {
      key: "interculturalConsulting",
      path: isJapanese ? "/business-consulting" : "/en/business-consulting",
      label: t("nav.interculturalConsulting"),
    },
    {
      key: "pricing",
      path: isJapanese ? "/pricing" : "/en/pricing",
      label: t("nav.pricing"),
    },
    {
      key: "blog",
      path: isJapanese ? "/blog" : "/en/blog",
      label: t("nav.blog"),
    },
  ];

  const isActivePath = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path === "/en" && location.pathname === "/en") return true;
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to={isJapanese ? "/" : "/en"}
            className="flex items-center space-x-2"
          >
            <div className="text-2xl font-bold text-emerald-600">
              {isJapanese ? "ドリーム英語" : "Dream English"}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`text-gray-700 hover:text-emerald-600 transition-colors font-medium ${
                  isActivePath(item.path)
                    ? "text-emerald-600 border-b-2 border-emerald-600"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>{isJapanese ? "日本語" : "English"}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={toggleLanguage}>
                  {isJapanese ? "English" : "日本語"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Toggle */}
            <Button variant="outline" size="sm" onClick={toggleLanguage}>
              <Globe className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`text-gray-700 hover:text-emerald-600 transition-colors font-medium px-2 py-1 ${
                    isActivePath(item.path)
                      ? "text-emerald-600 bg-emerald-50 rounded"
                      : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
