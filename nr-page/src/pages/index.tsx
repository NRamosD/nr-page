import { useTranslation } from 'next-i18next';

function HomePage() {
  // const { t } = useTranslation();
  // const { t, i18n } = useTranslation();
  const [t, i18n] = useTranslation();
  console.log({xd:t("hola")})
  return (
    <div>
      <h1>{t("hola")}</h1>
      <nav>
        <ul>
          <li>
            <a href="/about">{t('about')}</a>
          </li>
          <li>
            <a href="/contact">{t('contact')}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;