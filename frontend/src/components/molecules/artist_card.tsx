import React from 'react'
import { SuperEllipseImage } from '~/components/atoms/super_ellipse_image'
import { SuperEllipse } from '~/components/atoms/super_ellipse'
import { BorderedText } from '../atoms/bordered_text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { ArtistCardType } from '~/model/artist/shared/artist-card'

type Props = {
  className?: string
  withDelBtn?: boolean
  artist: ArtistCardType
  href?: string
  url: string
}

export const ArtistCard: React.FC<Props> = ({
  className,
  withDelBtn,
  artist,
  href,
  url,
}) => {
  return (
    <Link href={href ?? ''}>
      <div
        className={`w-full flex relative border px-2 py-3 rounded-2xl ${className}`}
        style={{
          color: artist.color.themeAAA,
          backgroundColor: artist.color.base,
        }}
      >
        <div className="flex flex-col justify-center">
          <div className="relative w-40 h-40">
            <SuperEllipse fill={artist.color.themeAA} />
            <SuperEllipseImage
              src={url}
              className="absolute m-auto top-0 right-0 bottom-0 left-0 w-11/12"
            />
            {artist && artist.vType && (
              <BorderedText
                className="absolute top-0 left-0"
                backgroundColor="#fff"
                textColor={artist.color.themeAAA}
                borderColor={artist.color.themeAA}
                rounded
              >
                {artist.vType}
              </BorderedText>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 justify-center pl-5 pt-1">
          {/* <BorderedText
            className="flex-1"
            backgroundColor="#fff"
            textColor={artist.color.themeAAA}
            borderColor={artist.color.themeAA}
          >
            aaaaaaaaaabbbbbbbbbb
          </BorderedText> */}
          <p className="">KAMITSUBAKI STUDIO</p>
          <p className="text-3xl">{artist ? artist.name : '花譜'}</p>
          <p className="">{artist ? artist.nameRuby : 'かふ'}</p>
          <p>
            <FontAwesomeIcon
              icon={faTwitterSquare}
              className="text-lg align-middle"
            />
            <span className="ml-2">
              @{artist ? artist.twitterId : 'virtual_kaf'}
            </span>
          </p>
        </div>
        {withDelBtn && (
          <FontAwesomeIcon
            icon={faTimesCircle}
            className="absolute top-3 right-3 text-3xl"
          />
        )}
        <div
          className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0 hover:opacity-10"
          style={{ backgroundColor: artist.color.theme }}
        />
      </div>
    </Link>
  )
}
