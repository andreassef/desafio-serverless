

export const handle = async (event) => {
  return {
      statusCode: 201,
      body: JSON.stringify({
          message: "Gerson Vascaino",
      }),
      headers: {
          "Content-Type": "application/json",
      }
  }
}