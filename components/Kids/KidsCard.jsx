import Image from 'next/image';
import cls from './KidsPage.module.scss'
import { useRouter } from 'next/router';
import { kidsMain } from '../../mock/kids';

export default function KidsCard({ item }) {
    const { push, locale } = useRouter();
    return (
        <div className={cls.kidsCard}>
            <div className={cls.kidsCard__image}>
                <Image src={item.image} alt={item.title} layout="fill" objectFit='cover' />
            </div>
            <div className={cls.kidsCard__content}>
                <h3 className={cls.kidsCard__title}>{item.title}</h3>
                <p className={cls.kidsCard__description}>{item.description}</p>
                <button onClick={() => { push(item.links) }} className={cls.kidsCard__btn}>{kidsMain[locale].learnMore}</button>
            </div>
        </div>
    );
}