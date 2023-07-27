import React, { useEffect, useState } from 'react';
import styles from "./App.scss";
import HeaderSection from './sections/HeaderSection';
import PanelSection from './sections/PanelSection';
import ListSection from './sections/ListSection';
import { apiListTasksRequest } from './actions/listTasks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import { config } from './config';

function App() {

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(apiListTasksRequest());
    return () => {
      clearInterval(interval);
    };
  }, []);

  // long polling
  // In real practice we can change it to socket
  const interval = setInterval(() => {
    dispatch(apiListTasksRequest());
  }, config.PollingInterval); 

  return (
    <div className={styles.app}>
      <HeaderSection className={styles.section} />
      <PanelSection className={styles.section} />
      <ListSection className={styles.section} />
    </div>
  );
}

export default App;
