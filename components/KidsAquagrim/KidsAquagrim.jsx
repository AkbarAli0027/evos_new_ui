import Image from 'next/image'
import cls from './Styles.module.scss'
import KidsFAQ from '../KidsFAQ/KidsFAQ'
import { useRouter } from 'next/router'
import { kidsAquagrim } from '../../mock/kids'
import { faqEn, faqRu, faqUz } from './faq'

export default function KidsAquagrim() {
  const { locale } = useRouter()

  return (
    <div className={cls.root}>
      <div className={cls.banner}>
        <div className={cls.title}>
          <h1>{kidsAquagrim[locale].title}</h1>
          <div className={cls.title__content}>
            <p>{kidsAquagrim[locale].description}</p>
          </div>
        </div>
        <div className={cls.banner__image}>
          <Image
            src={'/images/kids-aquagrim.webp'}
            alt='Детские площадки'
            layout='fill'
            objectFit='contain'
            objectPosition={'center'}
          />
        </div>
      </div>

      <div className={cls.mobileBanner}>
        <h1>{kidsAquagrim[locale].title}</h1>
        <div className={cls.bannerCard}>
          <div className={cls.imageCard__wrapper}>
            <Image
              src={'/images/kids-aquagrim.webp'}
              alt='Детские площадки'
              layout='fill'
              objectFit='cover'
              objectPosition={'center'}
            />
          </div>
          <div className={cls.imageCard__content}>
            <p>{kidsAquagrim[locale].description}</p>
          </div>
        </div>
      </div>
      <div className={cls.paints}>
        <div className={cls.paints__greenTitle}>
          <p>{kidsAquagrim[locale].certifiedPaints}</p>
        </div>
        <div className={cls.paints__images}>
          <div className={cls.paints__img}>
            <Image
              src={'/images/aquagrim-01.webp'}
              alt='Аквагрим'
              layout='responsive'
              width={200}
              height={200}
              objectFit='contain'
            />
          </div>
          <div className={cls.paints__img}>
            <Image
              src={'/images/aquagrim-02.webp'}
              alt='Аквагрим'
              layout='responsive'
              width={200}
              height={200}
              objectFit='contain'
            />
          </div>
          <div className={cls.paints__img}>
            <Image
              src={'/images/aquagrim-03.webp'}
              alt='Аквагрим'
              layout='responsive'
              width={200}
              height={200}
              objectFit='contain'
            />
          </div>
          <div className={cls.paints__img}>
            <Image
              src={'/images/aquagrim-04.webp'}
              alt='Аквагрим'
              layout='responsive'
              width={200}
              height={200}
              objectFit='contain'
            />
          </div>
        </div>
        <h3>{kidsAquagrim[locale].certifiedPaintsDescription}</h3>
      </div>
      <div className={cls.gallery}>
        <div className={cls.gallery__left}>
          <div className={cls.gallery__image}>
            <Image
              src={'/images/aquagrim-show-01.webp'}
              alt='Детские площадки'
              layout='responsive'
              width={200}
              height={100}
              objectFit='cover'
              objectPosition={'center'}
            />
          </div>
        </div>
        <div className={cls.gallery__right}>
          <div className={cls.gallery__image}>
            <Image
              src={'/images/aquagrim-show-02.webp'}
              alt='Детские площадки'
              layout='responsive'
              width={100}
              height={100}
              objectFit='cover'
              objectPosition={'center'}
            />
          </div>
          <div className={cls.gallery__image}>
            <Image
              src={'/images/aquagrim-show-03.webp'}
              alt='Детские площадки'
              layout='responsive'
              width={100}
              height={100}
              objectFit='cover'
              objectPosition={'center'}
            />
          </div>
        </div>
      </div>
      <div className={cls.greenBox}>
        <p
          dangerouslySetInnerHTML={{
            __html: kidsAquagrim[locale].greenBoxTitle,
          }}
        />
      </div>
      <div className={cls.imageCard}>
        <div className={cls.imageCard__wrapper}>
          <Image
            src={'/images/aquagrim-kids.webp'}
            alt='Детские площадки'
            layout='fill'
            objectFit='cover'
            objectPosition={'center'}
          />
        </div>
        <div className={cls.imageCard__content}>
          <p
            dangerouslySetInnerHTML={{ __html: kidsAquagrim[locale].imageText }}
          />
        </div>
      </div>
      <KidsFAQ
        title={kidsAquagrim[locale].faqTitle}
        faq={locale === 'uz' ? faqUz : locale === 'ru' ? faqRu : faqEn}
      />
      <div className={cls.blueCard}>
        <p>{kidsAquagrim[locale].yellowCardTitle}</p>
        <p>{kidsAquagrim[locale].yellowCardDescription}</p>
      </div>
    </div>
  )
}
