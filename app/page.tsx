"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Github from "@/components/ui/github-icon";
import GoogleDrive from "@/components/ui/google";

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
  ];

  const skills = [
    { name: "HTML/CSS", icon: "🌐" },
    { name: "JavaScript", icon: "JS" },
    { name: "TypeScript", icon: "TS" },
    { name: "C++", icon: "💻" },
    { name: "React", icon: "⚛️" },
    { name: "React Native", icon: "📱" },
    { name: "Git", icon: "🔀" },
    { name: "SQL", icon: "🗃️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Prisma", icon: "🌟" },
    { name: "Drizzle", icon: "🌟" },
    { name: "Express.js", icon: "🚀" },
    { name: "Next.js", icon: "🌍" },
    { name: "Tailwind CSS", icon: "💨" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nihal-gound-2063b3331",
    },
    { name: "Github", url: "https://github.com/nihalGound" },
    { name: "Twitter", url: "https://x.com/nihal_Gound" },
    { name: "Leetcode", url: "https://leetcode.com/u/Nihal_13214/" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{
                opacity: isLoaded ? 1 : 0,
                filter: isLoaded ? "blur(0px)" : "blur(10px)",
              }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white"
            >
              Nihal Gound
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href={
                  "https://drive.google.com/file/d/1Q9DsJXExIslr_AoYxPgiefZS7GgFah-K/view?usp=sharing"
                }
                target="_blank"
              >
                <Button variant="outline" size="sm" className="gap-2 text-sm">
                  <GoogleDrive />
                  View Resume
                </Button>
              </Link>
            </motion.div>
            <motion.p
              className="text-zinc-400 leading-relaxed"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{
                opacity: isLoaded ? 1 : 0,
                filter: isLoaded ? "blur(0px)" : "blur(10px)",
              }}
              transition={{ duration: 0.8 }}
            >
              I&apos;m a passionate Computer Science student with a keen
              interest in web development and AI. Currently pursuing my
              undergraduate degree, I&apos;m excited about creating innovative
              solutions and learning cutting-edge technologies.
            </motion.p>
            <motion.p
              className="text-zinc-400 leading-relaxed"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{
                opacity: isLoaded ? 1 : 0,
                filter: isLoaded ? "blur(0px)" : "blur(10px)",
              }}
              transition={{ duration: 0.8 }}
            >
              Connect with me on{" "}
              {socialLinks.map((link, index) => (
                <span key={link.name}>
                  <Link
                    href={link.url}
                    className="text-white hover:text-primary border-b border-dotted border-zinc-700 hover:border-primary transition-colors"
                    target="_blank"
                  >
                    {link.name}
                  </Link>
                  {index < socialLinks.length - 1 &&
                  index !== socialLinks.length - 2
                    ? ", "
                    : ""}
                  {index === socialLinks.length - 2 ? " or " : ""}
                </span>
              ))}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-0"
            >
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-400 flex items-center gap-1.5 hover:border-zinc-700 hover:text-zinc-300 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-white text-xs">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        );
      case "education":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">
                Bachelor of Engineering in Computer Science
              </h3>
              <p className="text-zinc-400">
                Thakur College of Engineering and Technology (Mumbai), Expected
                Graduation: May 2026
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>GPA: 9.17/10</li>
                <li>
                  Relevant Coursework: Data Structures, Algorithms, Web
                  Development, Database Systems, Operating System, Computer
                  Network
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">
                Higher Secondary School Certificate (H.S.C) - 2022
              </h3>
              <p className="text-zinc-400">
                Maharashtra State Board. Passed with 82.83%.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">
                Secondary School Certificate (S.S.C) - 2020
              </h3>
              <p className="text-zinc-400">
                Maharashtra State Board. Passed with 87.00%.
              </p>
            </div>
          </motion.div>
        );
      case "projects":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-x-2">
                <h3 className="text-xl font-medium text-white">
                  Modern Inventory Management
                </h3>
                <Button variant={"link"}>
                  <Link
                    href={"https://inventix-three.vercel.app/"}
                    target="_blank"
                  >
                    Live link
                  </Link>
                </Button>
                <Button variant={"ghost"}>
                  <Link
                    href={"https://github.com/nihalGound/Inventix"}
                    target="_blank"
                  >
                    <Github />
                  </Link>
                </Button>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Developed a modern inventory management system with
                business-specific product management, bill creation, and barcode
                scanning for seamless stock updates.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  React
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Tailwind CSS
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Postgress
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Clerk
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Prisma
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-x-2">
                <h3 className="text-xl font-medium text-white">
                  Opal: Screen Recording and Video Processing Platform
                </h3>
                <Button variant={"link"}>
                  <Link
                    href={"https://opal-webprodigies-delta.vercel.app/"}
                    target="_blank"
                  >
                    Live link
                  </Link>
                </Button>
                <Button variant={"ghost"}>
                  <Link
                    href={"https://github.com/nihalGound/opal-webprodigies"}
                    target="_blank"
                  >
                    <Github />
                  </Link>
                </Button>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Built Opal a web app enabling seamless screen recording and
                video processing, with features like video sectioning and
                AI-powered enhancements.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  React
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Tailwind CSS
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Postgress
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Clerk
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Prisma
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Electron js
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Express js
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Socket IO
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-x-2">
                <h3 className="text-xl font-medium text-white">
                  Botly AI: AI-Powered Chatbot Integration Platform
                </h3>
                <Button variant={"link"}>
                  <Link href={"https://botly-ai.vercel.app/"} target="_blank">
                    Live link
                  </Link>
                </Button>
                <Button variant={"ghost"}>
                  <Link
                    href={"https://github.com/nihalGound/botly-ai"}
                    target="_blank"
                  >
                    <Github />
                  </Link>
                </Button>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Created Botly AI, a platform for seamless chatbot integration
                into websites, offering features like appointment scheduling,
                product sales assistance, and real-time communication via
                iframe.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  React
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Tailwind CSS
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Postgress
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Clerk
                </span>
                <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                  Prisma
                </span>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dark min-h-screen bg-black text-zinc-400">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`block text-left text-lg transition-colors ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-zinc-600 hover:text-zinc-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.nav>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Content based on active section */}
            <div className="min-h-[300px]">{renderContent()}</div>

            {/* Skills */}
          </div>
        </div>
      </div>
    </div>
  );
}
