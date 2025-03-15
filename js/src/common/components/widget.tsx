import app from 'flarum/common/app';
import Widget, { WidgetAttrs } from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import { extName } from '../../r';

interface HtmlWidgetAttrs extends WidgetAttrs {

}

const htmlId = "liplum-html-widget"

export default class HtmlWidget extends Widget<HtmlWidgetAttrs> {
  className(): string {
    return 'liplum-html-widget'
  }

  icon(): string {
    const icon = app.forum.attribute<string>(`${extName}.icon`)
    return icon
  }

  title(): string {
    const title = app.forum.attribute<string>(`${extName}.title`)
    return title
  }

  content() {
    return <div id={htmlId}></div>
  }

  oncreate(vnode): void {
    const innerHtml = app.forum.attribute<string>(`${extName}.innerHtml`)
    const e = document.getElementById(htmlId)
    if (e) {
      e.innerHTML = innerHtml
    }
  }
}
