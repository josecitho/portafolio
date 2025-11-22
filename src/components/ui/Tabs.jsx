"use client";
import { useState } from "react";

export default function Tabs({ tabs = [], children, onTabAction }) {
  const [active, setActive] = useState(null);
  const panels = Array.isArray(children) ? children : [children];

  return (
    <div className="w-full">
      {/* Tab list */}
      <div className="flex justify-center mb-6 md:mb-8 gap-3 md:gap-4">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            role="tab"
            aria-selected={i === active}
            onClick={() => {
              const willClose = active === i;
              // update state immediately
              setActive(willClose ? null : i);
              // schedule the callback asynchronously to avoid updating other
              // components during render (React forbids setState-in-render)
              if (willClose && typeof onTabAction === "function") {
                Promise.resolve().then(() => {
                  try {
                    onTabAction(i);
                  } catch (e) {
                    // swallow errors from the provided handler to avoid breaking UI
                    // handler should handle its own errors/logging
                  }
                });
              }
            }}
            className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-200 select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500/60 ${
              i === active
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-101"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            } text-lg md:text-xl`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Panel container */}
      <div className="mx-auto max-w-5xl transition-all duration-300">
        {active !== null ? (
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-10">
            <div className="space-y-6 md:space-y-10">{panels[active]}</div>
          </div>
        ) : (
          <div className="text-center text-gray-400 py-12">Haz clic en una pestaña para abrir su contenido</div>
        )}
      </div>
    </div>
  );
}
