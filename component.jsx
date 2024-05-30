/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ybuM1nQ4QWv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-100 dark:bg-gray-950 px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CameraIcon className="h-6 w-6" />
          <span className="text-xl font-bold">John Doe</span>
        </Link>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Photography
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Welcome to my personal website
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Explore my coding projects and photography portfolio.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  View Projects
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  View Photography
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width={600}
              height={600}
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Coding Projects</h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">Check out some of my recent coding projects.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="#"
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  alt="Project 1"
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-bold text-xl">Project 1</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Description of Project 1</p>
                </div>
              </Link>
              <Link
                href="#"
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  alt="Project 2"
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-bold text-xl">Project 2</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Description of Project 2</p>
                </div>
              </Link>
              <Link
                href="#"
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  alt="Project 3"
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-bold text-xl">Project 3</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Description of Project 3</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section id="photography" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Photography Portfolio</h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">Check out some of my best photography work.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="#"
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  alt="Photo 1"
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-bold text-xl">Photo 1</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Description of Photo 1</p>
                </div>
              </Link>
              <Link
                href="#"
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  alt="Photo 2"
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-bold text-xl">Photo 2</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Description of Photo 2</p>
                </div>
              </Link>
              <Link
                href="#"
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  alt="Photo 3"
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-bold text-xl">Photo 3</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Description of Photo 3</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="bg-gray-100 dark:bg-gray-950 p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <div className="flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:underline">
                john@example.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:underline">
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Social</h3>
            <div className="flex items-center gap-2">
              <GithubIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:underline">
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-2">
              <TwitterIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:underline">
                Twitter
              </a>
            </div>
            <div className="flex items-center gap-2">
              <InstagramIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:underline">
                Instagram
              </a>
            </div>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:underline" prefetch={false}>
              Biography
            </Link>
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:underline" prefetch={false}>
              Skills
            </Link>
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:underline" prefetch={false}>
              Resume
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:underline" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 flex items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 John Doe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-gray-500 dark:text-gray-400 hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-500 dark:text-gray-400 hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
