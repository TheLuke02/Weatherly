import React from "react";

export const Loading = () => {
  return (
    <div className="h-full">
      <div className="mx-2 flex h-full animate-pulse flex-row space-x-2">
        <div className="my-2 flex h-auto w-8/12 flex-col space-y-2 rounded">
          <div className="flex h-[7%] w-auto flex-row space-x-2 rounded">
            <div className="flex flex-1 rounded bg-slate-400"></div>
            <div className="flex flex-1 rounded bg-slate-400"></div>
          </div>
          <div className="flex h-5/6 rounded bg-slate-400"></div>
          <div className="flex h-1/6 flex-row space-x-2 rounded">
            <div className="flex h-full flex-1 rounded bg-slate-400"></div>
            <div className="flex h-full flex-1 rounded bg-slate-400"></div>
            <div className="flex h-full flex-1 rounded bg-slate-400"></div>
          </div>
        </div>
        <div className="my-2 flex min-h-fit w-4/12 flex-col space-y-2">
          <div className="flex flex-1 rounded bg-slate-400"></div>
          <div className="flex flex-1 rounded bg-slate-400"></div>
          <div className="flex flex-1 rounded bg-slate-400"></div>
          <div className="flex flex-1 rounded bg-slate-400"></div>
          <div className="flex flex-1 rounded bg-slate-400"></div>
          <div className="flex flex-1 rounded bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
};
