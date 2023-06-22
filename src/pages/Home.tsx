import React, { useEffect } from 'react';
import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import EmojiSelection from '../components/HomeComponents/EmojiSelection';
import DailyCheckIn from '../components/HomeComponents/DailyCheckIn';
import EmojiChart from '../components/HomesPychologistComponents/EmojiChart';
import FakePatientDataCard from '../components/HomesPychologistComponents/FakePatientDataCard';
import styles from './Home.module.css'
import NextMed from '../components/HomeComponents/nextMed';
import TodayGoals from '../components/HomeComponents/TodayGoals';
const Home: React.FC = () => {
  const isPatient = localStorage.getItem('whoIsLogged') === 'patient';
  useEffect(() => {
    const ShowTabBar = (): void => {
      const tabBar = document.getElementById('IonTabBar');
      if (tabBar !== null) {
        tabBar.style.display = 'flex';
      }
    };

    ShowTabBar();
  }, []);
  // console.log(localStorage.getItem('whoIsLogged'));
  return (
    <IonPage className={styles.pageBackground}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {isPatient ? (
          <>
            <EmojiSelection />
            <DailyCheckIn />
            {/* <IonGrid> */}
              <IonRow>
                <IonCol size='6'>
            <NextMed/>
            </IonCol>
            <IonCol size='6'>
            <TodayGoals/>
            </IonCol>
            </IonRow>
            {/* </IonGrid> */}
          </>
        ) : (
          <>
            <FakePatientDataCard></FakePatientDataCard>
            <EmojiChart />
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
