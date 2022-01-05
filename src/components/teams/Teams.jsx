import './teams.scss';
import { useTranslation } from 'react-i18next';

export default function Teams() {
  const { t } = useTranslation();
  return (
    <div className="teams" id="teams">
      <h1 className="title">{t('Teams.6')}</h1>
          <img src="assets/wordcloud.png" alt="" />
    </div>
  );
}
