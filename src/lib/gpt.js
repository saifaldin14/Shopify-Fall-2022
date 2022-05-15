const gpt = {
  /**
   * Function to fetch the images from the NASA APOD API
   * Default behaviour: get all images from the first day of the current month to the current day
   * @returns An object containing all images and data for each day in the specified range
   */
  async getGPT(data) {
    const res = await fetch(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
        },
        body: JSON.stringify(data),
      }
    );

    const content = await res.json();
    return content;
  },
};

export default gpt;
