// Buttons Animation
window.onload = () => {
    let buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.btn');
    let hovered: HTMLElement[] = [];
    window.addEventListener('mousemove', (e) => {
        buttons.forEach((btn: HTMLElement) => {
            let button_box: DOMRect = btn.getBoundingClientRect();
            if(e.pageX > button_box.left && e.pageY > button_box.top + window.pageYOffset && e.pageX < button_box.left + button_box.width && e.pageY < button_box.top + button_box.height + window.pageYOffset){
                if(btn.querySelectorAll('.btn__circle').length === 0){
                    hovered.push(btn);
                    let circle: HTMLDivElement = document.createElement('div') as HTMLDivElement;
                    circle.classList.add('btn__circle');
                    circle.style.top = `${e.y - button_box.top - 25}px`;
                    circle.style.left = `${e.x - button_box.left - 25}px`;
                    btn.append(circle);
                    let cursor: HTMLElement = document.querySelector('.cursor-circle') as HTMLElement;
                    if(cursor){
                        cursor.style.display = "none";
                    }
                    setTimeout(() => {
                        hovered.splice(hovered.indexOf(btn), 1);
                    }, 300);
                }
            }
            else{
                const removeCircles = (): void => {
                    let circles: NodeListOf<HTMLElement> = btn.querySelectorAll('.btn__circle');
                    circles.forEach((circle: HTMLElement) => {
                        if(circle.classList.contains('btn__circle_disable')) return;
                        circle.style.top = `${e.y - button_box.top - 25}px`;
                        circle.style.left = `${e.x - button_box.left - 25}px`;
                        circle.classList.add('btn__circle_disable');
                        let cursor: HTMLElement = document.querySelector('.cursor-circle') as HTMLElement;
                        if(cursor){
                            cursor.style.display = 'block';
                        }
                        setTimeout(() => {
                            circle.remove();
                        }, 300);
                    });
                };
                if(hovered.includes(btn)){
                    setTimeout(removeCircles, 300);
                }
                else{
                    removeCircles();
                }
            }
        });
    });
}