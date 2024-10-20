import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterActions } from '@/redux/Filter/filterSlice';

import { Search as SearchIcon } from 'lucide-react';

export function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/store');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    dispatch(filterActions.setSearchValue(searchQuery));
  };

  return (
    <form
      className="flex items-center gap-1 rounded-full bg-gray-50 px-4"
      onSubmit={handleSubmit}
    >
      <SearchIcon size="20px" className="my-2" />
      <input
        type="text"
        placeholder="Search"
        className="w-20 bg-gray-50 p-2 font-bold text-muted-foreground focus:outline-none xs:w-28 sm:w-40"
        onChange={handleChange}
      />
    </form>
  );
}
