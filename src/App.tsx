import React from 'react';
import './App.css';
// cannot find props => 出来た。propsを排除した。
// Devyan
// https://codepen.io/lovemaui/pen/bGwwxwx
const { useState } = React;

const products = [
  {
    header: '人生の目的は何か、教えて下さい。',
    body: '質問が間違っているような気がしないでもありませんが、生まれてきてしまったのでしょうがない。目的がないと生きているような気がしない人がいることも理解できます。自分で決めたらいいと思うのですが、例えばキリスト教の神の教えに従うとか。天啓を待つとか。人のために尽くすとか。色んなのがあるのでできれば私に迷惑が及ばないものを選択してくれると嬉しい。'
  },
  {
    header: '楽しいことをしたい、楽しいことだけをして一生を過ごしたい。',
    body: '辛いことが一番楽しいとかはどうですか。役に立ちますよ。あなたの楽しいことが無害なことだったり、人の役に立つことだと良いのですが、それは保証できませんよね。私の場合、非常に危険なこと（秘密）なので言葉に出すことも憚られるので、諦めています。それでも結構楽しく生きています。'
  },
  {
    header: '子供の頃は良かった、あの頃に戻りたい。',
    body: '嘘です。子供の頃は良かったと言う人の正直な気持ちを疑うわけではありませんが、普通子供の頃は地獄でしょう。忘れているか美化しているか耄碌しているか。子供の頃は悲しみも深いけど喜びも大きいので、喜びの方に焦点を合わせれば、良かったことになるのかなぁ。戻っても良いけど不安と悲しみも戻りますので覚悟して戻って下さい。'
  }
];

const cardIcon = '+';
const cardIconRotate = '-';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [rotateClass, setRotateState] = useState(cardIcon);

  // const { header, body } = props;


  function toggle() {
    setIsOpen(!isOpen);
    setRotateState(
      isOpen === true
        ? cardIcon
        : cardIconRotate
    );
  }

  return (
    <div className="App card">
      {
        products.map((product) => {
          const { header, body } = product;
          return (
            <div className="card">
              <div
                className="card-header"
                onClick={toggle}>
                <h2>{header}</h2>
                {/* <i className={rotateClass}>{rotateClass}</i> */}
                <i className="rotateClass">{rotateClass}</i>

              </div>
              {isOpen && (
                <div className="card-body">{body}</div>
              )}
            </div>
          );
        })
      }
    </div >
  );
}

export default App;
