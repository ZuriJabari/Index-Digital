// Sound effect utility for interactive elements
class SoundEffect {
  private static instance: SoundEffect
  private audioContext: AudioContext | null = null
  private sounds: Map<string, AudioBuffer> = new Map()
  private volume = 0.1 // Default volume

  private constructor() {
    if (typeof window !== 'undefined') {
      this.audioContext = new AudioContext()
    }
  }

  static getInstance(): SoundEffect {
    if (!SoundEffect.instance) {
      SoundEffect.instance = new SoundEffect()
    }
    return SoundEffect.instance
  }

  async loadSound(name: string, url: string) {
    if (!this.audioContext) return

    try {
      const response = await fetch(url)
      const arrayBuffer = await response.arrayBuffer()
      const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer)
      this.sounds.set(name, audioBuffer)
    } catch (error) {
      console.error(`Failed to load sound: ${name}`, error)
    }
  }

  play(name: string) {
    if (!this.audioContext) return

    const sound = this.sounds.get(name)
    if (!sound) return

    const source = this.audioContext.createBufferSource()
    const gainNode = this.audioContext.createGain()
    
    source.buffer = sound
    gainNode.gain.value = this.volume
    
    source.connect(gainNode)
    gainNode.connect(this.audioContext.destination)
    
    source.start(0)
  }

  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume))
  }
}

// Initialize and export sound effects
export const soundEffects = SoundEffect.getInstance()

// Load sound effects
if (typeof window !== 'undefined') {
  // Soft click sound for buttons
  soundEffects.loadSound('soft-click', '/sounds/soft-click.mp3')
  // Hover sound for cards
  soundEffects.loadSound('hover', '/sounds/hover.mp3')
  // Flip sound for cards
  soundEffects.loadSound('flip', '/sounds/flip.mp3')
  // Success sound for animations
  soundEffects.loadSound('success', '/sounds/success.mp3')
}
