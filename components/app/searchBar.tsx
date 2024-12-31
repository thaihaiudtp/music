"use client";

import { Input } from "../ui/input";
import { useState } from "react";
export const SearchBar = (props: { onChange: (value: string) => void }) => {
  const { onChange } = props;

  const [search, setSearch] = useState<string>("");

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2 m-8">
      <Input
        type="text"
        placeholder="Music name"
        value={search}
        onChange={handleChangeSearch}
      />
    </div>
  );
};
