import { useMemo, useState } from "react";
import useGetConversations from "../../hooks/useGetConversations";
import Conversations from "./Conversations";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, conversations } = useGetConversations();

  const filteredConversations = useMemo(() => {
    return conversations.filter((conversation) => {
      return conversation.fullName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });
  }, [conversations, searchQuery]);

  return (
    <>
      <form className="flex items-center gap-2">
        <input
          type="search"
          placeholder="Search"
          className="input input-bordered rounded-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <div className="divider px-3"></div>
      <Conversations loading={loading} conversations={filteredConversations} />
    </>
  );
};
export default SearchInput;
