import React, { useContext } from 'react'
import { SuperEllipseImage } from '~/components/atoms/super_ellipse_image'
import { SuperEllipse } from '~/components/atoms/super_ellipse'
import { BorderedText } from '../atoms/bordered_text'
import { ThemeColorContext } from '~/contexts/theme_colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

type Props = {
  className?: string
  profileImageSrc: string
  withDelBtn?: boolean
}

export const ArtistCard: React.FC<Props> = ({
  profileImageSrc,
  className,
  withDelBtn,
}) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <div
      className={`w-full flex relative border px-2 py-3 rounded-2xl ${className}`}
      style={{
        color: themeColors.themeAAA,
        backgroundColor: themeColors.base,
      }}
    >
      <div className="flex flex-col justify-center">
        <div className="relative w-40 h-40">
          <SuperEllipse fill={themeColors.themeAA} />
          <SuperEllipseImage
            src={profileImageSrc}
            className="absolute m-auto top-0 right-0 bottom-0 left-0 w-11/12"
          />
          <BorderedText className="absolute top-0 left-0" rounded>
            Vtuber
          </BorderedText>
        </div>
      </div>
      <div className="flex flex-col items-start gap-1 justify-center pl-5 pt-1">
        <BorderedText className="flex-1">aaaaaaaaaabbbbbbbbbb</BorderedText>
        <p className="">KAMITSUBAKI STUDIO</p>
        <p className="text-3xl">花譜</p>
        <p className="">かふ</p>
        <p>
          <FontAwesomeIcon
            icon={faTwitterSquare}
            className="text-lg align-middle"
          />
          <span className="ml-2">@virtual_kaf</span>
        </p>
      </div>
      {withDelBtn && (
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="absolute top-3 right-3 text-3xl"
        />
      )}
    </div>
  )
}
