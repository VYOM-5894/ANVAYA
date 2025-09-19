import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { allAlumni } from "@/data/alumniData";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  showResults?: boolean;
}

const SearchBar = ({ onSearch, placeholder = "Search alumni, events, or anything...", showResults = false }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const clearSearch = () => {
    setQuery("");
    if (onSearch) {
      onSearch("");
    }
    setIsOpen(false);
  };

  // Quick search results for demonstration
  const getQuickResults = () => {
    if (!query.trim() || query.length < 2) return [];
    
    const searchTerm = query.toLowerCase();
    const results = allAlumni
      .filter(alumni => 
        alumni.name.toLowerCase().includes(searchTerm) ||
        alumni.company.toLowerCase().includes(searchTerm) ||
        alumni.position.toLowerCase().includes(searchTerm)
      )
      .slice(0, 5);
    
    return results;
  };

  const quickResults = showResults ? getQuickResults() : [];

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Quick Results Dropdown */}
      {isOpen && showResults && quickResults.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-80 overflow-y-auto">
          <CardContent className="p-2">
            <div className="space-y-1">
              {quickResults.map((alumni) => (
                <div
                  key={alumni.id}
                  className="p-2 hover:bg-muted rounded cursor-pointer"
                  onClick={() => {
                    // This would navigate to the alumni's profile
                    console.log("Navigate to:", alumni.name);
                    setIsOpen(false);
                  }}
                >
                  <div className="font-medium text-sm">{alumni.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {alumni.position} at {alumni.company}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default SearchBar;