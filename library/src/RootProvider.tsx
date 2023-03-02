import React, { PropsWithChildren } from 'react'
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"


const RootProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <DndProvider backend={HTML5Backend}>
            {children}
        </DndProvider>
    )
}

export default RootProvider