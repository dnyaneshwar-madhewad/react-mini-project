import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Link to="/page1">Page1 | </Link>
      <Link to="/page2">Page2</Link>

      <Routes>
        <Route path="/" element={<Page1 />}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
      </Routes>
    </Router>
  );
}

function Page1() {
  return (
    <div>
      <h1>Page 1</h1>
      <p>
        Page1 ki kahana, Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Tempora quos, laborum magni fuga repellendus accusamus incidunt
        voluptates dolorem quas tenetur excepturi consequatur laudantium aut
        dicta aliquid consectetur. Excepturi ab mollitia dolore obcaecati
        suscipit nisi eius, eos voluptate consectetur iusto fugit quo, aliquid
        sint consequatur dolores ducimus magni, qui eligendi! Mollitia at
        explicabo blanditiis doloribus deserunt exercitationem illo dicta nisi a
        earum, fugiat culpa optio eius repellendus laborum dolorem rerum. Nam,
        nostrum ipsa laudantium nihil eos iusto corporis, saepe ea voluptates
        voluptate aspernatur eius iste placeat harum reiciendis alias velit
        voluptatem ut? Ut non itaque excepturi sapiente repellat perferendis
        pariatur eos! Page1 ki kahana, Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Tempora quos, laborum magni fuga repellendus accusamus
        incidunt voluptates dolorem quas tenetur excepturi consequatur
        laudantium aut dicta aliquid consectetur. Excepturi ab mollitia dolore
        obcaecati suscipit nisi eius, eos voluptate consectetur iusto fugit quo,
        aliquid sint consequatur dolores ducimus magni, qui eligendi! Mollitia
        at explicabo blanditiis doloribus deserunt exercitationem illo dicta
        nisi a earum, fugiat culpa optio eius repellendus laborum dolorem rerum.
        Nam, nostrum ipsa laudantium nihil eos iusto corporis, saepe ea
        voluptates voluptate aspernatur eius iste placeat harum reiciendis alias
        velit voluptatem ut? Ut non itaque excepturi sapiente repellat
        perferendis pariatur eos!
      </p>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h1>Page 2</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
        molestias iste nam impedit, quasi ipsam doloremque accusantium vel
        possimus quaerat, eos quisquam? Enim asperiores excepturi rerum
        assumenda placeat corporis dolorum earum sit temporibus. Suscipit ex
        quibusdam fugit cupiditate exercitationem, provident atque cum laborum
        quas voluptatem consequatur libero quos molestias, excepturi accusamus
        quidem reiciendis? Eveniet nostrum doloremque nam sint sapiente magnam
        est distinctio dolorum numquam minima praesentium saepe commodi, nulla
        perferendis expedita a, laborum hic dolor, consectetur ea. Reiciendis
        nihil est sequi placeat soluta omnis excepturi natus blanditiis
        repudiandae, magni eligendi. Est et error aliquam libero illo beatae
        voluptate nam, fugit fuga! Et quod dolor placeat minus vel error
        voluptates cupiditate facere doloremque porro amet sunt aliquam nam
        exercitationem illum quidem sed doloribus at fugit iusto officiis, eius
        neque. Sed saepe ipsum nesciunt accusantium maiores libero ea quidem
        nostrum perspiciatis necessitatibus impedit aut, aliquam error, mollitia
        incidunt delectus inventore quis dolorem. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Tenetur molestias iste nam impedit, quasi
        ipsam doloremque accusantium vel possimus quaerat, eos quisquam? Enim
        asperiores excepturi rerum assumenda placeat corporis dolorum earum sit
        temporibus. Suscipit ex quibusdam fugit cupiditate exercitationem,
        provident atque cum laborum quas voluptatem consequatur libero quos
        molestias, excepturi accusamus quidem reiciendis? Eveniet nostrum
        doloremque nam sint sapiente magnam est distinctio dolorum numquam
        minima praesentium saepe commodi, nulla perferendis expedita a, laborum
        hic dolor, consectetur ea. Reiciendis nihil est sequi placeat soluta
        omnis excepturi natus blanditiis repudiandae, magni eligendi. Est et
        error aliquam libero illo beatae voluptate nam, fugit fuga! Et quod
        dolor placeat minus vel error voluptates cupiditate facere doloremque
        porro amet sunt aliquam nam exercitationem illum quidem sed doloribus at
        fugit iusto officiis, eius neque. Sed saepe ipsum nesciunt accusantium
        maiores libero ea quidem nostrum perspiciatis necessitatibus impedit
        aut, aliquam error, mollitia incidunt delectus inventore quis dolorem.
      </p>
    </div>
  );
}