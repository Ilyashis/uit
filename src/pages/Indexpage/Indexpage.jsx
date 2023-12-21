// Layout Components
import RootLayout from '@components/layouts'

export default function Indexpage() {
  return (
    <>
      <RootLayout />
      <div style={{ margin: 24 }}>
        <h1></h1>
        <a href="/projects">Список проектов</a> <br />
        <a href="/projecttest">Страница проекта</a> <br />
        <a href="/interpret">Интерпретация</a> <br />
        <a href="/cube">3D вид</a> <br />
        <a href="/corrshem">Корреляционная схема</a> <br />
        <a href="/import">Импорт</a> <br />

      </div>
    </>
  );
}
