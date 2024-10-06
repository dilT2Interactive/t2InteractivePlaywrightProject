

import { Dialog, expect } from "@playwright/test";
import test from "../base/baseTest"

import {TC2 as TC2} from '../utility/testData/zyngaGameCareerPage.json';



test.describe('Zynga Games Page and Career Page related test cases', () => {



    test.beforeEach(async ({ zyngaGameCareerPage, page, webActions  }) => {
        // 1. Navigate to mainPage
        await zyngaGameCareerPage.navigateToURL()
        await webActions.waitForPageFullyLoaded()
        

        
    });


    TC2.forEach((item, index) => {

        test(`TC2 Verify Games List on Zynga Main Page is in Ascending Order ${TC2[index].type}`, {
            annotation:{
                type:'Test Cases',
                description:'https://weCanLinkJiraTicketsHere'

        }},async ({
             
             webActions,
             context,
             zyngaGameCareerPage,
             page
        
        
            }) => {

            // Test Steps:

            // 1. Navigate to the Zynga main page (https://www.zynga.com/).
            // Expected: The Zynga homepage should load successfully.

            // 2. Click on the Games button in the top navigation bar.
            await zyngaGameCareerPage.games_btn.click()
            await page.getByRole('heading', { name: 'Featured Games' }).waitFor({state:'visible'})
            // Expected: The Games page should load successfully with a list of available games displayed.


            // 3. Wait for the Games section to be fully loaded and displayed.
            // Expected: All available game links should be displayed in the Games section.
            await expect.soft(zyngaGameCareerPage.allGamesSection).toBeVisible()

            // 4. Retrieve the list of game names from the displayed links.
            // Expected: The list of game names is successfully retrieved.
            const gamesList = await zyngaGameCareerPage.allGamesSection.locator('a').allTextContents()
            //const gamesList = await page.locator('#all-games a').allTextContents()
            const gameTitles = gamesList.map(title => title.trim()).filter(title => title); // remove any extra whitespaces and Trim
            console.log(gameTitles)

            // 5. Verify that the list of game names is sorted in descending order.
            // Expected: The game names should be in descending order.
            // the list include number and letter parts so need to separate titles into numbers and letters

            const numberTitles: string[] = [];
            const letterTitles: string[] = [];

            for (const title of gameTitles) {
                if (/^\d/.test(title)) { // Check if the title starts with a digit
                    numberTitles.push(title);
                } else {
                    letterTitles.push(title);
                }
            }

            // Check if each list is in ascending order
            expect.soft(webActions.isAscending(numberTitles)).toBeTruthy();
            expect.soft(await webActions.isAscending(letterTitles)).toBeTruthy();

            // double check if each list is not in descending order
            expect.soft(await webActions.isDescending(numberTitles)).not.toBeTruthy();
            expect.soft(await webActions.isDescending(letterTitles)).not.toBeTruthy();
                        

        })


    })

  

    
})













