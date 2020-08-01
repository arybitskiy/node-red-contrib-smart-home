import React, { createContext, FunctionComponent, ReactNode, useContext } from 'react';

interface EditableContextValue {
  isEditable: boolean;
}

interface EditableContextProviderProps {
  isEditable?: boolean;
  children: ReactNode;
}

export const EditableContext = createContext<EditableContextValue>({ isEditable: false });

export const EditableContextConsumer = EditableContext.Consumer;

export const useEditableContext = () => useContext(EditableContext);

export const EditableContextProvider: FunctionComponent<EditableContextProviderProps> = ({
  isEditable = false,
  children,
}) => <EditableContext.Provider value={{ isEditable }}>{children}</EditableContext.Provider>;
