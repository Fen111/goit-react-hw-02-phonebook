import { nanoid } from 'nanoid';
import s from './Filter.module.css';

export default function Filter({ value, onChange }) {
  const filterId = nanoid();
  return (
    <div className={s.filterWrapper}>
      <label className={s.label} htmlFor={filterId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
        id={filterId}
      />
    </div>
  );
}
