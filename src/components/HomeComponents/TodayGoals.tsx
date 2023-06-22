import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import styles from './TodayGoals.module.css';
import { chevronForward } from 'ionicons/icons';

const TodayGoals: React.FC = () => {
  return (
    <IonCard className={styles.card}>
      <IonCardContent>
        <IonCardSubtitle>Today Golas</IonCardSubtitle>
        <IonCardTitle>15:00</IonCardTitle>
        <IonGrid>
          <IonRow className={styles.checkInRow}>
            <IonCol>
              <div className={styles.medicationInfo}>
                <p className={styles.SubTitle}>1 pill (50/100 mg) of Citalopram</p>
                <IonIcon icon={chevronForward} className={styles.icon} />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div style={{ textAlign: 'center' }}>
          <IonRow class={styles.row}>
            <IonCol size='6'>
          <IonButton expand="full" className={styles.DailyCheckBtn}>Skip</IonButton>
          </IonCol>
          <IonCol size='6'>
          <IonButton expand="full" className={styles.DailyCheckBtn}>Done</IonButton>
          </IonCol>

          </IonRow>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default TodayGoals;
