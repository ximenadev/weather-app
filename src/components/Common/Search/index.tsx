import { TextInput } from '@mantine/core';
import { ChangeEvent } from 'react';

const Search = ({ handleChange, value }: {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => (
  <TextInput
    placeholder="Search your city..."
    value={value}
    onChange={handleChange}
  />
);

export default Search
