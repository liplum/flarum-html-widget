import app from 'flarum/admin/app';
import commonApp from 'flarum/common/app';
import registerWidget from '../common/register';
import { extName } from '../common';
// import SettingsModal from 'flarum/admin/components/SettingsModal';

app.initializers.add('liplum-html-widget', () => {
  registerWidget(commonApp);

  app.extensionData
    .for(extName)
    .registerSetting({
      setting: `${extName}.icon`,
      label: app.translator.trans(`${extName}.admin.icon.label`),
      help: app.translator.trans(`${extName}.admin.icon.help`),
      type: `text`,
    })
    .registerSetting({
      setting: `${extName}.title`,
      label: app.translator.trans(`${extName}.admin.title.label`),
      help: app.translator.trans(`${extName}.admin.title.help`),
      type: `text`,
    })
    .registerSetting(function () {
      $("#html-textarea").on("keyup", () => {
        const srcdoc = $("#html-textarea").val();
        $("#html-live-preview").attr("srcdoc", `${srcdoc}`);
      })
      return (
        <div>
          <aside class="html-warning">
            {app.translator.trans(`${extName}.admin.warning`)}
          </aside>
          <div style={{
            display: "inline-flex",
          }}>
            <textarea id="html-textarea"
              style={{
                height: "300px",
                width: "500px",
                margin: "0 auto",
                marginBottom: "50px",
              }}
              bidi={this.setting(`${extName}.innerHtml`)}
            />
            <iframe id="html-live-preview"
              style={{
                height: "300px",
                width: "480px",
                marginLeft: "8px",
                border: "0px",
              }}
            />
          </div>
        </div>
      );
    });
});
