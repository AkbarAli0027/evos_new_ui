// // ButtonsSection.js

// import React from 'react'
// import CustomButton from './ButtonComponent'

// const ButtonsSection = ({
//   activeButton,
//   activeButton2,
//   handleButtonClick,
//   handleMapButtonClick,
//   handleSendRequest,
//   cls,
//   handleMapSave,
//   handleMapButtonClick,
// }) => {
//   return (
//     <>
//       <CustomButton
//         variant='outlined'
//         type='button'
//         className={
//           activeButton === 'individual' ? cls.induvidualEntityActive : ''
//         }
//         onClick={() => handleButtonClick('individual')}
//         label='Физлицо'
//         isActive={activeButton === 'individual'}
//       />

//       <CustomButton
//         variant='outlined'
//         type='button'
//         className={activeButton === 'entity' ? cls.induvidualEntityActive : ''}
//         onClick={() => handleButtonClick('entity')}
//         label='Юрлицо'
//         isActive={activeButton === 'entity'}
//       />

//       <button
//         type='button'
//         className={
//           activeButton2 === 'individual2' ? cls.induvidualEntityActive : ''
//         }
//         onClick={() => handleButtonClick('individual2')}
//       >
//         Коммерческое помещение
//       </button>

//       <CustomButton
//         variant='outlined'
//         type='button'
//         className={
//           activeButton2 === 'entity2' ? cls.induvidualEntityActive : ''
//         }
//         onClick={() => handleButtonClick('entity2')}
//         label='Земельный участок'
//         isActive={activeButton2 === 'entity2'}
//       />

//       <CustomButton
//         variant='outlined'
//         className={cls.chooseMap}
//         onClick={handleMapButtonClick}
//         label='Выбрать на карте'
//       />

//       <CustomButton
//         variant='outlined'
//         className={cls.sendRequest}
//         onClick={handleSendRequest}
//         type='submit'
//         label='Отправить заявку'
//       />
//     </>
//   )
// }

// export default ButtonsSection
