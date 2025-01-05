"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (path: string) => {
    setActiveDropdown(currentDropdown => currentDropdown === path ? null : path);
  };

  const navItems = [
    { 
      name: "Home", 
      path: "/" 
    },
    { 
      name: "Sustainable Human Development",
      path: "sustainable",
      dropdownItems: [
        { name: "Education", path: "/sustainable/education" },
        { name: "Vocational Training & Skill Acquisition", path: "/sustainable/vocational" },
        { name: "Technology And Innovation", path: "/sustainable/technology" },
        { name: "Job Creation And Economy Growth", path: "/sustainable/economy" },
        { name: "Youth And Sport Development", path: "/sustainable/youth" },
        { name: "Tourism And Heritage", path: "/sustainable/tourism" },
      ]
    },
    { 
      name: "Service To Humanity And Social Development",
      path: "service",
      dropdownItems: [
        { name: "Health Care", path: "/service/healthcare" },
        { name: "Security", path: "/service/security" },
        { name: "Community Engagement & Traditional Rulers", path: "/service/community" },
        { name: "Empowerment and Social Welfare", path: "/service/welfare" },
        { name: "Local Government Staff Welfare", path: "/service/staff" },
        { name: "Fiscal Responsibility", path: "/service/fiscal" },
      ]
    },
    { 
      name: "Building Sustainable Infrastructures",
      path: "infrastructure",
      dropdownItems: [
        { name: "Infrastructural & Urban Development & Housing", path: "/infrastructure/urban" },
        { name: "Environment", path: "/infrastructure/environment" },
      ]
    },
    { 
      name: "Key Facts",
      path: "/service/keyfacts",
    }
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0,
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-2xl font-bold text-gray-800">
              S S B 2025
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <div 
                  key={item.path} 
                  className="relative"
                >
                  {item.path === "/" ? (
                    <Link
                      href={item.path}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
                        pathname === item.path
                          ? "text-blue-600"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.path)}
                        className={`px-3 py-2 text-sm font-medium transition-colors ${
                          activeDropdown === item.path
                            ? "text-blue-600"
                            : "text-gray-600 hover:text-blue-600"
                        }`}
                      >
                        {item.name}
                      </button>
                      
                      <AnimatePresence>
                        {item.dropdownItems && activeDropdown === item.path && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2"
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <motion.div
                                key={dropdownItem.path}
                                variants={itemVariants}
                              >
                                <Link
                                  href={dropdownItem.path}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <div className="relative w-6 h-6">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="absolute h-0.5 w-6 bg-current transform"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute h-0.5 w-6 bg-current transform"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="absolute bottom-0 h-0.5 w-6 bg-current transform"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto" } : { height: 0 }}
        className="lg:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md">
          {navItems.map((item) => (
            <div key={item.path}>
              {item.path === "/" ? (
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    pathname === item.path
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => handleDropdownToggle(item.path)}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      activeDropdown === item.path
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {item.name}
                  </button>
                  
                  <AnimatePresence>
                    {item.dropdownItems && activeDropdown === item.path && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="pl-4 space-y-1"
                      >
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            href={dropdownItem.path}
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
