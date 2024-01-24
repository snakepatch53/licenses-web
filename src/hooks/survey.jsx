import { useEffect, useState } from "react";
import { findBestMatch } from "string-similarity";
import { select as selectSurvey } from "../api/survey";

export function useResult({ filters, selectedFilter, selectedLimit, valueSearch }) {
    const [surveys, setSurveys] = useState([]);
    const [surveysFiltered, setSurveysFiltered] = useState(null);

    useEffect(() => {
        selectSurvey().then((response) => {
            setSurveys(response);
        });
    }, []);

    useEffect(() => {
        const result = handleFilter({ valueSearch, selectedFilter, surveys, filters, setSurveysFiltered });
        const result2 = result ? result.map((item) => item.row) : null;
        setSurveysFiltered(result2);
    }, [selectedFilter, valueSearch, surveys, filters]);

    const insertSurvey = (newSurvey) => {
        setSurveys([...surveys, newSurvey]);
    };

    const updateSurvey = (newSurvey) => {
        setSurveys([...surveys.map((_survey) => (_survey.survey_id == newSurvey.survey_id ? newSurvey : _survey))]);
    };

    const deleteSurvey = (survey_id) => {
        const response = surveys.filter((survey) => survey.survey_id !== survey_id);
        setSurveys(response);
    };

    const results = surveysFiltered || surveys;
    return {
        surveys: results.slice(0, selectedLimit == "all" ? results.length : selectedLimit),
        insertSurvey,
        updateSurvey,
        deleteSurvey,
    };
}

function compare(row, string1, string2, index) {
    const similarity = findBestMatch(string1, [string2]);
    return {
        index,
        similarityScore: similarity.bestMatch,
        row,
    };
}

function handleFilter({ valueSearch, selectedFilter, surveys, filters, setSurveysFiltered }) {
    if (valueSearch === "") return setSurveysFiltered(null);
    const coincidences = surveys.map((survey, index) => {
        if (selectedFilter === "all") {
            let rs = [];
            filters.forEach((filter) => {
                if (filter.value === "all") return false;
                rs.push(compare(survey, survey[filter.db_name], valueSearch, index));
            });
            return rs.sort((a, b) => b.similarityScore.rating - a.similarityScore.rating)[0];
        }
        for (const filter of filters) {
            if (filter.value === selectedFilter && filter.value !== "all") {
                return compare(survey, survey[filter.db_name], valueSearch, index);
            }
        }
    });
    return coincidences.sort((a, b) => b.similarityScore.rating - a.similarityScore.rating);
}
