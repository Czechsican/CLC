import styles from './Tab.module.css';
import type { TabProps } from '../../../types';

const Tab = ({value, id, panelId, setActive, active = false}: TabProps) => {
  return (
    <button
      type="button"
      role="tab"
      id={id}
      aria-selected={active}
      aria-controls={panelId}
      // Roving tabindex: only the active tab is in the tab order, arrows move between tabs
      tabIndex={active ? 0 : -1}
      className={active ? `${styles.tab} ${styles.active}` : styles.tab}
      onClick={() => setActive(value)}
    >
      {value}
    </button>
  );
};

export default Tab;
