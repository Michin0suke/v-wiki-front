/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateArtist
// ====================================================

export interface UpdateArtist_update {
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
}

export interface UpdateArtist {
  update: UpdateArtist_update;
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
  birthday?: DateWithoutTime | null;
  age?: number | null;
  themeHue?: number | null;
  height?: number | null;
  heightUnit?: string | null;
  weight?: number | null;
  weightUnit?: string | null;
  annualIncome?: number | null;
}
