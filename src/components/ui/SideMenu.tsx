import React from 'react';
import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { calendarNumberOutline, chatbubbleOutline, clipboardOutline, personOutline, settingsOutline } from 'ionicons/icons';

function SideMenu() {
  return (
    <>
<IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent>
      </IonPage>
      {/* <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonItem>
              <IonLabel>
                <IonIcon icon={clipboardOutline} />
                &nbsp;Dashboard
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <IonIcon icon={personOutline} />
                &nbsp;Patients
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <IonIcon icon={calendarNumberOutline} />
                &nbsp;Calendar
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <IonIcon icon={settingsOutline} />
                &nbsp;Settings
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <IonIcon icon={chatbubbleOutline} />
                &nbsp;Support
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent>
      </IonPage> */}
    </>
  );
}

export default SideMenu;
