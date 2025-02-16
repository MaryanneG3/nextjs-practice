import { atom, useAtom } from "jotai";

const checkedAtom = atom(false);

export default function CheckBox() {
  const [checked, setChecked] = useAtom(checkedAtom);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={handleChange} />
    </div>
  );
}

// notes - checked input
// when using the checked prop, you must have an onChange event handler to update the state of the checkbox
