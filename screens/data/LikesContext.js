import React, { createContext, useState } from 'react';

export const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState({});

  const toggleLike = (itemId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [itemId]: !prevLikes[itemId],
    }));
  };

  return (
    <LikesContext.Provider value={{ likes, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
};
