import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface CardProps {
  subtitle: string;
  title: string;
  content: React.ReactNode;
}

const CustomCard: React.FC<CardProps> = ({ subtitle, title, content }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>{subtitle}</IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {content}
      </IonCardContent>
    </IonCard>
  );
};

export default CustomCard;
