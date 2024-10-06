

import { Dialog, expect } from "@playwright/test";
import test from "../base/baseTest"

import {landingPage as landingPage} from '../utility/testData/take2GamesMainPage.json';



test.describe('Take2Games main page related test cases', () => {



    test.beforeEach(async ({ take2GamesMainPage, page, webActions  }) => {
        // 1. Navigate to mainPage
        await take2GamesMainPage.navigateToURL()
        await webActions.waitForPageFullyLoaded()
        //close the notification window
        await page.getByRole('button', { name: 'Close' }).click()

        
    });


    landingPage.forEach((item, index) => {

        test(`@Smoke TC1 Verify Logo and Navigation on Take-Two Games Homepage ${landingPage[index].games}`, {
            annotation:{
                type:'Test Cases',
                description:'https://weCanLinkJiraTicketsHere'

        }},async ({
             
             webActions,
             context,
             take2GamesMainPage,
             page
        
        
            }) => {
            // Test Steps:  

            // 1. Navigate to the Take-Two Games homepage.
            // Expected: --- 
            // 1. The homepage should load successfully.

            // 2. Capture a screenshot of the logo on the Take-Two Games homepage.
            // Expected: --- 
            // 2. The logo on the homepage should match the baseline screenshot.
            await expect.soft(take2GamesMainPage.t2MainLogo).toHaveScreenshot(landingPage[index].logo)

            // 3. Click on the **Games** dropdown menu.
            await page.waitForTimeout(500)
            await take2GamesMainPage.games_Dropdown.click()
            // Expected: --- 
            // 3. The dropdown menu should open successfully.
            await expect.soft(page.getByLabel('Games')).toBeVisible()

            // 4. Verify that the following options are displayed:
            //    - Rock Star Games
            //    - 2K
            //    - Zynga
            //    - Private Division
            // Expected: --- 
            // 4. The dropdown menu should display all four options correctly.
            const expectedOpt = [
                "Rockstar Games",
                "2K",
                "Zynga",
                "Private Division"
            ];
            expect.soft(await page.getByRole('menuitem').allTextContents()).toEqual(expectedOpt)

            // 5. Click on the menu options and verify the corresponding URLs`.
            // Expected: --- 
            // Rock Star Games URL: https://www.rockstargames.com/
            // 2K URL: https://store.2k.com/
            // Zynga URL: https://www.zynga.com/
            // Private Division URL: https://store.privatedivision.com/
            await page.getByRole('menuitem', { name:  landingPage[index].games}).click()
            await webActions.waitForPageFullyLoaded()
            expect.soft(await page.url()).toEqual(landingPage[index].url)

        })


    })

  

    
})













