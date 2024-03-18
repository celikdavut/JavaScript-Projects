const counterElement = document.getElementById('counter');
const targetCount = 100;
const duration = 5000;

const counterElement2 = document.getElementById('counter2');
const targetCount2 = 1000;

const counterElement3 = document.getElementById('counter3');
const targetCount3 = 400;

function updateCounter(currentCount, targetCount, duration) {
    const increment = Math.ceil(targetCount / duration);
    if (currentCount < targetCount) {
        setTimeout(function () {
            currentCount += increment;
            if (currentCount > targetCount) {
                currentCount = targetCount;
            }
            counterElement.textContent = currentCount.toLocaleString() + 'K+';
            updateCounter(currentCount, targetCount, duration);
        }, 40);
    }
}


function updateCounter2(currentCount2, targetCount2, duration) {
    const increment2 = Math.ceil(targetCount2 / duration);
    if (currentCount2 < targetCount2) {
        setTimeout(function () {
            currentCount2 += increment2;
            if (currentCount2 > targetCount2) {
                currentCount2 = targetCount2;
            }
            counterElement2.textContent = currentCount2.toLocaleString();
            updateCounter2(currentCount2, targetCount2, duration);
        }, 5);
    }
}


function updateCounter3(currentCount3, targetCount3, duration) {
    const increment3 = Math.ceil(targetCount3 / duration);
    if (currentCount3 < targetCount3) {
        setTimeout(function () {
            currentCount3 += increment3;
            if (currentCount3 > targetCount3) {
                currentCount3 = targetCount3;
            }
            counterElement3.textContent = currentCount3.toLocaleString() + 'K+';
            updateCounter3(currentCount3, targetCount3, duration);
        }, 15);
    }
}



window.onload = function () {
    updateCounter(0, targetCount, duration);
    updateCounter2(0, targetCount2, duration);
    updateCounter3(0, targetCount3, duration);
};