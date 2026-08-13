let listeners = [];

export const getTheme = () => {
  return localStorage.getItem("theme");
};

export const isDark = () => {
  const theme = getTheme();

  if (theme === "light") return false;

  // Default theme is dark for every user
  return true;
};

export const applyTheme = () => {
  document.documentElement.classList.toggle("dark", isDark());

  listeners.forEach((cb) => cb());
};

export const setTheme = (theme) => {
  localStorage.setItem("theme", theme);
  applyTheme();
};

export const subscribeTheme = (callback) => {
  listeners.push(callback);

  return () => {
    listeners = listeners.filter((cb) => cb !== callback);
  };
};
