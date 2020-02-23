import React from 'react';
import { useTranslation } from "react-i18next";

export default function Introduce() {
  const { t } = useTranslation();

  return (
    <section className="introduce"><img className="introduce__bg1" src="./images/background1.jpg" alt="" /><img className="introduce__bg2" src="./images/background1.jpg" alt="" />
      <header className="introduce__intro container">
        <div className="main-title-tl">
          <h1 className="main-title-tl__tt">{t("Introduce").toUpperCase()}</h1><span className="introduce__intro__title__eff"><img src="./images/title-dark.png" alt="" /></span>
        </div>
        <p className="introduce__intro__content">
          Mriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui
          faciteorum claritatem. Investigtiones demonstraverunt lectores legere me lius quod ii legunt saepius.Claritas est etiam processus dynamicus,
          qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putam
        </p>
        <button className="introduce__intro__show-more">{t("See more").toUpperCase()}</button>
      </header>
    </section>
  )
}
