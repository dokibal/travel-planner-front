import { useState } from "react";
import { useDebounce } from "use-debounce";

export const useSearch = () => {
  const [rawSearchTerm, setSearchTerm] = useState<string | null>(null);
  const [searchTerm] = useDebounce(rawSearchTerm, 500);

  return { searchTerm, setSearchTerm };
};
