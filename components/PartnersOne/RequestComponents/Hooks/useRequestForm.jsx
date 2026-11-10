import { useState } from 'react'

const useRequestForm = () => {
  const [activeButton, setActiveButton] = useState('individual')
  const [activeButton2, setActiveButton2] = useState('individual2')
  const [showAboutPerson, setShowAboutPerson] = useState(true)
  const [showAboutPerson1, setShowAboutPerson1] = useState(false)
  const [showAboutPer, setShowAboutPer] = useState(true)
  const [showAboutPer1, setShowAboutPer1] = useState(false)
  const [requestSent, setRequestSent] = useState(false)
  const [selectedMapCoordinates, setSelectedMapCoordinates] = useState(null)
  const [showMapModal, setShowMapModal] = useState(false)

  const handleButtonClick = (buttonType) => {
    const firstObj = {
      individual: true,
      entity: true,
    }

    const secondObj = {
      individual2: true,
      entity2: true,
    }

    if (firstObj[buttonType]) {
      setActiveButton(buttonType)
    } else if (secondObj[buttonType]) {
      setActiveButton2(buttonType)
    }

    if (buttonType === 'individual2') {
      setShowAboutPer(true)
      setShowAboutPer1(false)
    } else if (buttonType === 'entity2') {
      setShowAboutPer(false)
      setShowAboutPer1(true)
    }

    if (buttonType === 'individual') {
      setShowAboutPerson(true)
      setShowAboutPerson1(false)
    } else if (buttonType === 'entity') {
      setShowAboutPerson(false)
      setShowAboutPerson1(true)
    }
  }

  const handleMapButtonClick = () => {
    setShowMapModal(true)
  }

  const handleCloseMapModal = () => {
    setShowMapModal(false)
  }

  const handleMapSave = (coordinates) => {
    setSelectedMapCoordinates(coordinates)
    handleCloseMapModal()
  }

  const handleSendRequest = () => {
    // console.log('Request sent!')
    // setRequestSent(true)
  }

  return {
    activeButton,
    activeButton2,
    showAboutPerson,
    showAboutPerson1,
    showAboutPer,
    showAboutPer1,
    requestSent,
    selectedMapCoordinates,
    showMapModal,
    handleButtonClick,
    handleMapButtonClick,
    handleCloseMapModal,
    handleMapSave,
    handleSendRequest,
    setRequestSent
  }
}

export default useRequestForm
