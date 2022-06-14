/*
 *@description:
 * @author wayne
 * @date 2022-06-14 13:27
*/


/**
 *
 * @param {*} id
 * @param {*} animations
 * 执行动画库函数【不用修改,可自行调整位置】
 * 声明初始值
 * 判断动画是否结束
 */
function playAnimation(id, animations) {
    let index = 0;
    let ele = document.querySelector(id);
    setAnimation(ele, animations[index]);
    ele.addEventListener("webkitAnimationEnd", function () {
        if (index < animations.length - 1) {
            index++;
            setAnimation(ele, animations[index]);
        }
    });
}
/**
 *
 * @param {*} element
 * @param {*} animation
 * 执行动画库函数【不用修改,可自行调整位置】
 * 取index对应的动画
 * 给元素animation重新赋值
 */
function setAnimation(element, animation) {
    const action = `${animation.duration * 1000}ms ease ${animation.delayed * 1000}ms ${animation.loop ? "infinite" : animation.frequency} normal both running ${
        animation.type
    }`;
    element.style.animation = action;
}

export {
    playAnimation
}