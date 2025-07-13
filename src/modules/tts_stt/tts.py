import pyttsx3

class TTS:
    def __init__(self):
        self.engine = pyttsx3.init()
        self.engine.setProperty('rate', 150)  # Speed
        self.engine.setProperty('volume', 1.0)  # Volume

    def speak(self, text):
        self.engine.say(text)
        self.engine.runAndWait()

# Usage example:
# tts = TTS()
# tts.speak('Hello, this is text to speech.')