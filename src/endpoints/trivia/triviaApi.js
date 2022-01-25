const baseUrl = process.env.VUE_APP_TRIVIA_BASE_URL;

/**
 * Fetches all of the question categories
 * @returns Array of categories
 */
export const fetchCategories = async () => {
  try {
    const res = await fetch(process.env.VUE_APP_TRIVIA_CATEGORY_BASE_URL);
      const json = await res.json();
      return await ['Any Category', ...json.trivia_categories];
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetches questions from the Trivia Api with the given attributes.
 *
 * NOTE: Use 'undefined' when declaring empty parameters
 *
 * @param {number} numberOfQuestions
 * @param {string} category
 * @param {string} difficulty
 * @param {string} type
 * @returns Received questions with parameters
 */
export const fetchQuestions = async (
  numberOfQuestions,
  category,
  difficulty,
  type
) => {
  try {
    if (numberOfQuestions === undefined) {
      throw new Error("numberOfQuestions parameter has to have value");
    }

    const cat = category !== undefined ? `&category=${category}` : "";
    const diff = difficulty !== undefined && difficulty != 'any' ? `&difficulty=${difficulty}` : "";
    const t = type !== undefined ? `&type=${type}` : "";
    const url = `${baseUrl}?amount=${numberOfQuestions}${cat}${diff}${t}`;

    const res = await fetch(url);
    const json = await res.json();

    return await json.results;
  } catch (error) {
    console.error(error);
  }
};
