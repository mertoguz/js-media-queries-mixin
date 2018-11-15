'use strict';

/**
 *
 *  Javascript Media Queries Mixin
 *  @author Mert Oğuz
 *
 *  1) Import and add to mixins object of Vue component.
 *  2) Use everywhere like css media queries. e.g. <component v-if="isScreenSm" :class="{'screen-sm': isScreenSm}"/>
 *
 */

export const isScreenXs = {
    data () {
        const screenXs = window.matchMedia('screen and (min-width: 480px)');
        screenXs.onchange = ({matches}) => {
            this.isScreenXs = matches;
        };

        return { isScreenXs: screenXs.matches };
    }
};

export const isScreenSm = {
    data () {
        const screenSm = window.matchMedia('screen and (min-width: 768px)');
        screenSm.onchange = ({matches}) => {
            this.isScreenSm = matches;
        };

        return { isScreenSm: screenSm.matches };
    }
};

export const isScreenMd = {
    data () {
        const screenMd = window.matchMedia('screen and (min-width: 992px)');
        screenMd.onchange = ({matches}) => {
            this.isScreenMd = matches;
        };

        return { isScreenMd: screenMd.matches };
    }
};

export const isScreenLg = {
    data () {
        const screenLg = window.matchMedia('screen and (min-width: 1200px)');
        screenLg.onchange = ({matches}) => {
            this.isScreenLg = matches;
        };
        return { isScreenLg: screenLg.matches };
    }
};

export const mediaQueriesAll = {
    data () {
        const screenXs = window.matchMedia('screen and (min-width: ' + this.globals.layout.xs + 'px)');
        const screenSm = window.matchMedia('screen and (min-width: ' + this.globals.layout.sm + 'px)');
        const screenMd = window.matchMedia('screen and (min-width: ' + this.globals.layout.md + 'px)');
        const screenLg = window.matchMedia('screen and (min-width: ' + this.globals.layout.lg + 'px)');

        screenXs.onchange = ({matches}) => {
            this.isScreenXs = matches;
        };
        screenSm.onchange = ({matches}) => {
            this.isScreenSm = matches;
        };
        screenMd.onchange = ({matches}) => {
            this.isScreenMd = matches;
        };
        screenLg.onchange = ({matches}) => {
            this.isScreenLg = matches;
        };

        return {
            isScreenXs: screenXs.matches,
            isScreenSm: screenSm.matches,
            isScreenMd: screenMd.matches,
            isScreenLg: screenLg.matches,
        };
    },
};

export default mediaQueriesAll;
