import { PlacemarkIcon } from '../Icons'
import Card from '../Card/Card'

export default function MapDropDown({
  options = [],
  setAddressList,
  setPlacemarkGeometry,
  setAddress,
  setData,
  setConfirmAddress,
}) {
  return (
    <Card
      style={{
        backgroundColor: '#fff', position: 'absolute', zIndex: 999,
        width: '100%', filter: 'drop-shadow(0px 16px 40px rgba(0, 0, 0, 0.1))',
      }}
      bodyStyle={{ maxHeight: '250px', overflowY: 'auto' }}
    >
      {options?.map((elm, index) =>
        elm?.description?.includes('Узбекистан') ? (
          <div
            key={index}
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100 border-b last:border-0"
            onClick={() => {
              const [long, lat] = elm.location.split(' ').map(Number)
              setAddress(elm.label)
              setData({ lat, long })
              setPlacemarkGeometry([lat, long])
              setConfirmAddress(true)
              setAddressList([])
            }}
          >
            <div className="mr-3"><PlacemarkIcon /></div>
            <div>
              <div className="font-bold text-sm">{elm.label}</div>
              <div className="text-xs text-gray-500">{elm.description}</div>
            </div>
          </div>
        ) : null
      )}
    </Card>
  )
}




// import { PlacemarkIcon } from '../Icons'
// import Card from '../Card/Card'

// export default function MapDropDown({
//   options = [],
//   setAddressList,
//   setPlacemarkGeometry,
//   setAddress,
//   setData,
//   setConfirmAddress,
// }) {
//   return (
//     <Card
//       style={{
//         backgroundColor: '#fff',
//         position: 'absolute',
//         zIndex: 999,
//         width: '100%',
//         filter: 'drop-shadow(0px 16px 40px rgba(0, 0, 0, 0.1))',
//         padding: '10px',
//       }}
//       bodyStyle={{ maxHeight: '250px', overflowY: 'auto' }}
//     >
//       {options?.map((elm, index) =>
//         elm?.description?.includes('Узбекистан') ? (
//           <div
//             key={index}
//             className="flex items-center p-2 cursor-pointer hover:bg-gray-100 border-b last:border-0"
//             onClick={() => {
//               const [long, lat] = elm.location.split(' ').map(Number)
//               setAddress(elm.label)
//               setData({ lat, long })
//               setPlacemarkGeometry([lat, long])
//               setConfirmAddress(true)
//               setAddressList([])
//             }}
//           >
//             <div className="mr-3"><PlacemarkIcon /></div>
//             <div>
//               <div className="font-bold text-sm">{elm.label}</div>
//               <div className="text-xs text-gray-500">{elm.description}</div>
//             </div>
//           </div>
//         ) : null
//       )}
//     </Card>
//   )
// }