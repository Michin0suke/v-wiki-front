/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateArtist
// ====================================================

export interface CreateArtist_createArtist_relatedArtists_relatedArtist {
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

export interface CreateArtist_createArtist_relatedArtists_artistRelationType {
  __typename: "ArtistRelationTypeGraphql";
  positiveDirectionName: string;
  negativeDirectionName: string;
}

export interface CreateArtist_createArtist_relatedArtists {
  __typename: "ArtistRelationGraphql";
  relatedArtist: CreateArtist_createArtist_relatedArtists_relatedArtist;
  artistRelationType: CreateArtist_createArtist_relatedArtists_artistRelationType;
  isPositiveDirection: boolean;
}

export interface CreateArtist_createArtist {
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
  relatedArtists: CreateArtist_createArtist_relatedArtists[];
}

export interface CreateArtist {
  createArtist: CreateArtist_createArtist;
}

export interface CreateArtistVariables {
  name?: string | null;
  isV?: boolean | null;
  vType?: string | null;
  nameRuby?: string | null;
  youtubeChannelId?: string | null;
  twitterId?: string | null;
  gender?: string | null;
  profile?: string | null;
  birthday?: string | null;
  age?: number | null;
  themeHue?: number | null;
  height?: number | null;
  heightUnit?: string | null;
  weight?: number | null;
  weightUnit?: string | null;
}
