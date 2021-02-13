import { useState, useEffect } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    document.title = title;
  };
  useEffect(updateTitle, [title]);

  return setTitle;
};