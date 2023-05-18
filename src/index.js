import Comment from "./Comment";
import './styles/style.css'
import userAvatar from './assets/logo.png'
import './styles/less/styles.less'
import './styles/scss/styles.sass'

const comment = new Comment('Lesson about Webpack!!!', userAvatar);

console.log(comment.toString());