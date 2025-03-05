import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk';

// Azure Speech API credentials
const subscriptionKey = "EnterAzureSubscriptionKey";    //kept hidden for security purposes
const region = "EnterAzureRegion";

export const recognizeSpeech = async (setSpokenText) => {
  const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, region);
  const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
  const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

  // Start recognition
  recognizer.startContinuousRecognitionAsync(
    () => {
      console.log("Speech recognition started");
    },
    (error) => {
      console.error("Speech recognition failed:", error);
    }
  );

  recognizer.recognizing = (s, e) => {
    setSpokenText(e.result.text); // Update spoken text
  };

  recognizer.recognized = (s, e) => {
    if (e.result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
      console.log(`Recognized: ${e.result.text}`);
    } else if (e.result.reason === SpeechSDK.ResultReason.NoMatch) {
      console.log("No speech could be recognized.");
    }
  };

  recognizer.canceled = (s, e) => {
    console.error("Speech recognition canceled: ", e.errorDetails);
  };
};
