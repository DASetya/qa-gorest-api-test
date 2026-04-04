export const userPayload = () => ({
  name: "John Doe",
  email: `John_Doe_${Math.random()}@mail.com`, // Unique email
  gender: "male",
  status: "active",
});

export const userPayloadWithoutEmail = () => ({
  name: "John Doe",
  gender: "male",
  status: "active",
});
