// Buttons Animation
window.onload = () => {
    let buttons = document.querySelectorAll('.btn');
    window.addEventListener('mousemove', (e) => {
        buttons.forEach(btn => {
            let button_box = btn.getBoundingClientRect();
            if(e.pageX > button_box.left && e.pageY > button_box.top + window.pageYOffset && e.pageX < button_box.left + button_box.width && e.pageY < button_box.top + button_box.height + window.pageYOffset){
                if(btn.querySelectorAll('.btn__circle').length === 0){
                    let circle = document.createElement('div');
                    circle.classList.add('btn__circle');
                    circle.style.top = `${e.y - button_box.top - 25}px`;
                    circle.style.left = `${e.x - button_box.left - 25}px`;
                    btn.append(circle);
                    let cursor = document.querySelector('.cursor-circle');
                    if(cursor){
                        cursor.style.opacity = '0';
                    }
                }
            }
            else{
                btn.querySelectorAll('.btn__circle').forEach(circle => {
                    circle.style.top = `${e.y - button_box.top - 25}px`;
                    circle.style.left = `${e.x - button_box.left - 25}px`;
                    circle.classList.add('btn__circle_disable');
                    let cursor = document.querySelector('.cursor-circle');
                    if(cursor){
                        cursor.style.opacity = '1';
                    }
                    setTimeout(() => {
                        circle.remove();
                    }, 300);
                });
            }
        });
    });
}