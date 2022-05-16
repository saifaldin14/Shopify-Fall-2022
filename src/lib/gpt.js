const gpt = {
  /**
   * Function to fetch the responses from the OpenAI GPT3 API
   * @returns An  object containing the response corresponding to the passed prompt
   */
  async getGPT(data, engine = "text-curie-001") {
    const res = await fetch(
      `https://api.openai.com/v1/engines/${engine}/completions`,
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
