/*                       Typewriter-effect-START                           */
var typed = new Typed(".typing",{
    strings: ["","web designer","","serious","","hard-working","","patient",""],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true

})
/*                       Typewriter-effect-END                           */
/*--------------------------------------------------------------------------*/
/*                  Coloring at selection-ASIDE + Interactive transition -START         */

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
        {
           const a = navList[i].querySelector("a");
           a.addEventListener("click", function()
           {
           removeBackSection();
            for(let j=0; j<totalNavList; j++)
                { if(navList[j].querySelector("a").classList.contains("active"))
                    {
                        addBackSection(j);
                    }
                   navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active")
                showSection(this);
                if(window.innerWidth<1200)
                    {
                        asideSectionTogglerBtn();

                    }
           })
        }

function removeBackSection() 
{
    for( let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}  
        
function addBackSection(num)    
{
    allSection[num].classList.add("back-section")
} 
        
function showSection(element)
{
    for( let i=0; i<totalSection; i++)
        {
         allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
}
                
function updateNav(element)
{
    for( let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
                {
                    navList[i].querySelector("a").classList.add("active");
                }
        }
}
/*               Coloring at selection-ASIDE + Interactive transition -END*/
/*--------------------------------------------------------------------------*/  
/*              Interactive "hire-me" button-START         */

document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
})     

/*              Interactive "hire-me" button-END         */
/*--------------------------------------------------------------------------*/  
/*              Interactive "about" buttons-START         */

function toggleSection(button, sectionId, showText, hideText) {
    const section = document.getElementById(sectionId);
        if (section.style.display === "none" || section.style.display === "") {
                section.style.display = "block";
                button.textContent = hideText;
        } else {
                section.style.display = "none";
                button.textContent = showText;
                }
}

/*                Interactive "about" buttons-END           */

