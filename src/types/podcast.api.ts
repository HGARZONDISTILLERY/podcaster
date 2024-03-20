type TPriceAttributtes = {
  amount: string
  currency: string
}

type TImageAttributtes = {
  height: string
}

export type TImages = {
  label: string
  attributes: TImageAttributtes
}

type TContentAttributes = {
  term: string
  label: string
}

type TPLinkAttributes = {
    rel?: string
    type?: string
    href?: string
}

type TIdAttributtes = {
  "im:id": string
}

type TCategoryAttributes = {
  "im:id": string
  term: string
  scheme: string
  label: string
}

type TReleaseDateAttributes = {
  term: string
  label: string
}

export type TPodcast = {
  'im:name': {
    label: string
  }
  'im:image': TImages[]
  summary: {
    label: string
  }
  'im:price': {
    label: string
    attributes: TPriceAttributtes
  }
  'im:contentType': {
    attributes: TContentAttributes
  }
  right: {
    label: string
  }
  title: {
    label: string
  }
  link: TPLinkAttributes
  "id": {
    label: string
    attributes: TIdAttributtes
  }
  "im:artist": {
    label: string
    attributes: TPLinkAttributes
  }
  category: {
    attributes: TCategoryAttributes
  }
  "im:releaseDate": {
    label: string
    attributes: TReleaseDateAttributes
  }
}

export type TPodcastList = TPodcast[] | unknown

export type TPodcastResponse = {
  feed: {
    author: string
    entry: string
    icon: string
    id: string
    link: string
    rights: string
    title: string
    updated: string
  }
}