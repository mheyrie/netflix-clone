import { useState } from "react";

export default function SearchPage() {
    const [activeTab, setActiveTab] = useState("movies");
    const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>SearchPage</div>
  )
}