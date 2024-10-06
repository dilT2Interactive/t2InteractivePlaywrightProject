import {test as baseTest, expect} from '@playwright/test';

import WebActions from './webActions';

import Take2GamesMainPage from '../pages/take2GamesMainPage';
import ZyngaGameCareerPage from '../pages/zyngaGameCareerPage';




const test = baseTest.extend<{

    webActions: WebActions;
    take2GamesMainPage: Take2GamesMainPage;
    zyngaGameCareerPage: ZyngaGameCareerPage;
    
    
    
}>({
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },
    take2GamesMainPage: async ({ page, context }, use) => {
        await use(new Take2GamesMainPage(page, context));
    },
    zyngaGameCareerPage: async ({ page, context }, use) => {
        await use(new ZyngaGameCareerPage(page, context));
    },

})

export default test;