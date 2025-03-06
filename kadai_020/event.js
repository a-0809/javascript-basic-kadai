const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
    const message =document.getElementById('text');

    message.textContent = 'ボタンをクリックしました';
});