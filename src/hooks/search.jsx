import { useState } from "react";

export function useSearch() {
    // search
    const [search, setSearch] = useState("");
    const handleSearch = (value) => {
        setSearch(value);
    };

    // exports
    return {
        valueSearch: search,
        handleSearch,
    };
}

export function useFilter({ defaultLabel, defaultFilter }) {
    // filter
    const [labelSelected, setLabelSelected] = useState(defaultLabel);

    const [filterSelected, setFilterSelected] = useState(defaultFilter);
    const selectFilter = ({ value, label }) => {
        setFilterSelected(value);
        setLabelSelected(label);
    };

    const isFilterSelected = (value) => {
        return filterSelected == value;
    };

    // exports
    return [labelSelected, filterSelected, selectFilter, isFilterSelected];
}

export function useSelectHtml({ onSelection }) {
    const [selectHtmlOpen, setSelectHtmlOpen] = useState(false);

    const handleSelection = (e) => {
        onSelection({ value: e.target.value, label: e.target.nextSibling.innerText });
        setSelectHtmlOpen(false);
    };

    const toggleOpen = () => {
        setSelectHtmlOpen(!selectHtmlOpen);
    };

    return [selectHtmlOpen ? " open" : "", handleSelection, toggleOpen];
}
