import KidsCard from './KidsCard';
import cls from './KidsPage.module.scss'
import { kidsMain } from '../../mock/kids';
import { useRouter } from 'next/router';

export default function KidsPage() {
    const { locale } = useRouter()

    return (
        <div className={cls.root}>
            <div className={cls.banner}>
                <div className={cls.title}>
                    <h1>{kidsMain[locale].title}</h1>
                    <p>{kidsMain[locale].description}</p>
                    <p>{kidsMain[locale].subDescription}</p>
                </div>
                <div className={cls.logoWrapper}>
                    <div className={cls.logo}>
                        <div className={cls.evosLogo}>
                            <p>EVOS</p>
                        </div>
                        <div className={cls.kidsLogo}>
                            <p>kids</p>
                        </div>
                    </div>
                </div>
                <div className={cls.mobileBannerContent}>
                    <p>{kidsMain[locale].description}</p>
                    <p>{kidsMain[locale].subDescription}</p>
                </div>
            </div>
            <div className={cls.cards}>
                <KidsCard
                    item={{
                        image: '/images/kids-card-01.webp',
                        title: kidsMain[locale].cardTitle1,
                        description: kidsMain[locale].cardDescription1,
                        links: "/kids/events/"
                    }}
                />
                <KidsCard
                    item={{
                        image: '/images/kids-card-1.webp',
                        title: kidsMain[locale].cardTitle2,
                        description: kidsMain[locale].cardDescription2,
                        links: "/kids/playgrounds/"
                    }}
                />
                <KidsCard
                    item={{
                        image: '/images/kids-card-2.webp',
                        title: kidsMain[locale].cardTitle3,
                        description: kidsMain[locale].cardDescription3,
                        links: "/kids/aquagrim/"
                    }}
                />
            </div>

        </div>
    );
}