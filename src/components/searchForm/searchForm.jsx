export const SearchForm = ({
  setQuery,
  setSearchParams,
  setIsSubmit,
  query,
}) => {
  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
    setSearchParams(value ? { query: value } : '');
  };

  const handleSubmite = e => {
    e.preventDefault();
    setIsSubmit(true);
  };

  return (
    <form onSubmit={handleSubmite}>
      <input name="query" type="text" value={query} onChange={handleChange} />
      <button type="submite">Search</button>
    </form>
  );
};
