import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import styles from './FakePatientDataCard.module.css';

const FakePatientDataCard = () => {
  const patientData = {
    name: 'John Doe',
    age: 30,
    diagnosis: 'Anxiety',
    lastVisit: '2023-06-15',
    symptoms: ['Restlessness', 'Insomnia', 'Difficulty concentrating']
  };

  return (
    <IonCard className={styles.patientCard}>
      <IonCardHeader>
        <IonCardSubtitle className={styles.patientCardSubtitle}>Patient Data</IonCardSubtitle>
        <IonCardTitle className={styles.patientCardTitle}>{patientData.name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
      <IonGrid>
<IonRow>
  <IonCol>

        <p className={styles.patientCardInfo}><strong>Age:</strong> {patientData.age}</p>
        <p className={styles.patientCardInfo}><strong>Diagnosis:</strong> {patientData.diagnosis}</p>
        <p className={styles.patientCardInfo}><strong>Last Visit:</strong> {patientData.lastVisit}</p>
        <p className={styles.patientCardInfo}><strong>Symptoms:</strong></p>
        <ul className={styles.patientCardSymptoms}>
          {patientData.symptoms.map((symptom, index) => (
            <li key={index}>{symptom}</li>
          ))}
        </ul>
        </IonCol>
<IonCol>
        <IonImg src='src\assets\boy-mental-health-with-flowers.jpg'/></IonCol>
</IonRow>

</IonGrid>

      </IonCardContent>
    </IonCard>
  );
};
export default FakePatientDataCard;
