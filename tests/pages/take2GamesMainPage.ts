import { expect, Locator, Page, BrowserContext } from "@playwright/test";


export default class Take2GamesMainPage {
    url = 'https://www.take2games.com/'
    
    t2MainLogo: Locator;
    games_Dropdown: Locator;
    
    

    constructor(private page:Page, context: BrowserContext){
        

        // Header Section elements
        this.t2MainLogo = page.getByTestId('top-nav-desktop').getByTestId('site-logo')

        //Top Nav bar 
        this.games_Dropdown = page.getByRole('button', { name: 'Games' })
        




        


        
    }

    // =================Page Spesific Fuctions==================

    async navigateToURL(){
        
        await this.page.goto(this.url)
        await this.page.waitForURL(this.url)
    }




}