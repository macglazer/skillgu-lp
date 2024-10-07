"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';  // Importujemy Image z next/image
import styles from './CookieConsent.module.css';

const CookieConsent: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowPopup(true); // Pokaż popup, jeśli brak zgody
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowPopup(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'false');
        setShowPopup(false);
    };

    if (!showPopup) return null;

    return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.iconWrapper}>
                    <Image
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/37032e17ed8859078f0156ab87777e78e20d273118988695c73e67c003101f55?placeholderIfAbsent=true&apiKey=27f6415f110b4492ae75a2217d69af79"
                        className={styles.icon}
                        alt="Cookie icon"
                        width={80}
                        height={80}
                    />
                </div>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>Ta strona używa plików cookies</h2>
                    <p className={styles.description}>
                        do poprawy funkcjonalności, analizy ruchu oraz personalizacji treści. Klikając &apos;Pozwól&apos;, zgadzasz się na przechowywanie ciasteczek. Klikając &apos;Odmów&apos;, ciasteczka nie będą przechowywane, chyba że są one niezbędne do prawidłowego działania strony. Więcej informacji znajdziesz w naszej polityce prywatności.
                    </p>
                </div>
            </div>
            <div className={styles.buttonGroup}>
                <button className={`${styles.button} ${styles.buttonDecline}`} onClick={handleDecline}>
                    Odmów
                </button>
                <button className={`${styles.button} ${styles.buttonAccept}`} onClick={handleAccept}>
                    Pozwól
                </button>
            </div>
        </section>
    );
};

export default CookieConsent;
