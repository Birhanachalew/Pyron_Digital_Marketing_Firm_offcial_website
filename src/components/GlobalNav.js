import React from "react";

import { Disclosure } from "@headlessui/react";
import {  MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Work", href: "/#work" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/#insights" },
];

export default function GlobalNav() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-900 shadow-sm transition hover:border-brandHeadline hover:text-brandHeadline focus:outline-none focus:ring-2 focus:ring-brandHeadline/20">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>

              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link to="/" className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-lg shadow-slate-950/15">
                    PG
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brandHeadline">Payron Global</p>
                    <p className="text-xs text-slate-500">Ethiopia · Dubai</p>
                  </div>
                </Link>

                <div className="hidden sm:ml-10 sm:block">
                  <div className="flex items-center gap-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-slate-600 transition hover:text-brandHeadline"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden items-center gap-4 sm:flex">
                <a
                  href="https://www.linkedin.com/company/payron/"
                  className="inline-flex items-center justify-center rounded-full bg-brandButton px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brandButton/20 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brandAccent"
                >
                  Let’s Talk
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-2 px-4 pb-4 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-brandHeadline hover:text-brandHeadline"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/company/payron/"
                className="mt-2 block rounded-2xl bg-brandButton px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brandButton/20"
              >
                Let’s Talk
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
