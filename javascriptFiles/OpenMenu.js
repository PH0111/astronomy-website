// احصل على العناصر من الصفحة
const toggleButton = document.getElementById('toggleButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const barOne = document.querySelector('.bar1');
const barTow = document.querySelector('.bar2');
const barThre = document.querySelector('.bar3');

// اضف مستمع حدث للزر
toggleButton.addEventListener('click', () => {
    // قم بتغيير عرض القائمة عند النقر
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});

// اخفاء القائمة عندما يتم النقر خارجها
document.addEventListener('click', (event) => {
    if (event.target !== toggleButton && event.target !== dropdownMenu) {
        dropdownMenu.style.display = 'none';
    };
});

// منع اختفاء القائمة عند النقر داخلها
dropdownMenu.addEventListener('click', (event) => {
    event.stopPropagation();
});