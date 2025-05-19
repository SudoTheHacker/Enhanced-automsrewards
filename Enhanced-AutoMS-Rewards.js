// ==UserScript==
// @name         Auto MS-Rewards Enhanced
// @version      0.1
// @description  This code has nothing to do with the original AutoMS-Rewards by Potaper & saitamasahil. It is a complete rewrite from scratch and is implemented in my own way with no inspiration from the original code. THIS BREAKS MICROSOFT TOS SO USE AT YOUR OWN RISK. YOU'RE NOT FOOLING ANYONE USING THESE SCRIPTS AND THEY ARE VERY EASILY DETECTABLE.
// @author       SudoTheHacker
// @match        https://www.bing.com/*
// @license      GPL-3.0 license
// @grant    GM.getValue
// @grant    GM.setValue
// ==/UserScript==

(async function () {
    'use strict';
    const queries = ["weather near me", "best pizza restaurants in my area", "current stock market news", "how to fix a leaking faucet", "latest tech gadget reviews", "top 10 movies on Netflix right now", "DIY home decor ideas", "symptoms of seasonal allergies", "how to start a vegetable garden", "local coffee shops with free wifi", "history of the Roman Empire", "most effective weight loss tips", "what time does Target close today", "free online coding courses", "how to improve public speaking skills", "easy healthy dinner recipes", "tips for traveling on a budget", "upcoming concerts in Toronto", "how to backup an iPhone", "what's the best smartphone under $300", "child-friendly museums near me", "most popular podcasts of 2025", "how to meditate for beginners", "safest hiking trails in California", "newly released video games 2025", "convert dollars to euros live", "how to fix a slow computer", "exercises for lower back pain", "what is keto diet meal plan", "how to tie a tie step by step", "current COVID-19 guidelines in Ontario", "download free desktop wallpapers", "tips for organizing a small apartment", "best travel apps for planning trips", "how to recycle electronics properly", "local farmers market days", "cheap flight deals for summer vacations", "what are the benefits of yoga", "how to improve my credit score", "simple vegetarian recipes", "what do the different Starbucks sizes mean", "best practices for remote work productivity", "how to create a budget spreadsheet", "is my phone waterproof", "commute times from Queen West to downtown", "historical landmarks to visit in Toronto", "how to reduce stress at work", "beginners guide to investing in stocks", "what’s new in the Marvel Cinematic Universe", "tips for studying effectively for exams", "best online multiplayer games of 2025", "how to stream games on Twitch", "top VR headsets for immersive gameplay", "lag troubleshooting tips for online gaming", "gaming keyboard reviews 2025", "how to get better at strategic games", "most anticipated games for next year", "how to join a gaming clan", "most scenic hikes near Toronto", "where to find local street food in Italy", "best travel insurance providers", "how to score last minute hotel deals", "top travel blogs to follow this year", "budget travel tips for Europe", "unique Airbnb stays around the world", "how to pack light for a long trip", "one-pot recipes for busy weeknights", "how to make gluten-free bread at home", "tips for baking perfect sourdough", "quick breakfast ideas for on-the-go", "cooking techniques for beginners", "authentic Mexican taco recipes", "how to perfectly roast a chicken", "meal planning for vegetarian diets", "how to learn a new language fast", "DIY craft projects for home decor", "beginner photography tips", "how to start a podcast from scratch", "current trends in sustainable living", "best HIIT workouts for beginners", "yoga routines for flexibility", "at-home strength training exercises", "running tips for marathon beginners", "benefits of regular cardio exercise", "best online courses for digital marketing", "how to study effectively for exams", "top universities for computer science", "free language learning apps", "scholarship opportunities for international students", "how to invest in index funds", "tips for building an emergency fund", "best apps for personal finance tracking", "how to start an online business", "tax tips for freelancers", "latest breakthroughs in renewable energy", "how quantum computing works", "innovative tech startups to watch", "artificial intelligence trends 2025", "space exploration milestones", "tips for a balanced diet", "managing stress naturally", "mental health resources available online", "benefits of mindfulness meditation", "how to improve sleep quality", "resume tips for recent graduates", "how to ace a virtual job interview", "best networking events near me", "tech skills in demand for 2024", "how to develop leadership skills", "upcoming art exhibitions in Toronto", "how to learn digital painting", "classical music playlists for relaxation", "review of the latest bestselling novel", "indie film recommendations 2025", "easy DIY backyard projects", "how to paint a room like a pro", "budget-friendly home renovation ideas", "tips for creating a home office", "how to declutter your space effectively", "best fuel-efficient cars 2025", "how to change a flat tire yourself", "electric vehicle charging station near me", "car maintenance tips for beginners", "how to improve your car's fuel economy", "how to train a new puppy", "best foods for a healthy cat diet", "tips for pet grooming at home", "how to adopt a pet in Toronto", "understanding dog body language", "top cycling routes in my area", "how to repair a broken bicycle chain", "soccer drills for beginners", "upcoming sports events near me", "best running shoes for long distances", "how to improve your golf swing", "tips for setting up a home gym", "creative gift ideas for birthdays", "how to plan a surprise party", "DIY holiday decorations on a budget", "where to find local craft fairs", "best indie bands to listen to in 2025", "podcast recommendations for creative minds", "best smoothie recipes for breakfast", "how to fix a squeaky door", "tips for growing organic herbs at home", "what are the benefits of intermittent fasting", "how to create a minimalist wardrobe", "DIY projects for upcycling old furniture", "steps to start a mindfulness meditation practice", "how to choose the right running shoes", "what is the best way to clean stainless steel appliances", "how to plan a weekend camping trip", "beginner guitar chords for popular songs", "how to build a treehouse for kids", "tips for improving your WiFi signal at home", "ideas for decorating a small apartment", "how to boost your immune system naturally", "quick and easy pasta recipes", "how to start a recycling program at work", "tips for saving money on groceries", "how to create a professional LinkedIn profile", "what are the best budgeting apps available", "how to prepare for a job interview online", "tips for effective email communication", "how to set up a smart home system", "what are the latest trends in wearable tech", "how to grow your own vegetables indoors", "simple exercises to improve flexibility", "how to install a ceiling fan step by step", "tips for planning a successful road trip", "what are the must-read books of all time", "how to make your own natural cleaning products", "beginner tips for learning how to code", "how to get started with watercolor painting", "what are the most scenic train routes in North America", "tips for finding deals on online shopping", "how to create a capsule wardrobe for every season", "what are the benefits of volunteering in your community", "how to improve indoor air quality at home", "tips for hosting a successful dinner party", "how to use essential oils for relaxation", "how to start a bullet journal to organize your life", "what are the basics of personal finance management", "how to restore old photos using digital tools", "tips for maintaining a healthy work-life balance", "what are the most effective study techniques", "how to get started with landscape photography", "tips for planning an eco-friendly wedding", "what are the top natural remedies for common colds", "how to build a successful morning routine", "tips for decluttering your digital life", "how to prepare your home for a natural disaster", "the benefits of practicing daily gratitude", "how to get organized with digital calendars", "tips for a successful grocery shopping strategy", "what are the benefits of reading daily", "how to improve your posture at work", "tips for hosting a virtual game night", "how to create a successful social media strategy", "the benefits of switching to a plant-based diet", "how to find the best local farmers' markets", "tips for navigating public transportation in a new city", "how to create an emergency preparedness kit", "what are the best methods to learn a new skill", "how to plan a budget-friendly family vacation", "tips for maximizing productivity while working remotely", "how to strengthen your core through exercise", "what are the newest trends in home automation", "how to repair minor car scratches at home", "tips for safe online shopping during the holidays", "how to transition to sustainable living", "what are the benefits of daily journaling", "how to design a functional home office", "tips for preparing healthy snacks for school", "how to set realistic fitness goals", "what are the best practices for digital privacy", "how to create an effective study schedule", "tips for reducing household energy consumption", "how to cook authentic Indian curry at home", "what are the benefits of a balanced macro diet", "how to plan a successful virtual meeting", "tips for nurturing creativity in children", "how to find local volunteer opportunities", "what are the best apps for tracking fitness progress", "how to create a personal mission statement", "tips for taking care of indoor houseplants", "how to navigate online learning platforms efficiently", "what are the essentials for a beginner's art studio", "how to perfect your home coffee brewing method", "tips for hosting a movie marathon night", "how to get started with mindfulness-based stress reduction", "what are the best podcasts for personal development", "how to maximize natural light in your home", "tips for staying motivated while working from home", "how to create a digital portfolio for creatives", "what are the top travel destinations for digital nomads", "how to choose the right fitness tracker for your needs", "tips for maintaining healthy skin during winter", "how to develop a new hobby as an adult", "what are the basics of cryptocurrency investing", "how to set up an ergonomic workstation", "tips for converting a room into a productive workspace", "how to plan a sustainable holiday celebration", "what are the best practices for online networking", "how to organize a community clean-up event", "tips for starting a successful blog", "how to find new music based on your taste", "what are the benefits of regular strength training", "how to plan a surprise weekend getaway", "Where is ms rewards in xbox", "chromium chelate", "methanol", "ethanol", "myristicin", "is weed legal", "xbox series s", "cheapest trip to bermuda", "movies free", "minecraft movie online free", "youtube alternatives", "calculator", "cool math games", "how to get free xbox games", "how much ms rewards points can i get each month", "was there really cocaine in coca cola", "how dangerous is sulfuric acid", "column chromatography", "learn chemistry", "sokhlet extraction", "tampermonkey extension", "cool open source porjects", "cool open source projects", "pixel 8 buy", "pixel 8 pink line", "when will the pixel 10 be announced", "iphone vs pixels", "new nothing phone", "best budget phone", "will there be a macbook 12 inch with apple silicon", "when is the next apple event", "is ai actually useful or just destroying the environment", "what is the dead internet theory", "what is scp", "how to extract alkaloids from plants", "g2a", "cheap games", "ps5 vs xbox series x", "is the nintendo switch 2 worth it", "should i be concerned about trumps tarrif", "rent or buy as a student", "how do i rent my appartment", "cheapest apparment in new york", "how to perfect your home coffee brewing method", "tips for hosting a movie marathon night", "best indoor plants for low light", "easy healthy weeknight dinner recipes", "what to do on a rainy day at home", "budget travel ideas for Europe", "beginner yoga routines for flexibility", "DIY home improvement projects for beginners", "strategies to improve work productivity", "how to start a small vegetable garden", "quick guide to meditation for stress relief", "steps to declutter your home office", "best books for personal development in 2023", "how to build a sustainable capsule wardrobe", "tips for mastering public speaking", "best free online courses for coding", "how to plan a minimalist lifestyle", "time management techniques for busy professionals", "how to cultivate a mindfulness practice", "creative meal prep ideas for the week", "how to get started with watercolor painting", "tips for balancing work and life at home", "how to create a comfortable home study space", "healthy smoothie recipes for energy boost", "ways to boost your immune system naturally", "how to improve sleep quality with bedtime routines", "beginner fitness routines you can do at home", "creative DIY gifts for any occasion", "how to improve indoor air quality naturally", "tips for starting your own podcast", "how to set effective daily goals", "best strategies for learning a new language fast", "affordable home decor ideas for small spaces", "how to reduce monthly expenses without sacrificing quality", "tips for a successful remote work setup", "how to plan an eco-friendly weekend getaway", "best online resources for learning photography", "how to create a bullet journal for beginners", "tips to increase your productivity while working from home", "beginner's guide to investing in the stock market", "DIY natural cleaning products for your home", "how to create a morning routine that works", "tips for improving your mental health daily", "how to bake perfect sourdough bread at home", "easy home workouts without equipment", "what to pack for a weekend camping trip", "how to style your hair for a busy morning", "tips for organizing a successful virtual meeting", "best ways to unwind after a long day", "how to start a home-based business", "tips for planning a budget-friendly party", "how to negotiate a raise at work", "creative ideas for repurposing old furniture", "how to make your own natural skincare products", "tips for improving your photography skills", "how to create a balanced vegan meal plan", "best mobile apps for learning new skills", "ways to practice self-care on a budget", "tips for writing a standout resume", "how to design a small space apartment", "techniques for reducing anxiety through deep breathing", "best podcasts for business inspiration", "how to plan a surprise birthday party", "tips for maintaining long-distance relationships", "how to transition to a sustainable lifestyle", "creative ways to recycle household items", "how to boost your confidence in social settings", "tips for mastering a new musical instrument", "how to plan a fun family game night", "methods to reduce plastic waste in your life", "how to start a daily journaling habit", "tips for pet training at home", "how to create a budget and stick to it", "best free meditation apps for beginners", "how to make your own herbal tea blends", "tips for preparing for a job interview", "how to create effective study habits", "ways to incorporate exercise into a busy schedule", "how to build strong communication skills", "tips for having a minimalist home makeover", "how to save money on grocery shopping", "best strategies for online learning success", "how to create a stress-free morning routine", "tips for planning a scenic road trip", "how to care for indoor succulents", "ways to improve your work-life balance", "how to create a vision board for your goals", "tips for starting a meditation practice for beginners", "how to navigate social media without getting overwhelmed", "creative ideas for a DIY home spa day", "how to improve your digital organization skills", "tips for managing time as a freelancer", "how to cultivate healthy eating habits on a budget", "best ways to incorporate mindfulness into daily life", "how to create a cozy reading nook at home", "tips for boosting productivity with technology", "how to reduce digital clutter and distractions", "creative tips for customizing your workspace", "how to start a blog and grow your audience", "tips for making sustainable fashion choices", "how to overcome procrastination effectively", "ways to practice gratitude daily", "how to prepare your home for a natural disaster", "tips for maintaining a healthy work routine", "how to create an eco-friendly garden", "tips for cooking healthy meals in under 30 minutes", "how to create a minimalist wardrobe on a budget", "tips for growing your own herbs indoors", "best strategies for saving money for a down payment", "how to create a small space workout routine", "tips for successful urban gardening", "beginner tips for digital photography", "ways to improve your handwriting quickly", "how to build a personal brand online", "strategies for effective email marketing", "how to create a balanced weekly meal plan", "tips for starting a home candle-making business", "how to design an ergonomic workspace at home", "steps to learn basic coding in Python", "how to plan a sustainable vacation itinerary", "tips for keeping your indoor plants healthy", "how to create an efficient cleaning schedule", "ways to organize your digital files easily", "tips for starting a successful YouTube channel", "how to create a minimalist skincare routine", "beginner tips for learning calligraphy", "quick recipes for a healthy breakfast on the go", "how to establish a successful morning routine", "tips for effective budget planning each month", "ways to improve your remote communication skills", "how to create homemade natural cleaning solutions", "tips for planning a memorable family reunion", "how to set achievable long-term career goals", "creative DIY projects for home decor", "tips for maintaining a balanced work week", "how to cultivate a regular meditation practice", "steps for planning a stress-free holiday season", "how to improve indoor lighting in small apartments", "tips for organizing a productive workspace", "best practices for sustainable daily habits", "how to create beautiful homemade greeting cards", "tips for learning a new language quickly", "how to start a side hustle from home", "methods to keep your skin glowing naturally", "tips for staying motivated during a fitness journey", "how to transition to a plant-based diet", "ideas for eco-friendly home renovations", "how to streamline your daily routine for efficiency", "tips for creating engaging social media content", "what to read for self-improvement in 2023", "how to create a DIY natural body scrub", "tips for organizing your closet effectively", "how to improve focus with daily journaling", "best exercises to do at home without equipment", "tips for planning an eco-friendly wedding", "how to create a sustainable meal prep plan", "steps to start a freelance writing career", "tips for balancing family life and working from home", "how to design a modern minimalist living room", "creative ways to reuse and repurpose old items", "how to build a routine for learning a musical instrument", "tips for reducing environmental impact at home", "how to optimize your sleep routine for better rest", "ways to introduce healthy habits into your daily routine", "tips for planning a memorable weekend getaway", "how to start investing with little money", "tips for creating a resume that stands out", "how to cook healthy meals on a tight schedule", "steps to create a relaxing bedtime routine", "how to incorporate more recycling into your life", "tips for maintaining healthy relationships remotely", "how to transition to zero-waste living", "creative ideas for decorating a small apartment", "tips for managing finances as a freelancer", "how to improve your public speaking skills quickly", "beginner strategies to learn graphic design", "how to create an indoor herb garden in your kitchen", "tips for planning and hosting virtual events", "how to stay active during a sedentary workday", "steps to create a sustainable daily schedule", "tips for mastering time management at home", "how to make homemade energy bars for workouts", "ideas for a budget-friendly home makeover", "how to start a meditation practice for better sleep", "tips for converting a spare room into a home office", "how to boost creativity through daily habits", "steps to plan a healthy and balanced diet", "tips for choosing eco-friendly products for home", "how to optimize your workspace for productivity", "creative ideas for personalized home gifts", "how to start a daily gratitude journal", "steps to learn how to repair common household items", "tips for organizing a community swap event", "how to build effective habits with daily routines", "tips for reducing stress through creative hobbies", "how to plan a tech-free day for mental clarity", "ideas for a quick and effective mindfulness practice", "tips for setting up a home recycling system", "how to create a DIY indoor water fountain", "steps for launching a personal blog", "how to improve your self-discipline every day", "tips for cooking vegetarian meals that satisfy", "how to practice yoga safely at home", "creative ways to personalize your home workspace", "steps to create a reliable savings plan", "tips for mastering the art of meal planning", "how to make healthy snacks for busy days", "ideas for hosting a sustainable dinner party", "tips for reducing digital distractions at work", "how to design custom decor on a budget", "steps to build a resilient morning routine", "tips for maintaining healthy skin on a budget", "how to set up a flexible study schedule for online learning", "creative ideas for boosting daily motivation", "tips for growing your personal network online", "how to build a successful blog from scratch", "steps to start learning about cryptocurrency", "tips for integrating exercise into a busy lifestyle", "how to create an inviting outdoor sitting area", "methods to improve mental clarity with meditation", "tips for enriching your daily reading habits", "how to repurpose household items into art", "steps to design a calming home meditation space"];
    window.addEventListener("load", async () => {
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        async function waitForElementById(id, parent = document) { // These are used to fixed the mobile problem, but apparently that doesn't work...  I will jump of a bridge jk
            const element = await new Promise(resolve => {
                const intervalId = setInterval(() => {
                    const el = parent.getElementById(id);
                    if (el) {
                        clearInterval(intervalId);
                        resolve(el);
                    }
                }, 100);
            });
            return element;
        }
        async function waitForClass(className, parent = document) {
            const elements = await new Promise(resolve => {
                const intervalId = setInterval(() => {
                    const els = parent.getElementsByClassName(className);
                    if (els.length > 0) {
                        clearInterval(intervalId);
                        resolve(els);
                    }
                }, 100);
            });
            return elements;
        }
        async function waitForTagName(tagName, parent = document) {
            const elements = await new Promise(resolve => {
                const intervalId = setInterval(() => {
                    const els = parent.getElementsByTagName(tagName);
                    if (els.length > 0) {
                        clearInterval(intervalId);
                        resolve(els);
                    }
                }, 100);
            });
            return elements;
        }

        function isMobile() { // lets try this then...
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        async function search() {
            await delay(Math.floor(Math.random() * 300))
            window.scrollTo({
                top: Math.floor(Math.random() * document.documentElement.scrollHeight - window.innerHeight),
                behavior: 'smooth'
            });
            await delay(Math.floor(Math.random() * 10000) + 7000)
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            let search_form = await waitForElementById("sb_form_q");
            console.log(search_form)
            let query = queries[Math.floor(Math.random() * queries.length - 1)]
            search_form.click()
            search_form.value = ""
            for (let i = 0; i < query.length; i++) {
                search_form.value += query[i];
                await delay(Math.floor(Math.random() * 100) + 50);
            }
            // document.getElementById("sb_form_go").click()
            search_form.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13 }));
        }
        if (!isMobile()) {
            let bar = await waitForTagName("ul", (await waitForClass("b_scopebar")[0]))
            bar[0].innerHTML = `<li><a id="overlaybtn">Auto-MSRE</a></li><li><p id="count">0</p></li>` + bar[0].innerHTML
            document.body.innerHTML = document.body.innerHTML + `<div id='overlay' class='hide'>
    <div id='overlay-content'>
        <button id='closeOverlay'>X</button>
        <h2>Auto-MSRE</h2>
        <p>Warning: This breaks MSR Term's of Service and is easily detectable.<b> USE AT YOUR OWN RISK</b></p>
        <input type='number' name='quantity' id='quantity' value='30' min='1' max='90' step='1'/>
        <button id="mssearch">Search</button>
        <p>For mobile spoofing, simply use an extension allowing to change the User-Agent. The stop button only takes effect in the next search.</p>
    </div>
</div>`
            document.head.innerHTML = document.head.innerHTML + `<style>
#overlay {position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);display: flex;justify-content: center;align-items: center;z-index: 9999;}
#overlay-content {background: #fff;border-radius: 8px;padding: 5%;width: 50%;max-width: 90%;text-align: center;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);}
#overlay-content h2 {margin-top: 0;}
#overlay-content button {padding: 1vh 4vw;background-color: #007bff;border: none;color: #fff;border-radius: 4px;cursor: pointer;font-size: 1.7vh;}
#overlay-content button:hover {background-color: #0060c7;}
#closeOverlay {position: absolute;top: 10px;right: 10px;background: transparent;border: none;font-size: 18px;cursor: pointer;}
#overlay.hide {display: none;}#overlaybtn {cursor: pointer;}
</style>`
        } else {
            document.body.innerHTML = document.body.innerHTML + `<div id="overlaybtn">
    <p id="count">0</p>
</div>
<div id='overlay' class='hide'>
    <div id='overlay-content'>
        <button id='closeOverlay'>X</button>
        <h2>Auto-MSRE</h2>
        <p>Warning: This breaks MSR Term's of Service and is easily detectable.<b> USE AT YOUR OWN RISK</b></p>
        <input type='number' name='quantity' id='quantity' value='30' min='1' max='90' step='1'/>
        <button id="mssearch">Search</button>
        <p>For mobile spoofing, simply use an extension allowing to change the User-Agent.</p>
    </div>
</div>`
            document.head.innerHTML = document.head.innerHTML + `<style>
#overlay {position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);display: flex;justify-content: center;align-items: center;z-index: 9999;}
#overlay-content {background: #fff;border-radius: 8px;padding: 5%;width: 50%;max-width: 90%;text-align: center;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);}
#overlay-content h2 {margin-top: 0;}
#overlay-content button {padding: 1vh 4vw;background-color: #007bff;border: none;color: #fff;border-radius: 4px;cursor: pointer;font-size: 1.7vh;}
#overlay-content button:hover {background-color: #0060c7;}
#closeOverlay {position: absolute;top: 10px;right: 10px;background: transparent;border: none;font-size: 18px;cursor: pointer;}
#overlay.hide {display: none;}#overlaybtn {cursor: pointer;}
#overlaybtn {position: fixed;bottom: 20px;left: 20px;width: 80px;height: 80px;background-color: #007BFF;border-radius: 50%;z-index: 9999;display: flex;justify-content: center;align-items: center;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);}
</style>`
        }
        let count = await GM.getValue("count", 0);
        document.getElementById("count").innerHTML = count;
        document.getElementById("quantity").addEventListener('input', function () { if (this.value.includes('.')) { this.value = Math.floor(this.value); } })
        document.getElementById("closeOverlay").addEventListener("click", () => { document.getElementById("overlay").classList.toggle("hide") })
        document.getElementById("overlaybtn").addEventListener("click", () => { document.getElementById("overlay").classList.toggle("hide") })
        document.getElementById("mssearch").addEventListener("click", async () => {
            if (count < 1) {
                document.getElementById("overlay").classList.toggle("hide")
                count = Math.floor(document.getElementById("quantity").value) - 1
                GM.setValue("count", count)
                document.getElementById("count").innerHTML = count;
                search()
            } else {
                GM.setValue("count", 0)
                document.getElementById("mssearch").innerHTML = "Search"
                document.getElementById("count").innerHTML = count;
            }
        })
        if (count > 0) {
            document.getElementById("mssearch").innerHTML = "Stop"
            count = count - 1
            GM.setValue("count", count)
            document.getElementById("count").innerHTML = count;
            search()
        }
    })
})();