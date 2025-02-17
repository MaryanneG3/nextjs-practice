import { useAtom } from "jotai";
import { checkedAtom } from "../states/checkBoxAtoms";

export const useCheckbox = () => {
  const [checked, setChecked] = useAtom(checkedAtom);

  return {
    checked,
    setChecked,
  };
};
