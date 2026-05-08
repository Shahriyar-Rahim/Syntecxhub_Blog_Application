import React, { createContext, useState } from 'react'

export const BlogContext = createContext();


export const BlogProvider = ({children}) => {

    const [searchTerm, setSearchTerm] =useState("");
  return (
    <BlogContext value={{searchTerm, setSearchTerm}}>
        {children}
    </BlogContext>
  )
}
