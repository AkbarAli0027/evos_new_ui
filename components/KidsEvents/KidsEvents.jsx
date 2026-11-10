import Image from 'next/image'
import cls from './KidsEvents.module.scss'
import KidsFAQ from '../KidsFAQ/KidsFAQ'
import mockData from './mock'
import { useRouter } from 'next/router'
import { kidsEvents } from '../../mock/kids'
import {
  faqBlueEn,
  faqBlueRu,
  faqBlueUz,
  faqRedEn,
  faqRedRu,
  faqRedUz,
  faqGreenEn,
  faqGreenRu,
  faqGreenUz,
} from './mock'

export default function KidsEvents() {
  const { locale } = useRouter()
  const { blueEventsList, redEventsList, greenEventsList } = mockData(locale)

  return (
    <div className={cls.root}>
      <div className={cls.banner}>
        <div className={cls.title}>
          <h1>{kidsEvents[locale].title}</h1>
          <p>{kidsEvents[locale].description}</p>
          <p>{kidsEvents[locale].subDescription}</p>
        </div>
        <div className={cls.logoWrapper}>
          <div className={cls.logo}>
            <div className={cls.evosLogo}>
              <p>EVOS</p>
            </div>
            <div className={cls.eventsLogo}>
              <img src='/images/kids-card-01.svg' alt='Bayramlar' />
            </div>
          </div>
        </div>
        <div className={cls.mobileBannerContent}>
          <p>{kidsEvents[locale].description}</p>
          <p>{kidsEvents[locale].subDescription}</p>
        </div>
      </div>
      <div className={cls.blueCard}>
        <p>{kidsEvents[locale].blueCardWhiteDescription}</p>
        <p>
          {}
          {kidsEvents[locale].blueCardYellowDescription}
        </p>
      </div>
      <h2 className={`${cls.root__title} ${cls.root__mb}`}>
        {kidsEvents[locale].wePreparedForYou}
      </h2>
      <div className={cls.root__wrapper}>
        <div className={cls.root__wrapper__box}>
          <div className={cls.root__wrapper__leftBox}>
            <h3
              className={`${cls.root__wrapper__title} ${cls.root__wrapper__title__blue}`}
            >
              BAYRAM PARTY 1
            </h3>
            {blueEventsList.map((item) => (
              <div className={cls.root__wrapper__card} key={item.number}>
                <div
                  className={`${cls.root__wrapper__card__left} ${cls.root__wrapper__card__left__blue}`}
                >
                  {item.number}
                </div>
                <div className={cls.root__wrapper__card__right}>
                  <p className={cls.root__wrapper__card__right__title}>
                    {item.title}
                  </p>
                  <p
                    className={cls.root__wrapper__card__right__description}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={cls.root__wrapper__imageYellow}>
            <Image src={'/images/boy-01.webp'} alt='boy' layout='fill' />
          </div>
        </div>
        <div className={cls.root__wrapper__card}>
          <div
            className={`${cls.root__wrapper__card__left} ${cls.root__wrapper__card__left__blue}`}
          >
            5
          </div>
          <div className={cls.root__wrapper__card__right}>
            <p className={cls.root__wrapper__card__right__title}>
              {kidsEvents[locale].paints}
            </p>
            <p className={cls.root__wrapper__card__right__description}>
              {' '}
              {kidsEvents[locale].paintsDescription}
            </p>
          </div>
        </div>
      </div>
      <KidsFAQ
        title={kidsEvents[locale].whereCelebrateBayram1}
        faq={
          locale === 'uz' ? faqBlueUz : locale === 'ru' ? faqBlueRu : faqBlueEn
        }
      />
      <div className={cls.root__events}>
        <div className={cls.root__events__card}>
          <p className={cls.root__events__card__title}>
            {kidsEvents[locale].time}
          </p>
          <p className={cls.root__events__card__description}>
            {kidsEvents[locale].timeDescription}
          </p>
        </div>
        <div className={cls.root__events__card}>
          <p className={cls.root__events__card__title}>
            {kidsEvents[locale].maxGuests}
          </p>
          <p className={cls.root__events__card__description}>
            {kidsEvents[locale].maxGuestsDescription}
          </p>
        </div>
        <div
          className={`${cls.root__events__card} ${cls.root__events__card__yellow}`}
        >
          <p className={cls.root__events__card__title}>
            {kidsEvents[locale].price}
          </p>
          <p
            className={`${cls.root__events__card__description} ${cls.root__events__card__description__yellow}`}
          >
            {kidsEvents[locale].priceDescription}
          </p>
        </div>
      </div>
      <div className={`${cls.root__wrapper} ${cls.root__mt}`}>
        <div className={cls.root__wrapper__box}>
          <div>
            <h3
              className={`${cls.root__wrapper__title} ${cls.root__wrapper__title__red}`}
            >
              BAYRAM PARTY 2
            </h3>
            {redEventsList.slice(0, 3).map((item) => (
              <div className={cls.root__wrapper__card} key={item.number}>
                <div
                  className={`${cls.root__wrapper__card__left} ${cls.root__wrapper__card__left__red}`}
                >
                  {item.number}
                </div>
                <div className={cls.root__wrapper__card__right}>
                  <p className={cls.root__wrapper__card__right__title}>
                    {item.title}
                  </p>
                  <p
                    className={cls.root__wrapper__card__right__description}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={cls.root__wrapper__imageRed}>
            <Image src={'/images/boy-02.webp'} alt='boy' layout='fill' />
          </div>
        </div>
        {redEventsList.slice(3, 6).map((item) => (
          <div className={cls.root__wrapper__card} key={item.number}>
            <div
              className={`${cls.root__wrapper__card__left} ${cls.root__wrapper__card__left__red}`}
            >
              {item.number}
            </div>
            <div className={cls.root__wrapper__card__right}>
              <p className={cls.root__wrapper__card__right__title}>
                {item.title}
              </p>
              <p
                className={cls.root__wrapper__card__right__description}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
      <KidsFAQ
        title={kidsEvents[locale].whereCelebrateBayram2}
        faq={locale === 'uz' ? faqRedUz : locale === 'ru' ? faqRedRu : faqRedEn}
      />
      <div className={cls.root__events}>
        <div className={cls.root__events__card}>
          <p className={cls.root__events__card__title}>
            {kidsEvents[locale].reservationAvailable}
          </p>
          <p className={cls.root__events__card__description}>
            {kidsEvents[locale].reservationAvailableDescription}
          </p>
        </div>
        <div className={cls.root__events__card}>
          <p className={cls.root__events__card__title}>
            {kidsEvents[locale].maxGuests}
          </p>
          <p className={cls.root__events__card__description}>
            {kidsEvents[locale].maxGuestsDescription}
          </p>
        </div>
        <div
          className={`${cls.root__events__card} ${cls.root__events__card__yellow}`}
        >
          <p className={cls.root__events__card__title}>
            {kidsEvents[locale].price}
          </p>
          <p
            className={`${cls.root__events__card__description} ${cls.root__events__card__description__yellowRed}`}
          >
            {kidsEvents[locale].priceDescription}
          </p>
        </div>
      </div>
      <div className={`${cls.root__wrapper} ${cls.root__mt}`}>
        <div className={cls.root__wrapper__box}>
          <div className={cls.root__wrapper__leftBox}>
            <h3
              className={`${cls.root__wrapper__title} ${cls.root__wrapper__title__green}`}
            >
              BAYRAM PARTY TAKEAWAY
            </h3>
            {greenEventsList.map((item) => (
              <div className={cls.root__wrapper__card} key={item.number}>
                <div
                  className={`${cls.root__wrapper__card__left} ${cls.root__wrapper__card__left__green}`}
                >
                  {item.number}
                </div>
                <div className={cls.root__wrapper__card__right}>
                  <p className={cls.root__wrapper__card__right__title}>
                    {item.title}
                  </p>
                  <p
                    className={cls.root__wrapper__card__right__description}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={cls.root__wrapper__imageBlue}>
            <Image src={'/images/boy-03.webp'} alt='boy' layout='fill' />
          </div>
        </div>
      </div>
      <KidsFAQ
        title={kidsEvents[locale].takeAwayBayram}
        faq={
          locale === 'uz'
            ? faqGreenUz
            : locale === 'ru'
            ? faqGreenRu
            : faqGreenEn
        }
      />
      <div className={cls.root__events}>
        <div className={cls.root__events__card}>
          <p className={cls.root__events__card__title}>
            {kidsEvents[locale].time}
          </p>
          <p className={cls.root__events__card__description}>
            {kidsEvents[locale].timeDescription}
          </p>
        </div>
        <div className={cls.root__events__card}>
          <p className={cls.root__events__card__title}>
            {kidsEvents[locale].maxGuestInOneOrder}
          </p>
          <p className={cls.root__events__card__description}>
            {kidsEvents[locale].maxGuestsDescription}
          </p>
        </div>
        <div
          className={`${cls.root__events__card} ${cls.root__events__card__yellow}`}
        >
          <p className={cls.root__events__card__title}>
            {kidsEvents[locale].price}
          </p>
          <p
            className={`${cls.root__events__card__description} ${cls.root__events__card__description__yellowGreen}`}
          >
            {kidsEvents[locale].priceDescription}
          </p>
        </div>
      </div>
    </div>
  )
}
