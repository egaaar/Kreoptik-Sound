;(function creoptic(){
    video__arr = ['https://www.youtube.com/embed/kEzmLu06FW0?si=cponzR2_0Dbm8hmZ', 'https://player.vimeo.com/video/814509024?h=5cb055239d',
                  'https://player.vimeo.com/video/845910955?h=80557c9fbb', 'https://player.vimeo.com/video/790428563?h=110a31e07f',
                  'https://www.youtube.com/embed/I-xfIz2kvkY?si=Bv4xFyWEkMOndqg7', 'https://player.vimeo.com/video/666321030?h=69bd8bd2ce',
                  'https://player.vimeo.com/video/660399750?h=053b85565a', 'https://player.vimeo.com/video/581509196?h=79a770b818',
                  'https://player.vimeo.com/video/560758840?h=d6adbce495&color=346020&title=0&byline=0&portrait=0', 'https://www.youtube.com/embed/pHOVCSi6rAg?si=hFJUUQPQW7Z4-fK3']
    let anime = document.querySelector('.anime');
    let list = {
        'img':['images/Lcd.png', 'images/bild.png', 'images/martini.png', 'images/marusya.png'],
        'title':['LCD TV', 'Loewe Bild i', 'Martini', 'Marusya'],
        'company':['Loewe', 'Loewe', 'Martini', 'Yandex']
    }
    let count = 0;
    for(let i=0; i<list.img.length/2; i++){
        let content1 = document.createElement('div');
        content1.className = 'media__row';
        for(let k=1; k<3; k++ ){
            let media__content = document.createElement('div');
            media__content.className = 'media__content';

            let content__img = document.createElement('img');
            content__img.className = 'content__img';
            content__img.src = list.img[count]
            count++;
            media__content.appendChild(content__img);

            let content__aside = document.createElement('div');
            content__aside.className = 'content__aside';

            let aside__title = document.createElement('h2');
            aside__title.textContent = list.title[i+k]
            aside__title.className = 'aside__title';
            content__aside.appendChild(aside__title);

            let aside__sub = document.createElement('h3');
            aside__sub.textContent = list.company[i+k]
            aside__sub.className = 'aside__sub-title';
            content__aside.appendChild(aside__sub);

            let aside__img = document.createElement('img');
            aside__img.className = 'aside__img';
            aside__img.src = 'images/Component 1.svg'
            content__aside.appendChild(aside__img);

            media__content.appendChild(content__aside);

            content1.appendChild(media__content);
        }
        anime.appendChild(content1);
    }
    let content = document.querySelectorAll('.content__aside');
    let video = document.querySelector('.content__video');
    let theme = document.querySelector('.theme');
    let iframe = video.querySelector('iframe');
    let body = document.querySelector('.page__body');
    
    for(let elem = 0; elem<content.length; elem++){
        content[elem].addEventListener('mouseover', function(){
            content[elem].style.opacity = 1;
            content[elem].previousElementSibling.style.filter = 'brightness(0.2)';
        })
        content[elem].addEventListener('mouseout', function(){
            content[elem].style.opacity = 0;
            content[elem].previousElementSibling.style.filter = 'brightness(1)';
        })
        content[elem].addEventListener('click', function(){
            iframe.src = video__arr[elem];
            setTimeout(function(){
                video.classList.toggle('video--inactive');
                video.classList.toggle('video--active'); 
            },500)
            body.classList.add('lock');
            theme.classList.add('dark');
        })
    }
    video.addEventListener('click', function(){
        video.classList.toggle('video--inactive');
        video.classList.toggle('video--active');
        theme.classList.remove('dark');
        body.classList.remove('lock');
        iframe.src = '';
    })
    let media = document.querySelector('.main__media');
    let btn = document.querySelector('.media__btn');
    btn.addEventListener('click', function(){
        btn.style.opacity = '0';
        setTimeout(function(){
            btn.style.display = 'none';
        }, 100)
        anime.classList.remove('anime--inactive');
        anime.classList.add('anime--active');
    })
})()
