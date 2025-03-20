import { FC, memo, useEffect, useMemo, useRef, useState } from 'react'
import { FaPhone } from 'react-icons/fa6'
import { ImPhoneHangUp } from 'react-icons/im'
import { IoIosArrowUp } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { LuScreenShare, LuVideo } from 'react-icons/lu'
import { PiMicrophoneBold } from 'react-icons/pi'
import classNames from 'classnames'
import useDrag from 'src/hooks/useDrag'
import { useWidth } from 'src/hooks/useResponsive'
import ButtonBase from '../shared/ButtonBase'

const buttons = [
  { icon: LuScreenShare, label: 'Screen cast', key: 'screen' },
  { icon: LuVideo, label: 'Start video', key: 'video' },
  { icon: ImPhoneHangUp, label: 'Decline', key: 'decline' },
  { icon: FaPhone, label: 'Accept', key: 'accept' },
  { icon: PiMicrophoneBold, label: 'Mute', key: 'mute' }
]

interface VideoCallPopupProps {
  className?: string
  status?: 'calling' | 'ringing' | 'waiting' | 'video'
  onClose?: () => void
}

const VideoCallPopup: FC<VideoCallPopupProps> = memo(
  ({ className, onClose, status = 'calling' }) => {
    const width = useWidth()
    const buttonsRender = useMemo(() => buttons, [buttons])
    const ringingRef = useRef<HTMLDivElement | null>(null)
    const [ringingPos, setRingingPos] = useState<{
      x: number
      y: number
    } | null>(null)

    useEffect(() => {
      if (status === 'ringing') {
        requestAnimationFrame(() => {
          if (!ringingRef.current) return
          const rect = ringingRef.current.getBoundingClientRect()
          const windowHeight = window.innerHeight
          const windowWidth = window.innerWidth
          setRingingPos({
            x: windowWidth - rect.right,
            y: windowHeight - rect.bottom - 60
          })
        })
      }
    }, [status])

    const initialPosition =
      ringingPos && status === 'ringing' ? ringingPos : { x: 20, y: width === 'xs' ? 90 : 20 }

    const { dragRef, position, onStart, setPosition } = useDrag(
      initialPosition.x,
      initialPosition.y
    )

    useEffect(() => {
      if (ringingPos && status === 'ringing') {
        setPosition({ x: ringingPos.x, y: ringingPos.y })
      }
    }, [ringingPos, status, setPosition])

    useEffect(() => {
      const fixedPosition = () => {
        setRingingPos({ x: 20, y: width === 'xs' ? 90 : 20 })
      }
      window.addEventListener('resize', fixedPosition)
      return () => {
        window.removeEventListener('resize', fixedPosition)
      }
    }, [width])

    return (
      <div
        className={classNames(
          'w-full h-full sm:min-w-[600px] max-h-screen md:size-full p-5 sm:aspect-square flex flex-col items-stretch bg-content backdrop-blur-[100px] z-[100] overflow-hidden shadow-1 md:shadow-none',
          className
        )}
      >
        <ButtonBase
          onClick={onClose}
          className="size-10 rounded-full absolute top-4 right-4 hover:bg-button hover:backdrop-blur-lg"
        >
          <IoClose className="size-5" />
        </ButtonBase>
        <div className={classNames('flex flex-1 flex-col items-center justify-center')}>
          {status !== 'video' && (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/9da3/e6a4/5742f0ef2aade4b7e0253957a9aab87c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O1mGzaRO0C-P0VqOhAPtj3l-Zfjp-ups1sw8hozphVKRCsTnr7WaNQMeHxVe7fcZ8nV9JQfyZBiYJlnXod1KelgNRqR~FXrWdZiW7YhaB4ho2rhSYGx-c9UhJaFeJuudgZ2IpLYG5DoE5t5OOeZRJZhR3laXANIbV~ekyn-FPkXwZoHMLTVdH~~mXVgZiAQaNIyTIYsk~~cwEHclaE-pNDFFaDYRxGHtFL9cQa3nwaq4qzrOpTAhqywPQF2b2OXDde0OoxU~EmM23UyLiSCDNrx6Z1QAA1rry93cY~5VUy0X7z~HHksebYakMxlaSsCoRr7UFijsyeRyMcvwHw92dw__"
                alt="Avatar"
                className="size-[100px] md:size-[120px] shrink-0 object-cover object-center rounded-full"
              />
              <p className="mt-3 md:mt-4 mb-2 md:mb-[10px] text-main text-3xl md:text-4xl font-semibold">
                Jenela
              </p>
              <p className="text-sub-title">
                {status === 'calling'
                  ? 'Is Calling you...'
                  : status === 'ringing'
                    ? 'Ringing...'
                    : status === 'waiting'
                      ? 'Waiting...'
                      : ''}
              </p>
              {status === 'ringing' && (
                <div
                  ref={ringingRef}
                  className={classNames(
                    'w-[120px] md:w-[200px] rounded-2xl cursor-grab active:cursor-grabbing'
                  )}
                  style={{ visibility: 'hidden' }}
                >
                  <img
                    src="https://s3-alpha-sig.figma.com/img/66e2/9c7f/ee4c97922687b51542ded4d8b13049f3?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HzQa3l9i2HT0VkNmm57X88LGRDO2Mjsbej~n29KG-Rah7nx9i3JHcetHfjdaPRK-4kNR7VN~Uw8ae3GWMiN8b9-qlX2hGz4G7mhU2tsqg0~5Ry91whYEx88hHj1ezYfm~za1rtLgCiJX6haMiiW-AVv2XYFwBJxJ1sCPNcUX0bCWa4UKv7~Gdef1uVUgmzBatQtn1dfJXLfU4PEmGmyhIvm~kqFXcS0tGDxZosQsp~e~pgvEauvyDsgkffVq5RzmEg65M19HvA18xvjibVxfSNvE-qL9KGdeGYi-t2XK2dEcHE70s~pSpM8HI0QjbBUXxqW~Jt5J-vp5dIdHrfJO7A__"
                    alt="video"
                    className="size-full object-cover object-center"
                  />
                </div>
              )}
            </div>
          )}
          {(status === 'ringing' || status === 'video') && (
            <div
              ref={dragRef}
              onMouseDown={onStart}
              onTouchStart={onStart}
              style={{
                bottom: `${position.y}px`,
                right: `${position.x}px`,
                cursor: 'grab',
                zIndex: 50
              }}
              className={classNames(
                'absolute w-[120px] md:w-[200px] cursor-grab active:cursor-grabbing'
              )}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/66e2/9c7f/ee4c97922687b51542ded4d8b13049f3?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HzQa3l9i2HT0VkNmm57X88LGRDO2Mjsbej~n29KG-Rah7nx9i3JHcetHfjdaPRK-4kNR7VN~Uw8ae3GWMiN8b9-qlX2hGz4G7mhU2tsqg0~5Ry91whYEx88hHj1ezYfm~za1rtLgCiJX6haMiiW-AVv2XYFwBJxJ1sCPNcUX0bCWa4UKv7~Gdef1uVUgmzBatQtn1dfJXLfU4PEmGmyhIvm~kqFXcS0tGDxZosQsp~e~pgvEauvyDsgkffVq5RzmEg65M19HvA18xvjibVxfSNvE-qL9KGdeGYi-t2XK2dEcHE70s~pSpM8HI0QjbBUXxqW~Jt5J-vp5dIdHrfJO7A__"
                alt="video"
                className="size-full object-cover object-center rounded-lg"
              />
            </div>
          )}
        </div>

        <div className="fixed w-full left-0 bottom-4 flex justify-center gap-3 md:gap-3">
          {buttonsRender.map((button) => {
            return (
              <div
                key={button.key}
                className="min-w-12 sm:min-w-20 flex flex-col items-center gap-1 relative"
              >
                <ButtonBase
                  className={classNames(
                    button.key === 'decline'
                      ? 'bg-[#F8000F]'
                      : button.key === 'accept'
                        ? 'bg-[#49ab4b]'
                        : 'dark:bg-[rgba(255,255,255,0.5)] bg-[rgba(192,192,192,0.5)]',
                    'size-10 md:size-[50px] rounded-full'
                  )}
                >
                  <button.icon
                    className={classNames(
                      button.key === 'decline' || button.key === 'accept'
                        ? 'text-white'
                        : 'text-initial',
                      'size-5 md:size-6'
                    )}
                  />
                </ButtonBase>
                <p className="text-main text-sm md:text-base text-nowrap">{button.label}</p>

                {(button.key === 'video' || button.key === 'mute') && (
                  <ButtonBase className="size-5 dark:bg-[rgba(255,255,255,0.5)] bg-[rgba(192,192,192,0.5)] backdrop-blur-sm rounded-full absolute -top-1 right-2">
                    <IoIosArrowUp className="size-4" />
                  </ButtonBase>
                )}
              </div>
            )
          })}
        </div>

        {status === 'video' && (
          <div
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className="w-full md:w-1/2 h-full absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-[-1]"
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/f078/4bea/725ab6df4c393bc3e6faf72d160c9951?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QH-fRCanjXvnMeSu2IXZmYHWZnST8fAFnYGafWp~jXTQ079MfSS1CnpUG-LHRr7cq3vaV2Dvgy0aTsGVaoROKXNi~ZkEGPYMVA7a9Cjj8aHiwSa4K~lO~HorQf3mPUultydIFv2YoKWnCqlwE5EhDaz6eQdCEyjFaQxJDwuvpbLIzzxZFB~XwnvB~CoFDsThp6bmlGEr3FsJ2XdR4q2GY-s6zLhNF8VlGEZIsdntcarQsjQEFYo8O4CKm3bsRWFoODKWrYn5YHcVCR04LwdPxeZFm9FHFxulazoyY3jyAqsadc9Rd17cAZQ-0zH4LvqeJH-WiRlweyl9iI~Tv44UVw__"
              alt=""
              className="size-full object-cover object-center pointer-events-none"
            />
          </div>
        )}
      </div>
    )
  }
)

export default VideoCallPopup
