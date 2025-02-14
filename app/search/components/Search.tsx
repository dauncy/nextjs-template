"use client";

import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { search } from "../actions";

export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searching, setSearching] = useState(false);

  const handleSearch = async () => {
    if (searching) {
      return;
    }
    const input = inputRef.current;
    if (!input) {
      return;
    }
    const value = input.value.trim();
    if (!value) {
      return;
    }
    setSearching(true);
    await search(value);
    setSearching(false);
  };
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-y-1">
      <div className="flex w-full items-center gap-x-2">
        <Input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
              return;
            }
          }}
          disabled={searching}
          placeholder="dany-is-awesome"
          name={"search"}
          className="bg-white"
          ref={inputRef}
        />
        <Button disabled={searching} onClick={handleSearch}>
          {searching && <Loader2 className="size-4 animate-spin" />}
          Search
        </Button>
      </div>
      <p className="pl-2 text-sm italic text-muted-foreground/80">{"Search"}</p>
    </div>
  );
};
