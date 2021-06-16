function StartProgressBar(id, delay) {
    let progress = 0;
    let bar = document.querySelector(`#bar_${id}`);
    let percentage = document.querySelector(`#value_${id}`);
    function fc() {
        progress++;
        bar.style.width = progress + "%";
        percentage.innerHTML = progress + "%";
        if(progress === 100) clearInterval(interval);
    }
    let interval = setInterval(fc, delay);
}

StartProgressBar("1", 60);
StartProgressBar("2", 40);
StartProgressBar("3", 10);
StartProgressBar("4", 20);
