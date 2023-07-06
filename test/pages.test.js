const axios = require("axios");

describe("Page Tests", () => {
  it("Home page tests", async () => {
    const response = await axios.get("http://localhost:3000/");
    expect(response.status).toBe(200);
  });
});
