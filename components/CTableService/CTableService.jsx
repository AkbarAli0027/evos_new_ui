import Image from 'next/image'
import cls from './styles.module.scss'
import { useRouter } from 'next/router';
import { tableServiceContent } from '../../mock/table-service';
import KidsFAQ from '../KidsFAQ/KidsFAQ';
import { faqUz, faqRu, faqEn } from './faq'

export default function CTableService() {
    const { locale } = useRouter();
    return <div className={cls.root}>
        <h1 className={cls.title}>Table Service</h1>
        <div className={cls.banner}>
            {/* <Image src={'/images/ts-banner.webp'} alt='ts-banner' layout='fill' objectFit='cover' />
             */}
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/y2sTRfI_WaY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{ border: '0' }}
            />

            {/* https://www.youtube.com/watch?v=y2sTRfI_WaY */}
        </div>
        <div className={cls.wrapper}>
            <div className={cls.wrapper__content}>
                <h3 className={cls.wrapper__content__title}>{tableServiceContent[locale].tsWrapperTitle1}</h3>
                <p className={cls.wrapper__content__description}>{tableServiceContent[locale].tsWrapperDesc1}</p>
            </div>
            <div className={cls.wrapper__image}>
                <Image src={'/images/ts-01.webp'} alt='table service 01' objectFit='cover' layout='fill' />
            </div>
        </div>
        <div className={`${cls.wrapper} ${cls.wrapper__reverse}`}>
            <div className={cls.wrapper__image}>
                <Image src={'/images/ts-02.webp'} alt='table service 01' objectFit='cover' layout='fill' />
            </div>
            <div className={cls.wrapper__content}>
                <h3 className={cls.wrapper__content__title}>{tableServiceContent[locale].tsWrapperTitle2}</h3>
                <p className={cls.wrapper__content__description}>{tableServiceContent[locale].tsWrapperDesc2}</p>
            </div>
        </div>
        <div className={`${cls.wrapper} ${cls.mb}`}>
            <div className={cls.wrapper__content}>
                <h3 className={cls.wrapper__content__title}>{tableServiceContent[locale].tsWrapperTitle3}</h3>
                <p className={cls.wrapper__content__description}>{tableServiceContent[locale].tsWrapperDesc3}</p>
            </div>
            <div className={cls.wrapper__image}>
                <Image src={'/images/ts-03.webp'} alt='table service 01' objectFit='cover' layout='fill' />
            </div>
        </div>
        <KidsFAQ title={tableServiceContent[locale].faq} faq={locale === 'uz' ? faqUz : locale === 'ru' ? faqRu : faqEn} />
    </div>
}