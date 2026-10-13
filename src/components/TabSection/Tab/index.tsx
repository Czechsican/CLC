import styles from './Tab.module.css';
import type { TabProps } from '../../../types';

const Tab = ({value, setActive, active = false}: TabProps) => {

  const tabStyle = active ? `${styles.tab} ${styles.active}` : `${styles.tab}`;

  const handleSetActive = () => {
    return setActive(value)
  }

  return (
    <label className={tabStyle}>
      <input type="radio" name="item" value={value} onClick={handleSetActive}></input>
      {value}
    </label>
  );
};

export default Tab;