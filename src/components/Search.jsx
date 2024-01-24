import "./Search.css";
import { useSelectHtml } from "../hooks/search";
// import { useState } from "react";

Filter.propTypes = null;

export default function Filter({
    limits,
    limitSelectedLabel,
    limitOnSelection,
    isLimitSelected,
    filters,
    filterSelectedLabel,
    filterOnSelection,
    isFilterSelected,
    handleSearch,
    valueSearch,
}) {
    return (
        <>
            <div className="search-component">
                <SelectHtml
                    placeholder="Limite: "
                    options={limits}
                    optionLabelSelected={limitSelectedLabel}
                    onSelection={limitOnSelection}
                    isSelected={isLimitSelected}
                />
                <SelectHtml
                    placeholder="Filtrar por: "
                    options={filters}
                    optionLabelSelected={filterSelectedLabel}
                    onSelection={filterOnSelection}
                    isSelected={isFilterSelected}
                />
                <input type="search" placeholder="Search" value={valueSearch} onChange={(e) => handleSearch(e.target.value)} />
            </div>
        </>
    );
}

SelectHtml.propTypes = null;
function SelectHtml({ placeholder, optionLabelSelected, options, onSelection, isSelected }) {
    const [filterForClass, filterForHandleSelect, filterForToggle] = useSelectHtml({ onSelection });
    return (
        <div className={"filter" + filterForClass}>
            <div className="selected" onClick={filterForToggle}>
                <b>{placeholder}</b>
                <span>{optionLabelSelected}</span>
                <i className="fas fa-chevron-down"></i>
            </div>
            <ul>
                {options.map((option, index) => (
                    <Option
                        key={option.value + index}
                        id={"filter-" + option.value + index}
                        option={option}
                        isOptionSelected={isSelected}
                        selectFilter={filterForHandleSelect}
                    />
                ))}
            </ul>
        </div>
    );
}

Option.propTypes = null;

function Option({ id, option, isOptionSelected, selectFilter }) {
    return (
        <li>
            <input type="radio" name="filter" value={option.value} id={id} checked={isOptionSelected(option.value)} onChange={selectFilter} />
            <label htmlFor={id}>{option.label}</label>
        </li>
    );
}
