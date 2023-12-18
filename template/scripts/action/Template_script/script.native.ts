type ExampleIntegration = {
  token: string;
};
/**
 * This is a summary
 * This is a description

 */
export async function main(auth: ExampleIntegration) {
  const url = new URL(`https://postman-echo.com/get`);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + auth.token,
    },
    body: undefined,
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`${response.status} ${text}`);
  }
  return await response.json();
}
