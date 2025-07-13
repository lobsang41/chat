# Configuration settings
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRET_KEY = 'your-secret-key'

# TTS Engine
TTS_ENGINE = 'pyttsx3'  # Recommended: lightweight, offline, Linux-compatible