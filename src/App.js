import './App.css';
import Accordion from './Accordion';

function App() {
  return (
    <div className="wrapper">
      <div className='accordion'>
        {
          data.map((item, i) => {
            return (
              <Accordion item={item}/>
            );
          })
        }
      </div>
    </div>
  );
}

const data = [{
  "Question": "Question 1",
  "Answer": "dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis"
}, {
  "Question": "Question 2",
  "Answer": "at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia"
}, {
  "Question": "Question 3",
  "Answer": "lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede"
}, {
  "Question": "Question 4",
  "Answer": "aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante"
}, {
  "Question": "Question 5",
  "Answer": "in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam"
}, {
  "Question": "Question 6",
  "Answer": "elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl"
}, {
  "Question": "Question 7",
  "Answer": "ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis"
}, {
  "Question": "Question 8",
  "Answer": "id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros"
}, {
  "Question": "Question 9",
  "Answer": "consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus"
}, {
  "Question": "Question 10",
  "Answer": "posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique"
}];


export default App;
