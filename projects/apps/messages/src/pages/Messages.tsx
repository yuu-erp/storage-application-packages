import { memo, useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import NewContactDialog from 'src/components/features/contact/NewContactDialog'
import NewGroupDialog from 'src/components/features/group/NewGroupDialog'
import MessageHeader from 'src/components/features/messages/MessageHeader'
import MessageList from 'src/components/features/messages/MessageList'
import PinMessage from 'src/components/features/messages/PinMessage'
import LayoutSideBar from 'src/components/layouts/LayoutSideBar'
import InputChat from 'src/components/partials/InputChat'
import SideBar from 'src/components/partials/SideBar'
import VideoCallPopup from 'src/components/partials/VideoCallPopup'
import MessagesSidebar from 'src/components/shared/MessageSideBar'
import UserInfoCard from 'src/components/shared/UserInfoCard'

export interface Call {
  isCall: boolean
  typeCall: 'calling' | 'ringing' | 'waiting' | 'video'
}

export interface Dialog {
  isOpen: boolean
  dialog: 'contact' | 'group'
}

const Messages = memo(() => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [showChatScreen, setShowChatScreen] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
  const [call, setCall] = useState<Call>({
    isCall: false,
    typeCall: 'calling'
  })
  const [openDialog, setOpenDialog] = useState<Dialog>({
    isOpen: false,
    dialog: 'contact'
  })

  const duration = 0.25

  const slideVariants = {
    hidden: { x: '100%' },
    visible: { x: '0%' }
  }

  const chatVariants = {
    hidden: { x: '100%' },
    visible: { x: '0%' }
  }

  const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: { x: '0%' }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeDialog = useCallback(() => {
    console.log('closee')
    setOpenDialog({
      isOpen: false,
      dialog: 'contact'
    })
  }, [])

  const handleOpenDialog = useCallback((dialog: 'contact' | 'group') => {
    setOpenDialog({
      isOpen: true,
      dialog: dialog
    })
  }, [])

  return (
    <LayoutSideBar sideBarNode={<SideBar />}>
      <div className="w-full flex flex-1 items-stretch shrink-0 overflow-hidden relative">
        <motion.div
          variants={sidebarVariants}
          initial="visible"
          animate={isMobile && showChatScreen ? 'hidden' : 'visible'}
          transition={{ type: 'tween', duration, ease: 'easeInOut' }}
          className={classNames(
            'flex-shrink-0',
            'w-full sm:basis-1/3 border border-solid border-color-border box-border md:border-none'
          )}
        >
          <MessagesSidebar
            handleOpenDialog={handleOpenDialog}
            onClick={() => setShowChatScreen(true)}
          />
        </motion.div>

        <div
          className={`flex-1 bg-message-list md:bg-transparent md:backdrop-blur-[20px] relative overflow-hidden`}
        >
          {!showChatScreen && !isMobile && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="py-2 px-4 rounded-full bg-white dark:bg-selected text-sub-title text-center">
                <span>Select a chat to start messaging</span>
              </div>
            </div>
          )}

          <motion.div
            variants={chatVariants}
            initial={false}
            animate={showChatScreen ? 'visible' : 'hidden'}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className={classNames(
              'flex flex-col items-stretch shrink-0 overflow-hidden relative md:bg-content md:backdrop-blur-lg',
              'max-sm:fixed max-sm:inset-0 max-sm:bg-white',
              'sm:flex-1 h-full'
            )}
          >
            <MessageHeader
              onClick={() => setExpanded((prev) => !prev)}
              onBack={() => setShowChatScreen(false)}
              onCall={(data) => setCall(data)}
            />
            <div className="flex flex-1 flex-col items-stretch relative overflow-y-auto bg-message-list md:bg-transparent md:pb-[100px]">
              <PinMessage />
              <MessageList />
              <InputChat className="flex md:hidden" />
            </div>

            {expanded && (
              <div
                onClick={() => setExpanded(false)}
                className={classNames(
                  'absolute inset-0 size-full bg-[rgba(255,255,255,0.05)]',
                  'backdrop-blur-md md:backdrop-blur-[100px]',
                  'transition-opacity duration-150 ease-in-out z-50'
                )}
              />
            )}

            <motion.div
              variants={slideVariants}
              initial="hidden"
              animate={expanded ? 'visible' : 'hidden'}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="sm:w-[380px] fixed top-0 bottom-0 h-full z-50 flex flex-col items-center justify-center max-sm:right-0 sm:right-0 bg-content shadow-2xl"
              style={{
                backdropFilter: 'blur(10px)',
                isolation: 'isolate'
              }}
            >
              <UserInfoCard onBack={() => setExpanded(false)} />
            </motion.div>

            <InputChat
              className={`hidden md:flex ${
                showChatScreen ? 'flex' : '!hidden'
              } absolute left-1/2 -translate-x-1/2 bottom-4 z-40 px-4`}
            />
          </motion.div>
        </div>
      </div>
      {call.isCall && (
        <VideoCallPopup
          status={call.typeCall}
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          onClose={() => setCall({ isCall: false, typeCall: 'calling' })}
        />
      )}
      {openDialog.isOpen && (
        <div
          className="fixed inset-0 bg-blur md:bg-content backdrop-blur-sm md:backdrop-blur-none flex items-center justify-center px-4 z-[20]"
          onClick={closeDialog}
        >
          <div className="relative w-full h-full flex justify-center items-center">
            {openDialog.dialog === 'contact' && (
              <NewContactDialog
                closeDialog={closeDialog}
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              />
            )}
            {openDialog.dialog === 'group' && (
              <NewGroupDialog
                closeDialog={closeDialog}
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              />
            )}
          </div>
        </div>
      )}
    </LayoutSideBar>
  )
})

export default Messages
