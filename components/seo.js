/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'

export default function SEO({ title, description, image, keywords }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>{title ? `${title} | EVOS` : 'EVOS'}</title>
        <meta
          name='description'
          content={
            description ||
            'EVOS является прекрасным местом для встреч с друзьями, вкусной еды и отличного настроения. Меню состоит в основном из клаб сендвичей, хот-догов, бургеров, лавашей и донаров. Наши приоритеты – свежесть и качество ингредиентов, разнообразие начинок, доступные цены и внимание к просьбам гостей.'
          }
        />
        <meta
          name='keywords'
          content={
            keywords ||
            'лаваш доставка, гамбургер доставка, хот дог доставка, фастфуд доставка, заказать доставку, заказать доставку еды на дом, заказать доставку фастфуда на дом, evos лаваш, evos гамбургер, evos хот дог'
          }
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='EVOS' key='ogtitle' />
        <meta
          property='og:description'
          content={
            description ||
            'EVOS является прекрасным местом для встреч с друзьями, вкусной еды и отличного настроения. Меню состоит в основном из клаб сендвичей, хот-догов, бургеров, лавашей и донаров. Наши приоритеты – свежесть и качество ингредиентов, разнообразие начинок, доступные цены и внимание к просьбам гостей.'
          }
          key='ogdesc'
        />
        <meta property='og:site_name' content='EVOS' key='ogsitename' />
        <meta name='twitter:card' content='summary' />
        <meta
          name='twitter:title'
          content={title ? `${title} | EVOS` : 'EVOS'}
        />
        <meta
          name='twitter:description'
          content={
            description ||
            'EVOS является прекрасным местом для встреч с друзьями, вкусной еды и отличного настроения. Меню состоит в основном из клаб сендвичей, хот-догов, бургеров, лавашей и донаров. Наши приоритеты – свежесть и качество ингредиентов, разнообразие начинок, доступные цены и внимание к просьбам гостей.'
          }
        />
        <meta name='twitter:site' content='EVOS' />
        <meta name='twitter:creator' content='Udevs' />
        <meta
          name='facebook-domain-verification'
          content='03y59u7srxkum5mpjutogvu8ygm5iw'
        />
        <meta
          name='twitter:image'
          content='https://dostavkainfo.uz/wp-content/uploads/2020/03/evos-1024x1024.png'
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MW6QZ945');`,
          }}
        />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-M3GJZ7BLCF'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M3GJZ7BLCF');
            `,
          }}
        />
        <script
          src='https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=99ba8122-e8ca-45dc-bc07-38487950fd85'
          type='text/javascript'
        ></script>
      </Head>

      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
      </body>
    </>
  )
}
