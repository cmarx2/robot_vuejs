import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage';
import RobotBuilder from '../build/RobotBuilder';
import PartsInfo from '../parts/PartInfo';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: HomePage,
    }, {
        path: '/build',
        name: 'Build',
        component: RobotBuilder,
    }, {
        path: '/parts/:partType/:id',
        name: 'Parts',
        component: PartsInfo,
    }],
});