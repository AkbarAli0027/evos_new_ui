import React from 'react';
import cls from '../PartnersOne.module.scss'
import { RentIcon, ElectricIcon, HighIcon, VisibilecIcon, LocatecIcon } from '../../Icons';
import { menu } from '../../../mock/menu';


export const marketingDesc = (
  <p>
    Примеры услуг и товаров, которые для нас всегда актуальны:
    <br />
    - современные рейтинговые информационные каналы (ТВ, радио,
    интернет-порталы)
    <br />- сувенирная и полиграфическая продукция,
    <br />- продакшн (видеоролики, фильмы и т.д.)
    <br />- блоггеры с актуальным и социально-приемлемым контентом
    <br />- владельцы официально оформленной наружной рекламы
    <br />- социально важные проекты
    <br />- маркетинговые и PR агентства полного цикла
  </p>
);

export const supplyDesc = (
  <p>
    Примеры услуг и товаров, которые для нас всегда актуальны:
    <br />- продукты питания, полуфабрикаты
    <br />- оборудование для HoReCa
    <br />- тара, упаковка
    <br />- химия для HoReCa
  </p>
);

export const realEstateDesc = (locale) => {
  return  <p className={cls.mainText}>
  <div className={cls.mainTitle}>
    {menu[locale]?.mainRequirementsForPremises}
  </div>
  {[
    menu[locale]?.consideredArea,
    menu[locale]?.structureLocation,
    menu[locale]?.buildingType,
    menu[locale]?.docAvailability,
    menu[locale]?.utilsAvailability,
  ].map((item, index) => (
    // <div key={index}>{item}</div>
    <div
      key={index}
      style={{
        marginBottom: "12px",
        color: "#000"
      }}
      dangerouslySetInnerHTML={{
        __html: item,
      }}
    />
  ))}
  <div className={cls.mainTitle}>
    {menu[locale]?.mainRequirementsForLand}
  </div>
  {[
    menu[locale]?.consideredAreaBig,
    menu[locale]?.accessRoad,
    menu[locale]?.docAvailabilitySingle,
  ].map((item, index) => (
    <div style={{
      marginBottom: "12px",
      color: "#000"
    }} key={index}>{item}</div>
  ))}
</p>
}

export const locationsDesc = (locale) => {
  return <p className={cls.aplicationText}>
  {menu[locale].realEstateDescription}
</p>
}

export const realEstateDetails = (locale) => {
  return [
    { icon: <RentIcon />, text: [menu[locale].area, menu[locale].areaQuantity] },
    {
      icon: <ElectricIcon />,
      text: [menu[locale].energy, menu[locale].energyQuantity],
    },
    { icon: <HighIcon />, text: [menu[locale].ceilingHight, menu[locale].ceilingHightQuantity] },
    {
      icon: <VisibilecIcon />,
      text: [menu[locale].visibility, menu[locale].visibilityQuantity],
    },
    {
      icon: <LocatecIcon />,
      text: [menu[locale].location, menu[locale].locationQuantity],
    },
  ]
}