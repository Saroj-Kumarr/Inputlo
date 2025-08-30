import type React from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileSpreadsheet,
  Mail,
  Slack,
  KanbanSquare,
  Link2,
  Infinity,
  MessageSquare,
  Bot,
} from "lucide-react";

type Item = {
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const items: Item[] = [
  { label: "Sheets", Icon: FileSpreadsheet },
  { label: "Email", Icon: Mail },
  { label: "Slack", Icon: Slack },
  { label: "Boards", Icon: KanbanSquare },
  { label: "Webhooks", Icon: Link2 },
  { label: "CRM", Icon: Infinity },
  { label: "Chat", Icon: MessageSquare },
  { label: "AI Assist", Icon: Bot },
];

export function IntegrationsMinimal() {
  return (
    <section
      aria-labelledby="integrations-heading"
      className="w-full pb-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="integrations-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl"
          >
            Plug and play
          </h2>
          <p className="mt-3 text-pretty text-slate-600">
            Connect your favorite tools in seconds and let automations handle
            the busywork.
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:mt-14 md:grid-cols-4">
          {items.map(({ label, Icon }) => (
            <li key={label}>
              <button
                type="button"
                className="group w-full rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6C957]"
                aria-label={label}
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6C957]/20 text-slate-900 ring-1 ring-[#F6C957]/40 transition group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-slate-900">{label}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#F6C957] px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#F6C957]/80 duration-300   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F6C957]"
          >
            Explore integrations
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default IntegrationsMinimal;
