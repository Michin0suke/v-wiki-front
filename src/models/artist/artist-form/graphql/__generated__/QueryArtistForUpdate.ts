/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DateWithoutTime } from "~/graphql/dateWithoutTime";

// ====================================================
// GraphQL query operation: QueryArtistForUpdate
// ====================================================

export interface QueryArtistForUpdate_artist_relatedArtists_relatedArtist {
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

export interface QueryArtistForUpdate_artist_relatedArtists_artistRelationType {
  __typename: "ArtistRelationTypeGraphql";
  positiveDirectionName: string;
  negativeDirectionName: string;
}

export interface QueryArtistForUpdate_artist_relatedArtists {
  __typename: "ArtistRelationGraphql";
  relatedArtist: QueryArtistForUpdate_artist_relatedArtists_relatedArtist;
  artistRelationType: QueryArtistForUpdate_artist_relatedArtists_artistRelationType;
  isPositiveDirection: boolean;
}

export interface QueryArtistForUpdate_artist {
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
  relatedArtists: QueryArtistForUpdate_artist_relatedArtists[];
}

export interface QueryArtistForUpdate {
  artist: QueryArtistForUpdate_artist | null;
}

export interface QueryArtistForUpdateVariables {
  id: string;
}
