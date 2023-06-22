import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonRouterLink, IonImg } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { useHistory } from 'react-router-dom';
import classes from './Login.module.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from './Login.module.css'
SwiperCore.use([Navigation, Pagination]);

const Login: React.FC = () => {
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean | undefined>(undefined);
  const [isValidPassword, setIsValidPassword] = useState<boolean | undefined>(undefined);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const hideTabBar = (): void => {
      const tabBar = document.getElementById('IonTabBar');
      if (tabBar !== null) {
        tabBar.style.display = 'none';
      }
    };

    hideTabBar();
  }, []);
  // localStorage.setItem('whoIsLogged', '');

    const validateEmail = (email: string) => {
      return email.match(
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      );
    };
  
    const validate = (ev: Event, type:string) => {
      const value = (ev.target as HTMLInputElement).value;
      if (value === '') return;
      if(type == "em")
      {
      setIsValidEmail(undefined);
      validateEmail(value) !== null ? setIsValidEmail(true) : setIsValidEmail(false);
    }
    else{
      value.length> 4? setIsValidPassword(true):setIsValidPassword(false)
    }

    };
  
    const markTouched = () => {
      setIsFormTouched(true);
    };

    const history = useHistory();

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
      if (activeIndex === 1) {
        localStorage.setItem('whoIsLogged', 'psychologist');
      } else if(activeIndex === 0) {
        localStorage.setItem('whoIsLogged', 'patient');
      }
    
      if (isValidEmail && isValidPassword) {
        console.log('Navigating to /home');
        history.push('/home'); // Navigate to another page
      } else {
        event.preventDefault();
      }
    };
    

    return (
        <IonPage className={styles.page}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>MindTrack App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            <Swiper
          navigation
        //   loop={true} 
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          <SwiperSlide>
            <IonImg className="centered-image" src="src\assets\boy-mental-health-with-flowers.jpg" alt="boy_with_flowers" />
          </SwiperSlide>
          <SwiperSlide>
            <IonImg className="centered-image" src="src\assets\psychologist-login.jpg" alt="psychologist" />
          </SwiperSlide>
        </Swiper>
              {/* <IonImg  className={`${classes.photo}`} src="src\assets\boy-mental-health-with-flowers.jpg" alt='boy_with_flowers'></IonImg> */}

                <form onSubmit={submitHandler}>
                <IonInput
                    className={`${isValidEmail && 'ion-valid'} ${isValidEmail === false && 'ion-invalid'} ${isFormTouched && 'ion-touched'}`}
                    type="email"
                    fill="solid"
                    label="Email"
                    labelPlacement="floating"
                    helperText="Enter a valid email"
                    errorText="Invalid email"
                    onIonInput={(event) => validate(event, "em")}
                    onIonBlur={() => markTouched()}>
                </IonInput>
                <IonInput
                    className={`${isValidPassword && 'ion-valid'} ${isValidPassword === false && 'ion-invalid'} ${isFormTouched && 'ion-touched'}`}
                    type="password"
                    fill="solid"
                    label="password"
                    labelPlacement="floating"
                    helperText="Enter a valid password"
                    errorText="Invalid password"
                    onIonInput={(event) => validate(event,"")}
                    onIonBlur={() => markTouched()}>
                </IonInput>
                <div className='ion-text-center'>
                <IonButton type='submit'>Submit</IonButton>
                </div>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Login;