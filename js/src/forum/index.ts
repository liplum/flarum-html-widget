import app from 'flarum/common/app';
import registerWidget from '../common/register';

app.initializers.add('liplum-html-widget', () => {
  registerWidget(app);
});
