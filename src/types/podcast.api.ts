type TPriceAttributtes = {
  amount: string
  currency: string
}

type TImageAttributtes = {
  height: string
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
  label: string
}

export type TImages = {
  label: string
  attributes: TImageAttributtes
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

export type TPodcastList = TPodcast[]

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

export type TPodcastResultDetail = {
  artistIds: string
  artworkUrl60: string
  artworkUrl160: string
  artworkUrl600: string
  closedCaptioning: string
  collectionId: number
  collectionName: string
  collectionViewUrl: string
  contentAdvisoryRating: string
  country: string
  description: string
  episodeContentType: string
  episodeFileExtension: string
  episodeGuid: string
  episodeUrl: string
  feedUrl: string
  genres: string
  kind: string
  previewUrl: string
  releaseDate: string
  shortDescription: string
  trackId: number
  trackName:string
  trackTimeMillis:number
  trackViewUrl: string
  wrapperType: string
}

export type TPodcastDetails = {
  resultCount: number
  results: TPodcastResultDetail[]
}