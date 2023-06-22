import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import styles from './EmojiSelection.module.css'
const EmojiSelection: React.FC = () => {

    return (
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>How are you?</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <div className={styles.emojiContainer}>
              <a>
                <span role="img" aria-label="Bad Emoji" className={styles.emoji}>😞</span>
                <p className ={styles.emojiLabel}>Bad</p>
              </a>
              <a>
                <span role="img" aria-label="Okay Emoji" className={styles.emoji}>😐</span>
                <p className ={styles.emojiLabel}>Okay</p>
              </a>
              <a>
                <span role="img" aria-label="Good Emoji" className={styles.emoji}>🙂</span>
                <p className ={styles.emojiLabel}>Good</p>
              </a>
              <a>
                <span role="img" aria-label="Great Emoji" className={styles.emoji}>😄</span>
                <p className ={styles.emojiLabel}>Great</p>
              </a>
            </div>
          </IonCardContent>
        </IonCard>
    );
};

export default EmojiSelection;