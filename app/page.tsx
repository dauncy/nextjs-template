import { Search } from "./search/components/Search";

export default function Home() {
  return (
    <div className="relative flex size-full min-h-full flex-1 p-4">
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-y-3">
        <h1 className="text-2xl font-semibold">Daniel Starter Template</h1>
        <div className="flex flex-1 flex-col rounded-md border border-border bg-muted p-6 shadow-sm">
          <Search />
        </div>
      </div>
    </div>
  );
}
