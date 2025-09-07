type Feature = {
  titleEmphasis: string;
  rest: string;
};

type AiNativeProps = {
  videoSrc?: string;
  posterSrc?: string;
  features?: Feature[];
};

export function AiNativeSection({
  videoSrc = "https://d3gw2uv1ch7vdq.cloudfront.net/img/what-s-paperform_.mp4",
  posterSrc = "/images/ai-native-poster.png",
  features = [
    {
      titleEmphasis: "AI form creation",
      rest: " – spin up complex forms in seconds",
    },
    {
      titleEmphasis: "AI Insights",
      rest: " – view submission results and ask AI to make sense of it all in design‑savvy reports",
    },
    {
      titleEmphasis: "AI Calculations",
      rest: " – more than just advanced logic with Excel‑style functions based on real‑time user input",
    },
  ],
}: AiNativeProps) {
  return (
    <section aria-labelledby="ai-native-heading" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Copy column */}
          <div className="max-w-xl">
            <h2
              id="ai-native-heading"
              className="text-pretty text-3xl md:text-4xl font-semibold leading-tight text-slate-900"
            >
              A better way to work with native AI
            </h2>

            <div className="mt-8 grid gap-6">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white/50 p-4 shadow-sm hover:shadow-md transition"
                >
                  {/* Accent circle */}
                  <div
                    className="h-10 w-10 shrink-0 rounded-full flex items-center justify-center font-bold text-slate-900"
                    style={{ backgroundColor: "#F6C957" }}
                  >
                    {idx + 1}
                  </div>

                  <div>
                    <p className="leading-relaxed text-slate-600">
                      <span className="font-semibold text-slate-900">
                        {f.titleEmphasis}
                      </span>{" "}
                      {f.rest}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Media column - tablet mock with video */}
          <div className="relative">
            {/* Bezel */}
            <div className="mx-auto w-full max-w-2xl rounded-[28px] bg-black p-3 shadow-xl ring-1 ring-black/10 md:p-4">
              <div className="aspect-[16/9] overflow-hidden rounded-xl bg-slate-200">
                <video
                  src={videoSrc}
                  poster={posterSrc}
                  className="h-full w-full object-cover"
                  preload="metadata"
                  muted
                  loop
                  autoPlay
                  playsInline
                  controls
                  aria-label="Product demo video"
                />
              </div>
            </div>
            {/* Soft ambient shadow */}
            <div className="pointer-events-none absolute inset-x-6 -bottom-6 h-8 rounded-full bg-black/10 blur-2xl md:inset-x-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiNativeSection;
