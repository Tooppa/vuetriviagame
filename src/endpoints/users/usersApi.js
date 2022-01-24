const baseUrl = process.env.VUE_APP_USERS_BASE_URL;
const apiKey = process.env.VUE_APP_USERS_API_KEY;

/**
 * Gets all users
 * @returns Users as an Array
 */
export const fetchAll = async () => {
  try {
    const res = await fetch(baseUrl);
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Finds usernames matching the given parameter.
 * @param {string} username
 * @returns All matching usernames
 */
export const find = async (username) => {
  try {
    const res = await fetch(`${baseUrl}/?username=${username}`);
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Creates a new user.
 * @param {string} username
 * @returns Newly created user
 */
export const create = async (username) => {
  try {
    const found = await find(username);
    if (found.length > 0) {
      return {
        succeeded: false,
      };
    }

    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        highScore: 0,
      }),
    });
    const json = await res.json();

    return {
      succeeded: true,
      data: json,
    };
  } catch (error) {
    console.error(error);
  }
};

/**
 * Updates the current users highscore
 * @param {number} userId
 * @param {number} newHighScore
 * @returns Updated user
 */
export const update = async (userId, newHighScore) => {
  try {
    const res = await fetch(`${baseUrl}/${userId}`, {
      method: "PATCH",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        highScore: newHighScore,
      }),
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
