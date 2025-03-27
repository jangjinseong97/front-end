const $heading = document.querySelector('#heading');
        $heading.addEventListener('click',(e) => {
           e.target.style.color = 'red';
           e.target.style.textDecoration = 'line-through';
        
           console.log(e.target.style.color);
        });