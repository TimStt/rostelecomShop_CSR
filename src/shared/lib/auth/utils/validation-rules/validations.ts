export const isValidEmailRules = (
  message: string,
  requeredMessage?: string
) => ({
  ...(requeredMessage && { required: requeredMessage }),
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: message,
  },
});

export const isValidPasswordRules = (
  message: string,
  requeredMessage?: string
) => ({
  ...(requeredMessage && { required: requeredMessage }),
  minLength: {
    value: 8,
    message: message,
  },
});

export const isValidUsernameRules = (
  message: string,
  requeredMessage?: string
) => ({
  ...(requeredMessage && { required: requeredMessage }),
  pattern: {
    value: /^[a-zA-Z0-9_]+$/,
    message: message,
  },
  minLength: 3,
  maxLength: 20,
});
