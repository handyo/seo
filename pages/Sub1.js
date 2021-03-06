import React from 'react';
import HeadMeta from "../component/HeadMeta";

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

export const getStaticProps = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

function Sub1(props) {
    const {t} = useTranslation("common");
    return (
        <>
            <HeadMeta/>
            <h1>
                서브페이지1 - props를 쓰지 않았습니다.
            </h1>
            <div>
                <h1>{t('h1')}</h1>
                <ul>
                    <li>
                        {t('currentUrl')} : http://localhost:3000
                    </li>
                    <li>{t('description')}:</li>
                    <li>{t('currentUrl')}:</li>
                </ul>
            </div>
        </>
    );
}

export default Sub1;