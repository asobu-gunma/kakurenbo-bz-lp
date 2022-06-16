export interface NavItem {
  text: string
  url: string
  external?: boolean
}

export interface NavIcon {
  name: string
  url: string
}

export interface News {
  id: number
  postedAt: string
  category: string
  title: string
  url: string
  external: boolean
}

export interface Member {
  id: number
  name: string
  title: string
}

export interface Contact {
  state: string
  category: string
  name: string
  email: string
  tel: string
  organization: string
  requests: string[]
  message: string
}