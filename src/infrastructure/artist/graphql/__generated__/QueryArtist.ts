/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryArtist
// ====================================================

export interface QueryArtist_findArtistById_relatedArtists_relatedArtist {
  __typename: "ArtistGraphql";
  id: string;
  name: string;
  isV: boolean;
  vType: string;
  nameRuby: string | null;
  youtubeChannelId: string | null;
  twitterId: string | null;
  gender: string | null;
  profile: string | null;
  birthday: string | null;
  age: number | null;
  height: number | null;
  heightUnit: string;
  weight: number | null;
  weightUnit: string;
}

export interface QueryArtist_findArtistById_relatedArtists_artistRelationType {
  __typename: "ArtistRelationTypeGraphql";
  positiveDirectionName: string;
  negativeDirectionName: string;
}

export interface QueryArtist_findArtistById_relatedArtists {
  __typename: "ArtistRelationGraphql";
  relatedArtist: QueryArtist_findArtistById_relatedArtists_relatedArtist;
  artistRelationType: QueryArtist_findArtistById_relatedArtists_artistRelationType;
  isPositiveDirection: boolean;
}

export interface QueryArtist_findArtistById {
  __typename: "ArtistGraphql";
  id: string;
  name: string;
  isV: boolean;
  vType: string;
  nameRuby: string | null;
  youtubeChannelId: string | null;
  twitterId: string | null;
  gender: string | null;
  profile: string | null;
  birthday: string | null;
  age: number | null;
  themeHue: number | null;
  height: number | null;
  heightUnit: string;
  weight: number | null;
  weightUnit: string;
  relatedArtists: QueryArtist_findArtistById_relatedArtists[];
}

export interface QueryArtist {
  findArtistById: QueryArtist_findArtistById | null;
}

export interface QueryArtistVariables {
  id: string;
}
