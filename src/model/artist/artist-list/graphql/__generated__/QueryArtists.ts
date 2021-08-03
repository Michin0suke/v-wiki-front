/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryArtists
// ====================================================

export interface QueryArtists_artists_relatedArtists_relatedArtist {
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
  birthday: DateWithoutTime | null;
  age: number | null;
  height: number | null;
  heightUnit: string;
  weight: number | null;
  weightUnit: string;
  annualIncome: number | null;
}

export interface QueryArtists_artists_relatedArtists_artistRelationType {
  __typename: "ArtistRelationTypeGraphql";
  positiveDirectionName: string;
  negativeDirectionName: string;
}

export interface QueryArtists_artists_relatedArtists {
  __typename: "ArtistRelationGraphql";
  relatedArtist: QueryArtists_artists_relatedArtists_relatedArtist;
  artistRelationType: QueryArtists_artists_relatedArtists_artistRelationType;
  isPositiveDirection: boolean;
}

export interface QueryArtists_artists {
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
  birthday: DateWithoutTime | null;
  age: number | null;
  themeHue: number | null;
  height: number | null;
  heightUnit: string;
  weight: number | null;
  weightUnit: string;
  annualIncome: number | null;
  relatedArtists: QueryArtists_artists_relatedArtists[];
}

export interface QueryArtists {
  artists: QueryArtists_artists[];
}
