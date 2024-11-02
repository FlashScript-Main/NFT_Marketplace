"use client";

import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
  }

const InstallPWA = () => {
    const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Cast the event to BeforeInstallPromptEvent type
      const promptEvent = e as BeforeInstallPromptEvent;
      
      // Prevent the mini-info bar from appearing on mobile
      promptEvent.preventDefault();
      // Store the event so it can be triggered later
      setInstallPromptEvent(promptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPromptEvent) return;

    // Show the install prompt
    installPromptEvent.prompt();

    // Wait for the user's response
    const choiceResult = await installPromptEvent.userChoice;
    console.log(`User response to the install prompt: ${choiceResult.outcome}`);

    // Clear the saved prompt event
    setInstallPromptEvent(null);
  };
    return (
        <div className={`text-nftCustom-cta |  |  | `}>
      {installPromptEvent && (
        <button onClick={handleInstallClick}>
          Install App
        </button>
      )}
    </div>
    )

}

export default InstallPWA