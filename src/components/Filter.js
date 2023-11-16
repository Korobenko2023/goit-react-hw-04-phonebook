import { FilterDiv, FilterInput, FilterLabel } from "./Filter.style";

export const Filter = ({ filter, onChange }) => {
        return (
            <FilterDiv>
                <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
                <FilterInput
                    type="text"
                    name="filter"
                    id="filter"
                    value={filter}
                    onChange={(e) => onChange(e.target.value)}
                />
            </FilterDiv>
        );
};

