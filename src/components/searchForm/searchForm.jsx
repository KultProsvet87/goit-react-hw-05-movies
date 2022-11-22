import { SearchBtn, SearchInput, StyledForm } from './SearchForm.styled';

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
    <StyledForm onSubmit={handleSubmite}>
      <SearchInput
        name="query"
        type="text"
        value={query}
        onChange={handleChange}
      />
      <SearchBtn type="submite">Search</SearchBtn>
    </StyledForm>
  );
};
