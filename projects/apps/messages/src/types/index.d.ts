declare global {
  export type Theme = 'dark' | 'light'

  interface Message {
    sender: number
    text: string
    image?: string
    time: any
    type: MessageType
    avatar?: string
    reacts?: string[]
  }
  interface MessageInList {
    id: number
    name: string
    img: string
    time: any
    message: string
  }

  interface ContactList {
    id: number
    name: string
    img: string
    lastOnline: number
  }
}

export {}
