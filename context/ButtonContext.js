import React, { useContext, useState } from "react"

interface ContextProps {
  // defaultValue: null
}

const ButtonContext = React.createContext<ContextProps | null>(null)
const ButtonUpdateContext = React.createContext<ContextProps | null>(null)

export function useButton() {
  return useContext(ButtonContext)
}

export function useButtonUpdate() {
  return useContext(ButtonUpdateContext)
}

export function ButtonProvider ( { children }:{children: any} ) {
  const [renderProjects, setRenderProjects] = useState(false);
  console.log('renderProjects', renderProjects);

  function toggleButton() {
    setRenderProjects(prevRenderProjects => !prevRenderProjects);
  }


  return (
    <ButtonContext.Provider value={renderProjects}>
      <ButtonUpdateContext.Provider value={toggleButton}>
        {children}
      </ButtonUpdateContext.Provider>
    </ButtonContext.Provider>
  )
}