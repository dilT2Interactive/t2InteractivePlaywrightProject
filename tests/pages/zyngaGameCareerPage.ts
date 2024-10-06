import { expect, Locator, Page, BrowserContext } from "@playwright/test";


export default class ZyngaGameCareerPage {
    url = 'https://www.zynga.com/'
    
    games_btn: Locator;
    allGamesSection: Locator;
    
    

    constructor(private page:Page, context: BrowserContext){
        

        // Nav Bar Section elements

        this.games_btn = page.getByRole('link', { name: 'Games' })
        
        //Games Page Elements
        this.allGamesSection = page.locator('[id="all-games"]')
        
        




        


        
    }

    // =================Page Spesific Fuctions==================

    async navigateToURL(){
        
        await this.page.goto(this.url)
        await this.page.waitForURL(this.url)
    }




}