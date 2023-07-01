/* eslint-disable no-useless-escape */
export const isEmailValid = (email: string) => {
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return Boolean(email.toLowerCase().match(EMAIL_REGEX));
};

export const isUsernameValid = (username: string) => {
  const USERNAME_REGEX =
    /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  return Boolean(username.match(USERNAME_REGEX));
};
