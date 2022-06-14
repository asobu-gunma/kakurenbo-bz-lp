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