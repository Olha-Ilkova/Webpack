import Comment from "./Comment";
import './styles/style.css'
import userAvatar from './assets/logo.png'
import './styles/less/styles.less'
import './styles/scss/styles.sass'
import { Tooltip, Toast, Popover } from 'bootstrap';
import { createPopper } from '@popperjs/core';
import postcss from 'postcss';
import * as csstree from 'css-tree';
import color from 'color';


const comment = new Comment('Lesson about Webpack!!!', userAvatar);

console.log(comment.toString());