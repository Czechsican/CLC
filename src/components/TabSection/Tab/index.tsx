import { tabDomId, panelDomId } from '../tabIds';
import styles from './Tab.module.css';
import type { TabProps } from '../../../types';

const Tab = ({id, label, setActive, active = false}: TabProps) => {
  return (
    <button
      type="button"
      role="tab"
      id={tabDomId(id)}
      aria-selected={active}
      aria-controls={panelDomId(id)}
      // Roving tabindex: only the active tab is in the tab order, arrows move between tabs
      tabIndex={active ? 0 : -1}
      className={active ? `${styles.tab} ${styles.active}` : styles.tab}
      onClick={() => setActive(id)}
    >
      {label}
    </button>
  );
};

export default Tab;
