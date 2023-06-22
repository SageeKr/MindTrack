import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import styles from './DailyCheckIn.module.css';
import { chevronForward } from 'ionicons/icons';

const DailyCheckIn: React.FC = () => {
  return (
    <IonCard className={styles.card}>
      <IonCardContent>
        <IonCardSubtitle>Daily Check-In</IonCardSubtitle>
        <IonGrid>
          <IonRow className={styles.checkInRow}>
            <IonCol>
              <IonCardSubtitle className={styles.SubTitle}>How are you doing today?</IonCardSubtitle>
              </IonCol>
              <IonCol>
              <div className={styles.iconContainer}>
                <IonImg className={styles.listPhoto} src='src\assets\listPic.jpg' />
                <IonIcon icon={chevronForward} className={styles.icon} />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div style={{ textAlign: 'center' }}>
          <IonButton expand="full" className={styles.DailyCheckBtn}>Add new Daily Check-in</IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default DailyCheckIn;
