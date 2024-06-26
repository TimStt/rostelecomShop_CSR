"use client";

import React from "react";
import style from "./policy-of-personal-data.module.scss";
import cls from "classnames";
import { BreadCrumb } from "@/shared/ui/breadcrumbs";
import { motion } from "framer-motion";
import { motionSettingsVisibleOpacity } from "@/shared/ui/ModalMotion";
import Head from "next/head";

const PolicyOfPersonalData = () => {
  return (
    <>
      <Head>
        <title>Политика обработки персональных данных | Rostelecom Shop</title>
        <meta
          name="description"
          content="Политика обработки персональных данных Rostelecom Shop"
        />
      </Head>
      <article className={cls(style.root, "container")}>
        <BreadCrumb className={style.root__breadCrumb} />
        <h1 className={style.root__title}>
          Политика обработки персональных данных
        </h1>
        <ol className={style.root__list}>
          <motion.li
            className={style.root__list__item}
            {...motionSettingsVisibleOpacity}
          >
            <div className={style.root__list__wrapper}>
              <h2 className={style.root__list__subtitle}>
                Термины и определения
              </h2>
            </div>
            <ol className={style.root__sublist}>
              <li className={style.root__sublist__item}>
                <p>
                  <strong>Персональные данные</strong> - любая информация,
                  относящаяся к определенному или определяемому на основании
                  такой информации физическому лицу (субъекту персональных
                  данных), в том числе его фамилия, имя, отчество, год, месяц,
                  дата и место рождения, адрес, адрес электронной почты,
                  телефонный номер (домашний, сотовый), другая информация.
                </p>
              </li>
              <li className={style.root__sublist__item}>
                <p>
                  <strong>Обработка персональных данных</strong> - действия
                  (операции) с персональными данными, включая их сбор, запись,
                  систематизацию, накопление, хранение, уточнение (обновление,
                  изменение), использование, извлечение, распространение их
                  путем передачи, в том числе трансграничной, обезличивание,
                  блокирование, уничтожение, удаление, в том числе в целях.
                </p>
              </li>
              <li className={style.root__sublist__item}>
                <p>
                  <strong>Конфиденциальность персональных данных</strong> -
                  обязательное для соблюдения назначенного ответственного лица,
                  получившего доступ к персональным данным, требование не
                  допускать их распространения без согласия субъекта или иного
                  законного основания.
                </p>
              </li>
              <li className={style.root__sublist__item}>
                <p>
                  <strong>Распространение персональных данных</strong> -
                  действия, направленные на передачу персональных данных
                  определенному кругу лиц (передача персональных данных) или на
                  ознакомление с персональными данными неограниченного круга
                  лиц, в том числе обнародование персональных данных в средствах
                  массовой информации, размещение в
                  информационно-телекоммуникационных сетях или предоставление
                  доступа к персональным данным каким-либо иным способом.
                </p>
              </li>

              <li className={style.root__sublist__item}>
                <p>
                  <strong>Использование персональных данных </strong> - действия
                  (операции) с персональными данными, совершаемые в целях
                  принятия решений или совершения иных действий, порождающих
                  юридические последствия в отношении субъектов персональных
                  данных либо иным образом затрагивающих их права и свободы или
                  права и свободы других лиц.
                </p>
              </li>
              <li className={style.root__sublist__item}>
                <p>
                  <strong>Блокирование персональных данных</strong> - временное
                  прекращение сбора, систематизации, накопления, использования,
                  распространения персональных данных, в том числе их передачи.
                </p>
              </li>
              <li className={style.root__sublist__item}>
                <p>
                  <strong>Уничтожение персональных данных</strong> - действия, в
                  результате которых невозможно восстановить содержание
                  персональных данных в информационной системе персональных
                  данных или в результате которых уничтожаются материальные
                  носители персональных данных.
                </p>
              </li>
              <li className={style.root__sublist__item}>
                <p>
                  <strong>Обезличивание персональных данных</strong> - действия,
                  в результате которых невозможно без использования
                  дополнительной информации определить принадлежность
                  персональных данных конкретному субъекту.
                </p>
              </li>

              <li className={style.root__sublist__item}>
                <p>
                  <strong>Общедоступные персональные данные</strong> -
                  персональные данные, доступ неограниченного круга лиц к
                  которым предоставлен с согласия субъекта или на которые в
                  соответствии с федеральными законами не распространяется
                  требование соблюдения конфиденциальности.
                </p>
              </li>

              <li className={style.root__sublist__item}>
                <p>
                  <strong>Информация </strong> - сведения (сообщения, данные)
                  независимо от формы их представления
                </p>
              </li>

              <li className={style.root__sublist__item}>
                <p>
                  <strong> Клиент (субъект персональных данных)</strong> -
                  физическое лицо, потребитель товаров/услуг ООО «Ростелеком»
                </p>
              </li>

              <li className={style.root__sublist__item}>
                <p>
                  <strong>Оператор </strong> - государственный орган,
                  муниципальный орган, юридическое или физическое лицо,
                  самостоятельно или совместно с другими лицами организующие и
                  (или) осуществляющие обработку персональных данных, а также
                  определяющие цели обработки персональных данных, состав
                  персональных данных, подлежащих обработке, действия
                  (операции), совершаемые с персональными данными. В рамках
                  настоящего документа Операторами являются ООО «Ростелеком»
                  (Продавец) - 143085, Московская область, Одинцовский р-н, р.п.
                  Заречье, ул. Торговая, д.4, стр.1, а также другие организации,
                  с которыми Операторы заключили / заключат соответствующие
                  Договоры для реализации целей обработки персональных данных
                  Клиентов, определенных условиями настоящего Положения, в
                  частности для направления Клиентам по различным средствам
                  связи рекламной информации Операторов и т.д., а также договоры
                  в целях проведения социологических и других исследований, в
                  том числе исследований индекса удовлетворенности потребителей
                  качеством предоставляемых Операторами товаров и услуг,
                  проводимых Операторами самостоятельно, или с привлечением
                  третьих лиц, для осуществления рассылок.
                </p>
              </li>
            </ol>
          </motion.li>

          <motion.li
            className={style.root__list__item}
            {...motionSettingsVisibleOpacity}
          >
            <div className={style.root__list__wrapper}>
              <h2 className={style.root__list__subtitle}>Общие положения</h2>
            </div>
            <ol className={style.root__sublist}>
              <li className={style.root__sublist__item}>
                <p>
                  Настоящая Политика обработки и защиты персональных данных
                  Клиентов ООО «Ростелеком» (далее — Положение) разработано в
                  соответствии с Конституцией Российской Федерации, Гражданским
                  кодексом Российской Федерации, Федеральным законом «Об
                  информации, информационных технологиях и о защите информации»,
                  Федеральным законом «О персональных данных», иными
                  нормативными правовыми актами, действующими на территории
                  Российской Федерации.
                </p>
              </li>
              <li className={style.root__sublist__item}>
                <p>
                  Цель разработки Положения — определение порядка обработки и
                  защиты персональных данных всех Клиентов Компании, данные
                  которых подлежат обработке, на основании полномочий оператора;
                  обеспечение защиты прав и свобод человека и гражданина при
                  обработке его персональных данных, в том числе защиты прав на
                  неприкосновенность частной жизни, личную и семейную тайну, а
                  также установление ответственности должностных лиц, имеющих
                  доступ к персональным данным, за невыполнение требований норм,
                  регулирующих обработку и защиту персональных данных.
                </p>
              </li>
            </ol>
          </motion.li>
          <motion.li
            className={style.root__list__item}
            {...motionSettingsVisibleOpacity}
          >
            <div className={style.root__list__wrapper}>
              <h2 className={style.root__list__subtitle}>
                Принципы обработки персональных данных
              </h2>
            </div>

            <ol className={style.root__sublist}>
              <li>
                <div className={style.root__sublist__wrapper}>
                  <h3>
                    Обработка персональных данных в Компании основана на
                    следующих принципах:
                  </h3>
                </div>
                <ul className={style.root__sublist__list}>
                  <li>
                    <p>
                      законности целей и способов обработки персональных данных
                      и добросовестности;
                    </p>
                  </li>
                  <li>
                    <p>
                      соответствия целей обработки персональных данных целям,
                      заранее определенным и заявленным при сборе персональных
                      данных, а также полномочиям Компании;
                    </p>
                  </li>
                  <li>
                    <p>
                      соответствия объема и характера обрабатываемых
                      персональных данных, способов обработки персональных
                      данных целям обработки персональных данных;
                    </p>
                  </li>
                  <li>
                    <p>
                      достоверности персональных данных, их актуальности и
                      достаточности для целей обработки, недопустимости
                      обработки избыточных по отношению к целям сбора
                      персональных данных;
                    </p>
                  </li>

                  <li>
                    <p>
                      легитимности организационных и технических мер по
                      обеспечению безопасности персональных данных;
                    </p>
                  </li>

                  <li>
                    <p>
                      непрерывности повышения уровня знаний работников Компании
                      в сфере обеспечения безопасности персональных данных при
                      их обработке;
                    </p>
                  </li>

                  <li>
                    <p>
                      стремления к постоянному совершенствованию системы защиты
                      персональных данных.
                    </p>
                  </li>
                </ul>
              </li>
            </ol>
          </motion.li>

          <motion.li
            className={style.root__list__item}
            {...motionSettingsVisibleOpacity}
          >
            <div className={style.root__list__wrapper}>
              <h2 className={style.root__list__subtitle}>
                Цели обработки персональных данных
              </h2>
            </div>

            <ol className={style.root__sublist}>
              <li>
                <div className={style.root__sublist__wrapper}>
                  <h3>
                    Обработка персональных данных в Компании осуществляется с
                    целью:
                  </h3>
                </div>
                <ul className={style.root__sublist__list}>
                  <li>
                    <p>
                      планирования операционной деятельности розничных
                      подразделений Компании;
                    </p>
                  </li>
                  <li>
                    <p>
                      использования для автоматизации процессов формирования
                      первичных документов (договоров, счетов на оплату,
                      универсальных передаточных документов, различных Актов,
                      паспортов транспортных средств, Наряд-заказом,
                      предварительных наряд-заказов, накладных и т.п.);
                    </p>
                  </li>
                  <li>
                    <p>
                      идентификации клиента при его обращении в Компанию по
                      телефону и/или электронным средствам связи;
                    </p>
                  </li>
                  <li>
                    <p>
                      идентификации клиента при осуществлении основных
                      видов-деятельности Компании, предусмотренных Уставом;
                    </p>
                  </li>
                  <li>
                    <p>
                      использования для автоматизации процессов документарного
                      оформления бизнес–процессов при продаже автомобилей,
                      оказании услуг (выполнения работ) по ремонту и
                      техническому обслуживанию автомобилей и формирования
                      отчетов, при продаже запчастей, аксессуаров;
                    </p>
                  </li>
                  <li>
                    <p>
                      формирования единой клиентской базы покупателей
                      автомобилей для автоматизации задач послепродажного
                      обслуживания и маркетинга;
                    </p>
                  </li>

                  <li>
                    <p>обеспечения рекламной деятельности Компании;</p>
                  </li>
                  <li>
                    <p>
                      использования для автоматизации процессов формирования
                      отчетных документов по деятельности страховых агентов;
                    </p>
                  </li>
                  <li>
                    <p>
                      автоматизации, оптимизации операционной деятельности
                      Компании;
                    </p>
                  </li>

                  <li>
                    <p>ведения и актуализации клиентской базы;</p>
                  </li>

                  <li>
                    <p>
                      получения и исследования статистических данных об объемах
                      продаж и качестве оказываемых услуг;
                    </p>
                  </li>

                  <li>
                    <p>проведения маркетинговых программ;</p>
                  </li>

                  <li>
                    <p>
                      проведению опросов и исследований, направленных на
                      выявление удовлетворенности/неудовлетворенности клиентов,
                      постоянного совершенствования уровня предоставляемых
                      услуг;
                    </p>
                  </li>

                  <li>
                    <p>
                      информирования клиентов по каналам связи (СМС-рассылку,
                      рассылку мультимедийных сообщений через мобильные
                      приложения и т.д.) о предлагаемых Компанией автомобилях,
                      запасных частях и аксессуарах, оказываемых услугах,
                      проводимых бонусных, сервисных мероприятий, рекламных,
                      отзывных акций и т.д..;
                    </p>
                  </li>

                  <li>
                    <p>
                      рекламирования и иного любого продвижения товаров и услуг
                      Операторов на рынке путем осуществления прямых контактов с
                      субъектами персональных данных;
                    </p>
                  </li>
                </ul>
              </li>
              <li className={style.root__sublist__item}>
                <p>
                  В том числе обработка персональных данных осуществляется в
                  автоматизированных информационных системах. Состав
                  персональных данных, обрабатываемых с использованием
                  информационных систем персональных данных Компании должен
                  соответствовать целям и задачам сбора, обработки и
                  использования персональных данных.
                </p>
              </li>
            </ol>
          </motion.li>
          <motion.li
            className={style.root__list__item}
            {...motionSettingsVisibleOpacity}
          >
            <div className={style.root__list__wrapper}>
              <h2 className={style.root__list__subtitle}>
                Порядок получения (сбора) персональных данных
              </h2>
            </div>

            <ol className={style.root__sublist}>
              <li className={style.root__sublist__item}>
                <p>
                  Все персональные данные Клиента получаются у него лично с его
                  письменного согласия либо в электронном виде, после прочтения
                  согласия и нажатия соответствующей кнопки, кроме случаев,
                  предусмотренных законами РФ.
                </p>
              </li>

              <li className={style.root__sublist__item}>
                <p>
                  Согласие Клиента на использование его персональных данных
                  хранится в Компании в бумажном и/или электронном виде.
                </p>
              </li>
              <li className={style.root__sublist__item}>
                <p>
                  Согласие субъекта на обработку персональных данных действует в
                  течение всего срока действия договора, а также{" "}
                  <strong>в течение 10 лет</strong> с даты прекращения действия
                  договорных отношений Клиента с Компанией. По истечении
                  указанного срока действие согласия считается продленным на
                  каждые следующие пять лет при отсутствии сведений о его
                  отзыве.
                </p>
              </li>
              <li className={style.root__sublist__item}>
                <p>
                  Если персональные данные Клиента возможно получить только у
                  третьей стороны, Клиент должен быть уведомлен об этом заранее
                  и от него должно быть получено письменное согласие. Третье
                  лицо, предоставляющее персональные данные Клиента, должно
                  обладать согласием субъекта на передачу персональных данных
                  Компании. Компания обязана получить подтверждение от третьего
                  лица, передающего персональные данные Клиента о том, что
                  персональные данные передаются с его согласия. Компания
                  обязана при взаимодействии с третьими лицами заключить с ними
                  соглашение о конфиденциальности информации, касающейся
                  персональных данных Клиентов.
                </p>
              </li>
              <li className={style.root__sublist__item}>
                <p>
                  Компания обязана сообщить Клиенту о целях, предполагаемых
                  источниках и способах получения персональных данных, а также о
                  характере подлежащих получению персональных данных и
                  последствиях отказа Клиента персональных данных дать
                  письменное согласие на их получение.
                </p>
              </li>

              <li>
                <div className={style.root__sublist__wrapper}>
                  <h3>
                    Обработка персональных данных Клиентов без их согласия
                    осуществляется в следующих случаях:
                  </h3>
                </div>

                <ol className={style.root__sublist__list}>
                  <li>
                    <p>Персональные данные являются общедоступными.</p>
                  </li>
                  <li>
                    <p>
                      По требованию полномочных государственных органов в
                      случаях, предусмотренных федеральным законом.
                    </p>
                  </li>
                  <li>
                    <p>
                      Обработка персональных данных осуществляется на основании
                      федерального закона, устанавливающего ее цель, условия
                      получения персональных данных и круг субъектов,
                      персональные данные которых подлежат обработке, а также
                      определяющего полномочия оператора.
                    </p>
                  </li>
                  <li>
                    <p>
                      Обработка персональных данных осуществляется в целях
                      заключения и исполнения договора, одной из сторон которого
                      является субъект персональных данных – Клиент.
                    </p>
                  </li>
                  <li>
                    <p>
                      Обработка персональных данных осуществляется для
                      статистических целей при условии обязательного
                      обезличивания персональных данных.
                    </p>
                  </li>
                  <li>
                    <p>В иных случаях, предусмотренных законом.</p>
                  </li>
                </ol>
              </li>
              <li className={style.root__sublist__item}>
                <p>
                  Организация не имеет права получать и обрабатывать
                  персональные данные Клиента о его расовой, национальной
                  принадлежности, политических взглядах, религиозных или
                  философских убеждениях, состоянии здоровья, интимной жизни.
                </p>
              </li>
            </ol>
          </motion.li>
        </ol>
      </article>
    </>
  );
};

export default PolicyOfPersonalData;
