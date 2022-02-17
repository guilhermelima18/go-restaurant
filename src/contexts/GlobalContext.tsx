import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ChangedFoodsProps {
  children: ReactNode;
}

interface ChangedFoodsData {
  hasChanged: boolean;
  setHasChanged: Dispatch<SetStateAction<boolean>>;
}

const ChangedFoodsContext = createContext({} as ChangedFoodsData);

export function ChangedFoods({ children }: ChangedFoodsProps) {
  const [hasChanged, setHasChanged] = useState(false);

  return (
    <ChangedFoodsContext.Provider value={{ hasChanged, setHasChanged }}>
      {children}
    </ChangedFoodsContext.Provider>
  );
}

export const useChangedFoods = () => useContext(ChangedFoodsContext);
