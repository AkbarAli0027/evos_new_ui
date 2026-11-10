import Image from 'next/image'
import cls from './Styles.module.scss'
import { ButtonBase, colors, Typography } from '@mui/material'
import KidsFAQ from '../KidsFAQ/KidsFAQ'
import { useRouter } from 'next/router';
import { kidsPLayground } from '../../mock/kids';
import { KidSliderLeftBtn, KidSliderRightBtn } from '../Icons';
import { useRef } from 'react';
import Slider from 'react-slick';
import { faqEn, faqRu, faqUz } from './mock'

export default function KidsPlaygrounds() {
    const { locale } = useRouter();
    const sliderRef = useRef(null)
    const images = [
        '/images/slider-1.webp',
        '/images/slider-2.webp',
        '/images/slider-3.webp',
        '/images/slider-4.webp',
        '/images/slider-5.webp',
        '/images/slider-6.webp',
    ]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        adaptiveHeight: true,
        arrows: false,
    }
    return (
        <div className={cls.root}>
            <div className={cls.banner}>
                <div className={cls.title}>
                    <h1>{kidsPLayground[locale].title}</h1>
                    <p>{kidsPLayground[locale].description}</p>
                    <p>{kidsPLayground[locale].subDescription}</p>
                </div>
                <div className={cls.banner__image}>
                    <Image src={'/images/playground.webp'} alt="Детские площадки" layout="fill" objectFit='cover' objectPosition={'center'} />
                </div>

                <p className={cls.imageText}>{kidsPLayground[locale].subDescription}</p>
            </div>

            <div className={`${cls.wrapper} ${cls.wrapper__bgWhite} ${cls.wrapper__mt}`}>
                <h3 className={cls.wrapper__title}>{kidsPLayground[locale].everyPlayground}</h3>
                <p className={cls.wrapper__description}>{kidsPLayground[locale].everyPlaygroundDescription}</p>
            </div>
            <div className={cls.yellowRow}>
                <div className={cls.yellowRow__slider} id='kids'>
                    <Slider {...settings} ref={sliderRef} >
                        {images.map((el, index) => <div key={index} className={cls.yellowRow__image}>
                            <Image src={el} alt="Детские площадки" layout="fill" objectFit='cover' objectPosition={'center'} />
                        </div>)}

                    </Slider>
                    <div className={cls.yellowRow__slider__arrowBtns}>
                        <ButtonBase
                            className={cls.prevBtn}
                            onClick={() => sliderRef.current.slickPrev()}
                        >
                            <KidSliderLeftBtn />
                        </ButtonBase>
                        <ButtonBase
                            className={cls.nextBtn}
                            onClick={() => sliderRef.current.slickNext()}
                        >
                            <KidSliderRightBtn />
                        </ButtonBase>
                    </div>
                </div>
                <div className={cls.yellowRow__content}>
                    <p className={cls.yellowRow__content__blackText}>{kidsPLayground[locale].weChooseYellow}</p>
                    <p className={cls.yellowRow__content__text}>{kidsPLayground[locale].weChooseYellowDescription}</p>
                </div>
            </div>
            <div className={`${cls.wrapper} ${cls.wrapper__bgWhite} `}>
                <div className={cls.wrapper__grids}>
                    <div className={cls.wrapper__grids__left}>
                        <img src="/images/playground-04.webp" alt='playground-04' />
                        <Typography sx={{
                            fontWeight: 500,
                            fontSize: {
                                sm: '12px',
                                md: '20px'
                            },
                            color: '#000',
                        }}>{kidsPLayground[locale].ourPlaygrounds}</Typography>
                    </div>
                    <Typography sx={{
                        fontWeight: 700,
                        fontSize: {
                            sm: '12px',
                            md: '20px'
                        },
                        color: '#000',
                        width: {
                            sm: '100%',
                            md: '65%'
                        }
                    }}>{kidsPLayground[locale].ourPlaygroundsDescription}</Typography>
                </div>
            </div>
            <div className={cls.bigImage}>
                <Image src={'/images/playground-05.webp'} alt="Детские площадки" layout='fill' objectFit='cover' />
            </div>
            <h3 className={cls.bigImage__text} dangerouslySetInnerHTML={{ __html: kidsPLayground[locale].comeToEvos }} />
            <KidsFAQ title={kidsPLayground[locale].faqTitle} description={kidsPLayground[locale].faqDescription} faq={locale === 'uz' ? faqUz : locale === 'ru' ? faqRu : faqEn} />

        </div>
    )
}