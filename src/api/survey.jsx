import { http_query } from "./http_query";

export async function select() {
    const response = await http_query("survey", "select", "POST");
    if (!response) return [];
    return schematize(response.data);
}

export async function insert(formData) {
    const response = await http_query("survey", "insert", "POST", formData);
    if (!response) return [];
    return response;
}

export async function update(formData) {
    const response = await http_query("survey", "update", "POST", formData);
    if (!response) return [];
    return response;
}

export async function dell(formData) {
    const response = await http_query("survey", "delete", "POST", formData);
    if (!response) return [];
    return response;
}

function schematize(rows) {
    return rows.map((row) => {
        return {
            survey_id: row.survey_id,
            survey_question: row.survey_question,
            survey_answer: row.survey_answer,
            survey_image: row.survey_image,
            survey_last: row.survey_last,
            survey_created: row.survey_created,
            survey_image_url: row.survey_image_url,
        };
    });
}
