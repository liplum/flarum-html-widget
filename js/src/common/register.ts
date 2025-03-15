import Application from 'flarum/common/Application';
import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';
import HtmlWidget from './components/widget';
import { extName } from '../r';

export default function (app: Application) {
  new Widgets()
    .add({
      key: 'liplum-html-widget',
      component: HtmlWidget,
      isDisabled: false,
      isUnique: true,
      placement: 'end',
      position: 2,
    })
    .extend(app, extName);
}
