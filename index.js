// Task 1.0
const mainEl = document.querySelector('main');
// 1.1
mainEl.style.backgroundColor = 'var(--main-bg)'
// Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
console.log(mainEl);
// Task 1.3
mainEl.classList.add('flex-ctr');
console.log(mainEl);
// Task 2.0
topMenuEl = document.querySelector('#top-menu');
console.log(topMenuEl);
// Task 2.1
topMenuEl.style.height = '100%';
// Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
console.log(topMenuEl);
// Task 2.3
topMenuEl.classList.add = ('flex-around');
console.dir(topMenuEl);
// Task 3.0
var menuLinks = [
    {text: 'About', href: '/About'},
    {text: 'Catalog', href: '#', subLinks: [
      {text: 'All', href: '/catalog/all'},
      {text: 'Top selling', href: '/catalog/top'},
      {text: 'Search', href: '/catalog/search'},
    ]},
    {text: 'Orders', href: '#' , subLinks: [
      {text: 'New', href: '/orders/new'},
      {text: 'Pending', href: '/orders/pending'},
      {text: 'History', href: '/orders/history'},
    ]},
    {text: 'Account', href: '#', subLinks: [
      {text: 'Profile', href: '/account/profile'},
      {text: 'Sign out', href: '/account/signout'},
    ]},
  ];
  //   Task 3.1
  menuLinks.forEach (obj => {
    const a = document.createElement('a');
    a.setAttribute('href', obj.href);
    a.textContent = obj.text;
    topMenuEl.append(a);
    console.log(a);
  })
  
  console.log(menuLinks);

//   Task 4.0
subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);

// Task 4.1
subMenuEl.style.height = "100%";
console.dir(subMenuEl);

// Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3

subMenuEl.classList.add = ('flex-around');
console.dir(subMenuEl);

// Task 4.4
subMenuEl.style.position = ("absolute");

// Task 4.5
subMenuEl.style.top = ("0");
console.dir(subMenuEl);

// Task 5.1: 
topMenuLinks = document.getElementById("top-menu").querySelectorAll('a');
console.log(topMenuLinks);
showingSubMenu = false;
console.dir(topMenuLinks)

function checkSubLinks(menuName){
    for(let i = 0; i < menuLinks.length; i++){
        elemnt= menuLinks[i]
        if(elemnt.text == menuName){
            console.log("equal");
            if('subLinks' in elemnt){
                return true;    }
                return false;
        }
    }
}

// Tasks from 5.2 to 5.3 and 5.4 5.5

topMenuEl.addEventListener("click", function(event){
    event.preventDefault();
    console.log(event.target);
    if(event.target.tagName.toLowerCase() !== 'a'){
        console.log("no a");
        return;
    } 
    event.target.classList.add('active');
    if(event.target.classList.contains('active')){
        console.log(event.target);
        event.target.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0';
        topMenuEl.classList.remove('active');
        
        link = event.target;
        console.log("Testing function");
        showingSubMenu = checkSubLinks(link.textContent);
        console.log(showingSubMenu);
        if(showingSubMenu == true){
            buildSubMenu(link.textContent);
        }    
            
        if(link.textContent == 'About'){
            mainEl.getElementsByTagName('h1')[0].innerText= link.textContent;
        }
        return;
    }
});
// Tasks from 5.6 to 5.7 and 5.8 
function buildSubMenu(menuName){
       subMenuEl.innerHTML = '';
    for (let i = 0; i < menuLinks.length; i++){
        if(menuName == menuLinks[i].text)
        menuLinks[i].subLinks.forEach (obj => {
            const a = document.createElement('a');
            a.setAttribute('href', obj.href);
            a.textContent = obj.text;
            subMenuEl.append(a);
            console.log(a);
          })
    }
subMenuEl.style.top = ("100%");
}

// Task 6.0: Attaching a delegated

subMenuEl.addEventListener('click', function(event){
    event.preventDefault();
    if(event.target.tagName.toLowerCase() !== 'a'){
        return;
    }
    console.log(event.target.tagName);
    // 6.1: event Listener 
    showingSubMenu = false;
    subMenuEl.style.top = '0';

    //Task 6.2: Removing the class 
    topMenuLinks.forEach(link => {
        link.classList.remove('active');
    })
    // Task 6.3: Updating the content 

    mainEl.getElementsByTagName('h1')[0].innerText= event.target.textContent;
});

//  Task 6.4 you have to click to see it. 