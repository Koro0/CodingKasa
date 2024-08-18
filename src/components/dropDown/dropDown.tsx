import arrowUp from '../../images/arrow_dropdown_up.svg';
import arrowDown from '../../images/arrow_dropdown_down.svg';
interface DropdownTypes {
  downDropActive: boolean;
  setAction: (value: boolean | ((prevState: boolean) => boolean)) => void;
}
export default function Dropdown({ downDropActive, setAction }: DropdownTypes) {
  return (
    <>
      <span
        className={downDropActive ? 'down' : 'up'}
        onClick={() => setAction}
        role="button"
      >
        <img src={downDropActive ? arrowUp : arrowDown} alt="" />
      </span>
    </>
  );
}
