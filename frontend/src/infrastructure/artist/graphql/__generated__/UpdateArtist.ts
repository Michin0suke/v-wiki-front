/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateArtist
// ====================================================

export interface UpdateArtist_updateArtist_relatedArtists_relatedArtist {
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

export interface UpdateArtist_updateArtist_relatedArtists_artistRelationType {
  __typename: "ArtistRelationTypeGraphql";
  positiveDirectionName: string;
  negativeDirectionName: string;
}

export interface UpdateArtist_updateArtist_relatedArtists {
  __typename: "ArtistRelationGraphql";
  relatedArtist: UpdateArtist_updateArtist_relatedArtists_relatedArtist;
  artistRelationType: UpdateArtist_updateArtist_relatedArtists_artistRelationType;
  isPositiveDirection: boolean;
}

export interface UpdateArtist_updateArtist {
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
  relatedArtists: UpdateArtist_updateArtist_relatedArtists[];
}

export interface UpdateArtist {
  updateArtist: UpdateArtist_updateArtist;
}

export interface UpdateArtistVariables {
  id: string;
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
