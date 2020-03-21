import { Component, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'obd-scroll',
  styleUrl: 'scroll.scss',
  shadow: true
})
export class Scroll {
    @Prop() scrollTo: string = '';

    @Listen('click', { capture: true })
    handleClick() {
        let target = document.getElementById(this.scrollTo);
        
        if (target) {
            this.animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 500, true);
        }
    }

    private animate(elem, style, unit, from, to, time, prop) {
        if (!elem) return;
        
        let start = new Date().getTime();
        let timer = setInterval(function () {
                let step = Math.min(1, (new Date().getTime() - start) / time);
                if (prop) {
                    elem[style] = (from + step * (to - from)) + unit;
                } else {
                    elem.style[style] = (from + step * (to - from)) + unit;
                }
                if (step === 1) {
                    clearInterval(timer);
                }
            }, 25);
        if (prop) {
              elem[style] = from+unit;
        } else {
              elem.style[style] = from+unit;
        }
    }

    render() {
        return (
            <obd-button>
                <slot></slot>
            </obd-button>
        );
    }

}
