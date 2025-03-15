import app from 'flarum/admin/app';
import commonApp from 'flarum/common/app';
import registerWidget from '../common/register';
import { extName } from '../common';
// import SettingsModal from 'flarum/admin/components/SettingsModal';

app.initializers.add('liplum-html-widget', () => {
  registerWidget(commonApp);

  app.extensionData
    .for(extName)
    .registerSetting(function () {
      const warningMessage = app.translator.trans(`${extName}.admin.warning`);
      $("textarea").on("keyup", () => {
        const srcdoc = $("#html-textarea").val();
        $("#liveoutp").attr("srcdoc", `${srcdoc}`);
      });
      return (
        <div className="Form-group settings-html" >
          <aside class="html-warning"> {warningMessage} </aside>
          <div class="text-and-prw">
            <textarea id="html-textarea" className="FormControl html-textarea" bidi={this.setting(`${extName}.innerHtml`)} />
            <iframe id="html-live-preview" > </iframe>
          </div>
        </div>
      );
    });
});
